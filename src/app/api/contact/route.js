import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, subject, message, preferredDate } = body;

    // Validazione base
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Campi obbligatori mancanti' },
        { status: 400 }
      );
    }

    // Validazione email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email non valida' },
        { status: 400 }
      );
    }

    // Mappa l'oggetto
    const subjectMap = {
      'informazioni': 'Richiesta Informazioni',
      'assistenza': 'Assistenza Post-Vendita',
      'studio-forma-viso': 'Prenotazione Consulenza Studio Forma Viso',
      'altro': 'Altro',
    };

    const subjectText = subject ? subjectMap[subject] || 'Richiesta Generale' : 'Richiesta Generale';

    // Invia email a Ottica Fazio
    const { data, error } = await resend.emails.send({
      from: 'Ottica Fazio <onboarding@resend.dev>',
      to: ['otticafazio@outlook.it'],
      replyTo: email,
      subject: `[Sito Web] ${subjectText} - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #b91c1c; border-bottom: 2px solid #b91c1c; padding-bottom: 10px;">
            Nuovo Messaggio dal Sito Web
          </h2>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Dettagli Contatto</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Nome:</td>
                <td style="padding: 8px 0;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #b91c1c;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Telefono:</td>
                <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #b91c1c;">${phone}</a></td>
              </tr>
              ` : ''}
              ${preferredDate ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Data Preferita:</td>
                <td style="padding: 8px 0;">${new Date(preferredDate).toLocaleDateString('it-IT', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Oggetto:</td>
                <td style="padding: 8px 0;">${subjectText}</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #b91c1c; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Messaggio</h3>
            <p style="line-height: 1.6; color: #666; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="text-align: center; padding: 20px 0; color: #999; font-size: 12px; border-top: 1px solid #ddd;">
            <p>Questo messaggio è stato inviato dal modulo di contatto su <a href="https://ottica-fazio.vercel.app" style="color: #b91c1c; text-decoration: none; font-weight: bold;">ottica-fazio.vercel.app</a></p>
            <p>Per rispondere, clicca sul pulsante "Rispondi" nella tua email o scrivi direttamente a: <a href="mailto:${email}" style="color: #b91c1c;">${email}</a></p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json(
        { error: 'Errore durante l\'invio dell\'email' },
        { status: 500 }
      );
    }

    console.log('✅ Email inviata con successo!');
    console.log('Email ID:', data.id);
    console.log('Destinatario:', 'otticafazio@outlook.it');
    console.log('Vai su https://resend.com/emails per vedere lo stato');

    return NextResponse.json(
      {
        success: true,
        message: 'Email inviata con successo',
        id: data.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { error: 'Errore del server' },
      { status: 500 }
    );
  }
}
