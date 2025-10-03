# Ottica Fazio - Project Context

## 📋 Panoramica Progetto

**Ottica Fazio** è un sito web per un'ottica professionale con 2 sedi in Sicilia (Augusta e Villasmundo). Il progetto è sviluppato da **Francesco Romito**.

---

## 🛠️ Stack Tecnologico

### Core
- **Next.js 15.4.1** (App Router)
- **React 19.1.0**
- **Tailwind CSS 4.1.11**
- **Turbopack** (dev mode)

### Animazioni & UX
- **Framer Motion 12.23.6** - Animazioni componenti
- **GSAP 3.13.0** - Animazioni avanzate
- **Lenis 1.3.7** - Smooth scrolling
- **Lottie React 2.4.1** - Animazioni vettoriali

### UI & Icons
- **Lucide React** - Icone moderne
- **React Icons** - Icone aggiuntive

### Analytics
- **Vercel Analytics** - Tracking performance

---

## 📂 Struttura Directory

```
ottica-fazio/
├── src/
│   ├── app/                          # Next.js App Router (18 file)
│   │   ├── page.js                   # Homepage
│   │   ├── layout.js                 # Root layout
│   │   ├── globals.css               # Stili globali + palette colori
│   │   ├── prodotti/
│   │   │   ├── page.js
│   │   │   ├── occhiali-sole/page.js
│   │   │   ├── occhiali-vista/page.js
│   │   │   ├── lenti-contatto/page.js
│   │   │   └── nuance-audio/page.js
│   │   ├── servizi/
│   │   │   ├── page.js
│   │   │   ├── esame-acuita-visiva/page.js
│   │   │   ├── esame-lampada-fessura/page.js
│   │   │   ├── topografia-corneale/page.js
│   │   │   └── lenti-contatto/page.js
│   │   ├── su-di-noi/
│   │   │   ├── page.js
│   │   │   ├── team/page.js
│   │   │   └── dove-trovarci/page.js
│   │   └── contatti/page.js
│   │
│   ├── components/                   # Componenti riutilizzabili (12 file)
│   │   ├── animations/
│   │   │   ├── FadeInView.js         # Fade-in con direzione
│   │   │   ├── StaggerContainer.js   # Animazioni scaglionate
│   │   │   └── HoverEffect.js        # Effetti hover
│   │   ├── layout/
│   │   │   └── SmoothScroll.js       # Lenis smooth scroll
│   │   ├── navigation/
│   │   │   └── LiquidGlassNavbar.js  # Navbar glassmorphism
│   │   └── sections/                 # Sezioni homepage
│   │       ├── Hero.js               # Video Nuance Audio
│   │       ├── LogosCarousel.js      # Carosello brand infinito
│   │       ├── MostSold.js           # Bestseller products
│   │       ├── OurProducts.js        # Cards con flip 3D
│   │       ├── OurServices.js        # Grid servizi
│   │       └── ContactUs.js          # Form + info contatti
│   │
│   └── lib/                          # Utilities (vuota attualmente)
│
├── public/
│   ├── occhiali/
│   │   ├── sole/                     # 14 immagini occhiali da sole
│   │   └── vista/                    # 9 immagini occhiali da vista
│   ├── logos/                        # 29 loghi brand partner
│   ├── models/                       # 4 immagini modelli
│   ├── services/                     # 8 immagini servizi
│   ├── team/                         # Foto team
│   └── videos/                       # Video Nuance Audio
│
├── package.json
├── next.config.mjs
├── tailwind.config.js
└── README.md
```

---

## 🎨 Design System

### Palette Colori (Brand Identity)

```css
/* Rosso Bordeaux - Colore principale dal logo */
--color-primary: #b91c1c
--color-bordeaux-500: #b91c1c
--color-bordeaux-600: #991b1b

/* Grigio Argento - Dal testo "Fazio" */
--color-silver-warm-500: #78716c
--color-warm-gray-600: #57534e

/* Beige/Crema - Sfondo insegna */
--color-cream: #fef3c7

/* Oro - Accenti premium */
--color-gold: #f59e0b
```

### Typography

- **Headings (h1-h6):** Josefin Sans (400, 700)
- **Body & Paragraphs:** Be Vietnam Pro (400, 500, 700)
- Fonts caricati da Google Fonts con `display: swap`

### Breakpoints

```css
Mobile: < 640px
Tablet: 640px - 1023px
Desktop: 1024px - 1499px
Large Desktop: ≥ 1500px (navbar desktop mode)
```

