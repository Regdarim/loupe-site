/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from 'react';
import { ArrowRight, Menu } from 'lucide-react';
import { useSiteContent } from './hooks/useSiteContent';
import { resolveSanityImageUrl } from './lib/sanity';
import type { SiteContent } from './types/siteContent';

const FALLBACK_CONTENT: SiteContent = {
  heroHeadline: 'LØUPE',
  heroSubtext: 'Rare Wood. Refined.',
  introHeading: 'Tworzymy przestrzenie na wymiar, łącząc rzemiosło z ponadczasową estetyką.',
  introText:
    'Nasze projekty to dialog pomiędzy formą a funkcją. Projektujemy i wykonujemy meble oraz zabudowy, które stają się integralną częścią Twojego życia.',
  realizacjeItems: [
    {
      title: 'Kuchnie',
      description: 'Zabudowy kuchenne',
      category: 'Projekt i wykonanie',
    },
    {
      title: 'Garderoby',
      description: 'Garderoby i przechowywanie',
      category: 'Przechowywanie',
    },
    {
      title: 'Meble',
      description: 'Meble wolnostojące',
      category: 'Detale i wykończenie',
    },
  ],
  approachSection1Title: 'Lokalne rzemiosło i model współpracy.',
  approachSection1Text:
    'Wierzymy w krótkie łańcuchy dostaw i bezpośredni kontakt. Każdy projekt to wspólna podróż – od pierwszej koncepcji, przez dobór szlachetnych materiałów, aż po precyzyjny montaż w Twoim domu.',
  approachSection2Title: 'Bliskość dla najwyższej jakości wsparcia.',
  approachSection2Text:
    'Jesteśmy blisko naszych klientów. Zrozumienie Twoich potrzeb pozwala nam tworzyć przestrzenie, które są nie tylko piękne, ale przede wszystkim funkcjonalne i dopasowane do Twojego stylu życia.',
  ctaText: 'Napisz do nas',
  menuItems: [
    { label: 'Studio', href: '#studio' },
    { label: 'Realizacje', href: '#realizacje' },
    { label: 'Podejście', href: '#podejscie' },
    { label: 'Kontakt', href: '#kontakt' },
  ],
  images: {
    hero: '/image1.jpeg',
    grid1: '/image2.jpeg',
    grid2: '/image3.jpeg',
    grid3: '/image4.jpeg',
    split1: '/image5.jpeg',
    split2: '/image6.jpeg',
  },
};

function mergeWithFallback(content: Partial<SiteContent> | null): SiteContent {
  return {
    ...FALLBACK_CONTENT,
    ...content,
    menuItems:
      content?.menuItems && content.menuItems.length > 0
        ? content.menuItems
        : FALLBACK_CONTENT.menuItems,
    realizacjeItems:
      content?.realizacjeItems && content.realizacjeItems.length > 0
        ? content.realizacjeItems
        : FALLBACK_CONTENT.realizacjeItems,
    images: {
      ...FALLBACK_CONTENT.images,
      ...(content?.images ?? {}),
    },
  };
}

