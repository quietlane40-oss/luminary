import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageView } from './types';
import { eventImages } from './assets';

const SITE_URL = 'https://www.luminaryguild.co.ke';

interface ServiceMetadata {
  name: string;
}

interface PageMetadata {
  title: string;
  description: string;
  service?: ServiceMetadata;
}

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

const PAGE_METADATA: Record<PageView, PageMetadata> = {
  home: {
    title: 'Luminary Guild | Event Planning & Management in Kenya',
    description: 'Luminary Guild is a Kenyan event planning and management company creating corporate conferences, brand activations, galas and memorable event experiences.',
  },
  'corporate-conferences': {
    title: 'Corporate Conference Planning & Management in Kenya | Luminary Guild',
    description: 'Professional corporate conference planning and event management in Kenya, from event strategy and production to coordination and guest experience.',
    service: { name: 'Corporate Conference Planning' },
  },
  'brand-activations': {
    title: 'Brand Activation & Experiential Events in Kenya | Luminary Guild',
    description: 'Luminary Guild creates strategic brand activations and experiential events in Kenya designed to connect brands with audiences through memorable experiences.',
    service: { name: 'Brand Activation and Experiential Events' },
  },
  'galas-celebrations': {
    title: 'Gala & Celebration Event Planning in Kenya | Luminary Guild',
    description: 'From elegant galas to private celebrations, Luminary Guild plans and delivers memorable events with creative concepts, production and seamless coordination.',
    service: { name: 'Gala and Celebration Event Planning' },
  },
  portfolio: {
    title: 'Event Portfolio | Luminary Guild Kenya',
    description: 'Explore selected events and experiences delivered by Luminary Guild across corporate events, brand activations, galas and celebrations in Kenya.',
  },
  about: {
    title: 'About Luminary Guild | Event Management Company in Kenya',
    description: 'Learn about Luminary Guild, a Kenyan event planning and management company focused on creating meaningful, well-executed and memorable event experiences.',
  },
  pricing: {
    title: 'Event Investment & Partnerships | Luminary Guild Kenya',
    description: 'Learn about opportunities to work with Luminary Guild through event partnerships, investment and strategic collaborations in Kenya.',
  },
  rfp: {
    title: 'Contact Luminary Guild | Plan Your Event in Kenya',
    description: 'Get in touch with Luminary Guild to discuss corporate conferences, brand activations, galas, celebrations and other event requirements in Kenya.',
  },
};

export function pageFromPath(pathname: string): PageView {
  const match = (Object.keys(PAGE_PATHS) as PageView[]).find((page) => PAGE_PATHS[page] === pathname);
  return match ?? 'home';
}

export function Seo({ page }: { page: PageView }) {
  const metadata = PAGE_METADATA[page];
  const canonicalUrl = `${SITE_URL}${PAGE_PATHS[page]}`;
  // TODO: Replace this event photo with a dedicated 1200x630 branded social sharing image.
  const imagePath = new URL(eventImages.wedding, SITE_URL).pathname;
  const imageUrl = new URL(imagePath, `${SITE_URL}/`).href;
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Luminary Guild',
    url: `${SITE_URL}/`,
    areaServed: {
      '@type': 'Country',
      name: 'Kenya',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'nyamwalo402@gmail.com',
        telephone: '+254792604341',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: '+254111464092',
      },
    ],
  };
  const serviceSchema = metadata.service
    ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: metadata.service.name,
        provider: {
          '@type': 'Organization',
          name: 'Luminary Guild',
          url: `${SITE_URL}/`,
        },
        areaServed: {
          '@type': 'Country',
          name: 'Kenya',
        },
      }
    : undefined;
  const structuredData = page === 'home' ? organizationSchema : serviceSchema;

  return (
    <Helmet>
      <html lang="en" />
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:site_name" content="Luminary Guild" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={imageUrl} />
      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  );
}