---

## 📱 Componenti Principali

### LiquidGlassNavbar
- Glassmorphism effect con backdrop-blur
- Responsive: hamburger menu < 1500px, navbar completa ≥ 1500px
- Dropdown menu per Prodotti, Servizi, Su di noi
- Navigation icons: Home, Glasses, Users, Info

### Hero Section
- 3 layout responsive (mobile stack, tablet vertical, desktop split)
- Video autoplay Nuance Audio (.webm format)
- Modal video on click
- Stagger animations con Framer Motion

### LogosCarousel
- Infinite scroll con requestAnimationFrame
- 29 brand partner (Ray-Ban, Persol, Gucci, Versace, etc.)
- Velocità adattiva: mobile (0.7), tablet (0.5), desktop (0.3)
- Gradient fade ai bordi

### Animazioni

**FadeInView.js:**
- Direzioni: up, down, left, right, none
- Opzioni: blur, scale
- Intersection Observer con `once: true`

**StaggerContainer.js:**
- Container con staggerChildren delay
- StaggerItem componente figlio
- Blur + scale effects

---

## 🗺️ Struttura Homepage (page.js)

1. **Hero** - Nuance Audio video hero
2. **LogosCarousel** - Brand partner scroll infinito
3. **MostSold** - 3 bestseller products con pricing
4. **OurProducts** - 4 categorie con flip cards 3D
5. **OurServices** - 5 servizi in grid responsive
6. **ContactUs** - Form + orari + info sedi

---

## 🏬 Informazioni Business

### Sedi

**Augusta (Sede Principale)**
- Indirizzo: Via Principe Umberto 76, 96011 Augusta (SR)
- Tel: 0931 521985
- Google Maps: [Link diretto]

**Villasmundo**
- Indirizzo: Via Vittorio Emanuele 67, 96010 Villasmundo (SR)
- Tel: 0931 959425
- Google Maps: [Link diretto]

### Contatti
- Email: otticafazio@outlook.it

### Orari di Apertura
- **Lunedì:** 16:30 - 20:00
- **Mar-Mer-Gio:** 09:00 - 13:00 | 16:30 - 20:00
- **Ven-Sab:** 09:00 - 13:00 | 16:30 - 20:00
- **Domenica:** Chiuso

---

## 🛍️ Prodotti & Servizi

### Prodotti Principali

1. **Occhiali da Sole**
   - 500+ modelli disponibili (14 prodotti visualizzati in pagina)
   - Protezione UV400
   - Prezzi da €165 a €480
   - Brand: Ray-Ban, Persol, Gucci, Versace, Dolce & Gabbana, Emporio Armani, Saint Laurent
   - **Features pagina dedicata:**
     - Hero section responsive con carosello immagini
     - Sistema filtri dropdown (Brand, Tipo, Fascia Prezzo)
     - Griglia prodotti responsive (1/2/3/4 colonne)
     - Modale prodotto con galleria 4 immagini
     - Modale scelta sede per prenotazioni
     - Link diretto a pagina "Dove trovarci"
     - Animazioni rimosse su mobile per performance

2. **Occhiali da Vista**
   - Esame della vista incluso
   - Lenti progressive disponibili
   - Consegna in 48h

3. **Lenti a Contatto**
   - Prova gratuita
   - Giornaliere e mensili
   - Consegna mensile

4. **Nuance Audio** (NOVITÀ)
   - Dispositivi acustici integrati negli occhiali
   - EssilorLuxottica technology
   - Per perdite uditive leggere/moderate

### Servizi Specializzati

1. **Esame dell'acuità visiva**
   - Icon: Eye
   - Image: /services/acuita-visiva.png

2. **Esame in lampada a fessura**
   - Icon: Microscope
   - Image: /services/lampada-a-fessura.jpg

3. **Topografia corneale**
   - Icon: Map
   - Image: /services/topografia-corneale.webp

4. **Applicazione e valutazione lenti a contatto**
   - Icon: ContactRound
   - Image: /services/lenti.jpg

5. **Studio forma del viso**
   - Icon: Palette
   - Image: /services/Forma-viso.webp

---

## 🏷️ Brand Partner (29 loghi)

Ray-Ban, Persol, Gucci, Versace, Dolce & Gabbana, Giorgio Armani, Burberry, Tiffany & Co., Ferrari, Diesel, Michael Kors, Balenciaga, Polo Ralph Lauren, Swarovski, Saint Laurent, Jimmy Choo, Just Cavalli, Sferoflex, Centro Style, Invu, Yalea, Twinset, Luxottica, Nuance Audio

