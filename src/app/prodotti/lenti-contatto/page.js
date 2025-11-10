'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import ContactLensTypes from '@/components/sections/ContactLensTypes';
import ContactLensBrands from '@/components/sections/ContactLensBrands';

export default function OcchialiSole() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = ['/models/mod1.jpg', '/models/mod2.avif', '/models/mod3.webp'];

    useEffect(() => {
        const id = setInterval(() => {
            setCurrentImageIndex((p) => (p + 1) % images.length);
        }, 4000);
        return () => clearInterval(id);
    }, [images.length]);

    return (
        <main className="md:mt-16">


            {/* Sezione Tipologie Lenti a Contatto */}
            <ContactLensTypes />

            {/* Sezione Brand Partner */}
            <ContactLensBrands />
        </main>
    );
}
