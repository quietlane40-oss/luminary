import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageView } from './types';
import { eventImages } from './assets';

export const PAGE_PATHS: Record<PageView, string> = {
  home: '/',
  'corporate-conferences': '/services/corporate-conferences',
  'brand-activations': '/services/brand-activations',
  'galas-celebrations': '/services/galas-celebrations',
  portfolio: '/portfolio',
  about: '/about',
  pricing: '/investment',
  rfp: '/inquiry',
};

const PAGE_METADATA: Record<PageView, { title: string; description: string }> = {
  home: {
    title: 'Luminary Guild | Event Planning & Decoration in Kenya',
    description: 'Luminary Guild creates beautifully planned weddings, celebrations, corporate events, and brand activations with thoughtful decoration across Kenya.',
  },
  'corporate-conferences': {
    title: 'Wedding & Bridal Celebrations | Luminary Guild Kenya',
    description: 'Plan a beautiful wedding or bridal celebration in Kenya with Luminary Guild\'s creative styling, bespoke decor, and careful event-day coordination.',
  },
  'brand-activations': {
    title: 'Brand Activations & Launches | Luminary Guild Kenya',
    description: 'Create memorable brand activations and product launches in Kenya with immersive spatial styling, custom decor, and coordinated event flow.',
  },
  'galas-celebrations': {
    title: 'Birthday & Baby Shower Decoration | Luminary Guild Kenya',
    description: 'Celebrate life\'s milestones with Luminary Guild\'s bespoke balloon art, themed decor, dining displays, and seamless birthday and baby shower coordination.',
  },
  portfolio: {
    title: 'Event Portfolio & Case Studies | Luminary Guild Kenya',
    description: 'Explore Luminary Guild event case studies covering weddings, private celebrations, brand activations, and professionally managed experiences.',
  },
  about: {
    title: 'About Luminary Guild | Kenyan Event Planning & Decoration',
    description: 'Meet the Luminary Guild team and learn how thoughtful design, local craftsmanship, and careful planning shape memorable events across Kenya.',
  },
  pricing: {
    title: 'Event Planning Packages & Pricing | Luminary Guild Kenya',
    description: 'Review Luminary Guild event decoration and planning packages, then use the investment calculator to outline your event requirements in Kenya shillings.',
  },
  rfp: {
    title: 'Plan Your Event | Request a Proposal | Luminary Guild Kenya',
    description: 'Tell Luminary Guild about your wedding, celebration, corporate event, or brand activation and request tailored planning and decoration options.',
  },
};

export function pageFromPath(pathname: string): PageView {
  const match = (Object.keys(PAGE_PATHS) as PageView[]).find((page) => PAGE_PATHS[page] === pathname);
  return match ?? 'home';
}

function getSiteUrl(): string {
  const configuredUrl = import.meta.env.VITE_SITE_URL?.trim();
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  return (configuredUrl || origin).replace(/\/$/, '');
}

export function Seo({ page }: { page: PageView }) {
  const metadata = PAGE_METADATA[page];
  const siteUrl = getSiteUrl();
  const canonicalUrl = `${siteUrl}${PAGE_PATHS[page]}`;
  const imageUrl = new URL(eventImages.wedding, siteUrl).href;
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'EventPlanner',
    name: 'Luminary Guild',
    url: siteUrl,
    description: 'Kenyan event planning and decoration company creating beautiful, memorable celebrations and professionally styled events.',
    areaServed: 'Kenya',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    email: 'nyamwalo402@gmail.com',
    telephone: ['+254792604341', '+254111464092'],
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Luminary Guild" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={imageUrl} />
      <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
    </Helmet>
  );
}