---

## 🚀 Development Commands

```bash
# Development (con Turbopack)
npm run dev

# Build production
npm run build

# Start production server
npm start

# Lint
npm run lint
```

---

## ♿ Accessibilità

- Skip link per navigazione keyboard
- ARIA labels su tutti i componenti interattivi
- Screen reader support (sr-only class)
- Form accessibili con labels e required
- Semantic HTML (main, section, article, nav)

---

## 📊 Performance & SEO

- **Next.js Image** optimization per tutte le immagini
- **Priority loading** per hero images
- **Metadata** configurato in layout.js
- **Vercel Analytics** integrato
- **Font display: swap** per performance

---

## 🎯 Feature Highlights

1. ✅ Smooth scrolling (Lenis)
2. ✅ Animazioni progressive (Framer Motion)
3. ✅ Glassmorphism navbar
4. ✅ Infinite brand carousel
5. ✅ 3D flip cards prodotti
6. ✅ Video modal interattivo
7. ✅ Form contatti completo
8. ✅ Fully responsive (mobile-first)
9. ✅ Accessibile (WCAG compliant)
10. ✅ SEO optimized
11. ✅ Sistema filtri prodotti avanzato (dropdown)
12. ✅ Modale prodotto con galleria immagini
13. ✅ Modale scelta sede per prenotazioni
14. ✅ Cursor pointer globale per tutti i bottoni

---

## 📝 Note Sviluppo

### Convenzioni Codice
- Client components: `'use client'` directive
- Componenti in PascalCase
- File componenti: .js (non .jsx)
- CSS: Tailwind utility-first
- Animazioni: Framer Motion preferito su CSS
- **CSS Globale (globals.css):**
  - `cursor: pointer` applicato automaticamente a tutti i `<button>` e `<a>`
  - Fonts custom: Josefin Sans (headings), Be Vietnam (body)
  - Palette colori custom Tailwind con variabili CSS

### Git Status (Ultimo Snapshot)
- Main branch: `main`
- Recent commits: Prodotti, refactoring, bestseller sections
- Deleted files: vecchie immagini occhiali spostate in /sole e /vista
- Untracked: public/occhiali/sole/, public/occhiali/vista/

### TODO Potenziali
- [ ] Implementare form submission backend
- [ ] Aggiungere CMS per gestione prodotti
- [ ] Ottimizzare immagini (convertire in WebP/AVIF)
- [x] Aggiungere filtri prodotti (completato - occhiali-sole)
- [ ] Sistema prenotazione appuntamenti online
- [ ] Integrazione e-commerce (futuro)

---

## 🔗 Links Utili

- **Repository:** Local - Francesco_Urban_Labs/ottica-fazio
- **Developer:** Francesco Romito
- **Copyright:** © 2025 Ottica Fazio

---

**Ultimo aggiornamento:** 3 Ottobre 2025

---

## 🆕 Ultime Modifiche (3 Ottobre 2025)

### Pagina Occhiali da Sole (/prodotti/occhiali-sole)
- ✅ Implementato sistema filtri dropdown avanzato
  - Filtri per Brand (6 opzioni)
  - Filtri per Tipo/Badge (4 opzioni: NUOVO, BESTSELLER, PREMIUM, ICONICO)
  - Filtri per Fascia Prezzo (3 range)
  - Toggle apertura/chiusura con animazione
  - Contatore filtri attivi
  - Bottone "Cancella tutto"
- ✅ Modale prodotto dettagliato
  - Galleria 4 immagini con thumbnail cliccabili
  - Badge dinamici per tipo prodotto
  - Rating e recensioni placeholder
  - Informazioni sedi disponibilità
  - CTA "Prenota Appuntamento" e "Vieni in Negozio"
- ✅ Modale scelta sede
  - Selezione tra Augusta e Villasmundo
  - Link diretti `tel:` per chiamate
  - Design minimal e user-friendly
- ✅ Ottimizzazioni mobile
  - Animazioni Framer Motion rimosse su mobile (<lg)
  - Layout responsive ottimizzato
  - Altezza modale adattiva con `max-h-[90vh]`
- ✅ CSS Globale
  - Aggiunto `cursor: pointer` per tutti i button e link
  - Miglioramento UX su tutto il sito
