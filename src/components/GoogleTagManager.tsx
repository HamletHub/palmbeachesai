'use client';

import Script from 'next/script';
import { useEffect } from 'react';

interface GoogleTagManagerProps {
  gtmId: string;
}

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
  }
}

export function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
  useEffect(() => {
    // Initialize dataLayer if it doesn't exist
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
    }
  }, []);

  return (
    <>
      {/* Google Tag Manager Script */}
      <Script
        id="gtm-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />
    </>
  );
}

export function GoogleTagManagerNoScript({ gtmId }: GoogleTagManagerProps) {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}

// Enhanced tracking functions for better conversion tracking
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...parameters,
    });
  }
};

export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page_location: url,
      page_title: title,
    });
  }
};

export const trackFormSubmit = (formName: string, formData?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'form_submit',
      form_name: formName,
      ...formData,
    });
  }
};

export const trackContactInteraction = (interactionType: string, details?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'contact_interaction',
      interaction_type: interactionType,
      ...details,
    });
  }
};

export const trackBusinessGoal = (goalName: string, value?: number, currency?: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'business_goal',
      goal_name: goalName,
      value: value,
      currency: currency || 'USD',
    });
  }
};