export default function App() {
  const { siteContent } = useSiteContent();

  const content = useMemo(() => mergeWithFallback(siteContent), [siteContent]);

  const images = useMemo(
    () => ({
      hero: resolveSanityImageUrl(content.images.hero, FALLBACK_CONTENT.images.hero as string),
      grid1: resolveSanityImageUrl(content.images.grid1, FALLBACK_CONTENT.images.grid1 as string),
      grid2: resolveSanityImageUrl(content.images.grid2, FALLBACK_CONTENT.images.grid2 as string),
      grid3: resolveSanityImageUrl(content.images.grid3, FALLBACK_CONTENT.images.grid3 as string),
      split1: resolveSanityImageUrl(content.images.split1, FALLBACK_CONTENT.images.split1 as string),
      split2: resolveSanityImageUrl(content.images.split2, FALLBACK_CONTENT.images.split2 as string),
    }),
    [content.images],
  );

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
            {content.menuItems.map((item) => (
              <a
                key={`${item.label}-${item.href}`}
                href={item.href}
                className="text-xs tracking-[0.15em] uppercase text-on-surface-variant hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <button className="md:hidden text-primary" aria-label="Otwórz menu">
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
              {content.heroHeadline}
            </h1>
            <p className="text-xs md:text-sm tracking-[0.35em] uppercase font-body font-light">{content.heroSubtext}</p>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 text-[10px] md:text-xs tracking-[0.3em] uppercase font-body font-light">
            Scroll to explore
          </div>
        </section>

        {/* Intro Text */}
        <section id="studio" className="py-16 md:py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-3xl md:text-5xl lg:text-6xl leading-tight md:leading-tight text-primary mb-8">
              {content.introHeading}
            </h1>
            <p className="font-body text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-light">
              {content.introText}
            </p>
          </div>
        </section>

        {/* Grid Section */}
        <section id="realizacje" className="py-16 md:py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16">
            <h2 className="font-headline text-3xl md:text-4xl text-primary">Nasze realizacje</h2>
            <a
              href="#"
              className="group flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-on-surface-variant hover:text-primary transition-colors mt-4 md:mt-0"
            >
              Zobacz pełne portfolio
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {content.realizacjeItems.slice(0, 3).map((item, index) => {
              const imageKey = `grid${index + 1}` as 'grid1' | 'grid2' | 'grid3';
              return (
                <div key={`${item.title}-${index}`} className="group cursor-pointer">
                  <div className="aspect-[3/4] overflow-hidden mb-6 bg-[#E5E2DD]">
                    <img
                      src={images[imageKey]}
                      alt={item.description || item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="font-headline text-2xl text-primary mb-2">{item.title}</h3>
                  <p className="text-xs tracking-[0.1em] uppercase text-on-surface-variant">{item.category}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Split Section 1 */}
        <section id="podejscie" className="py-16 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 max-w-lg mx-auto lg:mx-0">
              <h2 className="font-headline text-3xl md:text-5xl text-primary mb-6 md:mb-8 leading-tight">
                {content.approachSection1Title}
              </h2>
              <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed font-light mb-8">
                {content.approachSection1Text}
              </p>
              <a
                href="#"
                className="inline-block border-b border-primary pb-1 text-sm tracking-[0.1em] uppercase text-primary hover:text-on-surface-variant hover:border-on-surface-variant transition-colors"
              >
                Poznaj nasz proces
              </a>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/5] lg:aspect-square overflow-hidden bg-[#E5E2DD]">
                <img src={images.split1} alt="Proces tworzenia" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
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
                {content.approachSection2Title}
              </h2>
              <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed font-light mb-8">
                {content.approachSection2Text}
              </p>
              <a
                href="#kontakt"
                className="inline-block border-b border-primary pb-1 text-sm tracking-[0.1em] uppercase text-primary hover:text-on-surface-variant hover:border-on-surface-variant transition-colors"
              >
                Skontaktuj się z nami
              </a>
            </div>
          </div>
        </section>

        {/* CTA / Footer Banner */}
        <section id="kontakt" className="py-24 md:py-40 px-6 text-center bg-surface border-t border-outline/20">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-6xl text-primary mb-8">
              Zarezerwuj wyjątkowy czas na zaprojektowanie swojego wnętrza.
            </h2>
            <p className="font-body text-sm md:text-base text-on-surface-variant mb-12 font-light">
              Chcesz, abyśmy się z Tobą skontaktowali? Zostaw nam wiadomość, a wrócimy do Ciebie z propozycją spotkania.
            </p>
            <button className="bg-primary text-surface px-8 py-4 text-xs tracking-[0.15em] uppercase hover:bg-primary/80 transition-colors">
              {content.ctaText}
            </button>
          </div>
        </section>
      </main>

      <a
        href="/studio/"
        className="fixed bottom-4 right-4 z-[60] bg-background/85 backdrop-blur-sm border border-outline/40 text-primary text-[10px] tracking-[0.1em] uppercase px-3 py-2 rounded-full hover:bg-background transition-colors"
      >
        Edytuj stronę
      </a>

      {/* Footer */}
      <footer className="bg-background border-t border-outline/30 pt-16 pb-8 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="font-headline text-2xl text-primary mb-6">LØUPE</h3>
            <p className="text-sm text-on-surface-variant font-light">
              Pracownia stolarska i projektowa.
              <br />
              Tworzymy z pasją.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-primary mb-6">Studio</h4>
            <ul className="space-y-3 text-sm text-on-surface-variant font-light">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  O nas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Proces
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Kariera
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-primary mb-6">Informacje</h4>
            <ul className="space-y-3 text-sm text-on-surface-variant font-light">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Polityka prywatności
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Regulamin
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-primary mb-6">Social</h4>
            <ul className="space-y-3 text-sm text-on-surface-variant font-light">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Pinterest
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Facebook
                </a>
              </li>
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
