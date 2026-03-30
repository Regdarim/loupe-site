/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Menu } from 'lucide-react';

// Image assets from user upload
const images = {
  hero: "/image1.jpeg",
  grid1: "/image2.jpeg",
  grid2: "/image3.jpeg",
  grid3: "/image4.jpeg",
  split1: "/image5.jpeg",
  split2: "/image6.jpeg",
};

export default function App() {
  return (
    <div className="font-body text-on-surface bg-background min-h-screen selection:bg-[#E5E2DD] selection:text-[#2C2A28]">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-outline/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
          <a href="/" className="font-headline text-2xl tracking-wide text-primary">
            LØUPE
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#studio" className="text-xs tracking-[0.15em] uppercase text-on-surface-variant hover:text-primary transition-colors">Studio</a>
            <a href="#realizacje" className="text-xs tracking-[0.15em] uppercase text-on-surface-variant hover:text-primary transition-colors">Realizacje</a>
            <a href="#podejscie" className="text-xs tracking-[0.15em] uppercase text-on-surface-variant hover:text-primary transition-colors">Podejście</a>
            <a href="#kontakt" className="text-xs tracking-[0.15em] uppercase text-on-surface-variant hover:text-primary transition-colors">Kontakt</a>
          </div>

          {/* Mobile Menu Icon */}
          <button className="md:hidden text-primary">
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative w-full h-screen overflow-hidden">
          <img 
            src={images.hero} 
            alt="Wnętrze LØUPE" 
            className="absolute inset-0 w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl tracking-[0.15em] font-light mb-6">
              LØUPE
            </h1>
            <p className="text-xs md:text-sm tracking-[0.35em] uppercase font-body font-light">
              Rare Wood. Refined.
            </p>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 text-[10px] md:text-xs tracking-[0.3em] uppercase font-body font-light">
            Scroll to explore
          </div>
        </section>

        {/* Intro Text */}
        <section id="studio" className="py-16 md:py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-3xl md:text-5xl lg:text-6xl leading-tight md:leading-tight text-primary mb-8">
              Tworzymy przestrzenie na wymiar, łącząc rzemiosło z ponadczasową estetyką.
            </h1>
            <p className="font-body text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-light">
              Nasze projekty to dialog pomiędzy formą a funkcją. Projektujemy i wykonujemy meble oraz zabudowy, które stają się integralną częścią Twojego życia.
            </p>
          </div>
        </section>

        {/* Grid Section (Nos espaces) */}
        <section id="realizacje" className="py-16 md:py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16">
            <h2 className="font-headline text-3xl md:text-4xl text-primary">Nasze realizacje</h2>
            <a href="#" className="group flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-on-surface-variant hover:text-primary transition-colors mt-4 md:mt-0">
              Zobacz pełne portfolio
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Item 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-[#E5E2DD]">
                <img 
                  src={images.grid1} 
                  alt="Zabudowy kuchenne" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-headline text-2xl text-primary mb-2">Kuchnie</h3>
              <p className="text-xs tracking-[0.1em] uppercase text-on-surface-variant">Projekt i wykonanie</p>
            </div>

            {/* Item 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-[#E5E2DD]">
                <img 
                  src={images.grid2} 
                  alt="Garderoby i przechowywanie" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-headline text-2xl text-primary mb-2">Garderoby</h3>
              <p className="text-xs tracking-[0.1em] uppercase text-on-surface-variant">Przechowywanie</p>
            </div>

            {/* Item 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-[#E5E2DD]">
                <img 
                  src={images.grid3} 
                  alt="Meble wolnostojące" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-headline text-2xl text-primary mb-2">Meble</h3>
              <p className="text-xs tracking-[0.1em] uppercase text-on-surface-variant">Detale i wykończenie</p>
            </div>
          </div>
        </section>

        {/* Split Section 1 */}
        <section id="podejscie" className="py-16 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 max-w-lg mx-auto lg:mx-0">
              <h2 className="font-headline text-3xl md:text-5xl text-primary mb-6 md:mb-8 leading-tight">
                Lokalne rzemiosło i model współpracy.
              </h2>
              <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed font-light mb-8">
                Wierzymy w krótkie łańcuchy dostaw i bezpośredni kontakt. Każdy projekt to wspólna podróż – od pierwszej koncepcji, przez dobór szlachetnych materiałów, aż po precyzyjny montaż w Twoim domu.
              </p>
              <a href="#" className="inline-block border-b border-primary pb-1 text-sm tracking-[0.1em] uppercase text-primary hover:text-on-surface-variant hover:border-on-surface-variant transition-colors">
                Poznaj nasz proces
              </a>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/5] lg:aspect-square overflow-hidden bg-[#E5E2DD]">
                <img 
                  src={images.split1} 
                  alt="Proces tworzenia" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Split Section 2 */}
        <section className="py-16 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <div className="aspect-[4/5] lg:aspect-square overflow-hidden bg-[#E5E2DD]">
                <img 
                  src={images.split2} 
                  alt="Detale stolarskie" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="max-w-lg mx-auto lg:mx-0">
              <h2 className="font-headline text-3xl md:text-5xl text-primary mb-6 md:mb-8 leading-tight">
                Bliskość dla najwyższej jakości wsparcia.
              </h2>
              <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed font-light mb-8">
                Jesteśmy blisko naszych klientów. Zrozumienie Twoich potrzeb pozwala nam tworzyć przestrzenie, które są nie tylko piękne, ale przede wszystkim funkcjonalne i dopasowane do Twojego stylu życia.
              </p>
              <a href="#" className="inline-block border-b border-primary pb-1 text-sm tracking-[0.1em] uppercase text-primary hover:text-on-surface-variant hover:border-on-surface-variant transition-colors">
                Skontaktuj się z nami
              </a>
            </div>
          </div>
        </section>

        {/* CTA / Footer Banner */}
        <section className="py-24 md:py-40 px-6 text-center bg-surface border-t border-outline/20">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-6xl text-primary mb-8">
              Zarezerwuj wyjątkowy czas na zaprojektowanie swojego wnętrza.
            </h2>
            <p className="font-body text-sm md:text-base text-on-surface-variant mb-12 font-light">
              Chcesz, abyśmy się z Tobą skontaktowali? Zostaw nam wiadomość, a wrócimy do Ciebie z propozycją spotkania.
            </p>
            <button className="bg-primary text-surface px-8 py-4 text-xs tracking-[0.15em] uppercase hover:bg-primary/80 transition-colors">
              Napisz do nas
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-outline/30 pt-16 pb-8 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="font-headline text-2xl text-primary mb-6">LØUPE</h3>
            <p className="text-sm text-on-surface-variant font-light">
              Pracownia stolarska i projektowa.<br/>
              Tworzymy z pasją.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-primary mb-6">Studio</h4>
            <ul className="space-y-3 text-sm text-on-surface-variant font-light">
              <li><a href="#" className="hover:text-primary transition-colors">O nas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Proces</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kariera</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-primary mb-6">Informacje</h4>
            <ul className="space-y-3 text-sm text-on-surface-variant font-light">
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Polityka prywatności</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Regulamin</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-primary mb-6">Social</h4>
            <ul className="space-y-3 text-sm text-on-surface-variant font-light">
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-outline/20 text-xs text-on-surface-variant font-light">
          <p>© {new Date().getFullYear()} LØUPE. Wszelkie prawa zastrzeżone.</p>
          <p className="mt-2 md:mt-0">Design inspirowany elegancją i minimalizmem.</p>
        </div>
      </footer>
    </div>
  );
}
