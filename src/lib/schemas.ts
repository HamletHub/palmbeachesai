interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  description: string;
  email: string;
  telephone: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  foundingDate?: string;
  sameAs?: string[];
}

interface LocalBusinessSchema {
  "@context": "https://schema.org";
  "@type": "LocalBusiness";
  name: string;
  url: string;
  logo: string;
  description: string;
  email: string;
  telephone: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    "@type": "GeoCoordinates";
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  priceRange?: string;
  paymentAccepted?: string[];
  areaServed: {
    "@type": "Place";
    name: string;
  };
  serviceArea: {
    "@type": "GeoCircle";
    geoMidpoint: {
      "@type": "GeoCoordinates";
      latitude: number;
      longitude: number;
    };
    geoRadius: string;
  };
}

interface ServiceSchema {
  "@context": "https://schema.org";
  "@type": "Service";
  name: string;
  description: string;
  provider: {
    "@type": "Organization";
    name: string;
    url: string;
  };
  areaServed: {
    "@type": "Place";
    name: string;
  };
  serviceType: string;
  category?: string;
  url?: string;
}

interface ArticleSchema {
  "@context": "https://schema.org";
  "@type": "Article";
  headline: string;
  description: string;
  author: {
    "@type": "Organization" | "Person";
    name: string;
    url?: string;
  };
  publisher: {
    "@type": "Organization";
    name: string;
    logo: {
      "@type": "ImageObject";
      url: string;
    };
  };
  datePublished: string;
  dateModified: string;
  image?: {
    "@type": "ImageObject";
    url: string;
    width?: number;
    height?: number;
  };
  mainEntityOfPage: {
    "@type": "WebPage";
    "@id": string;
  };
  articleSection?: string;
  keywords?: string[];
}

interface FAQPageSchema {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
}

interface BreadcrumbListSchema {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}

export function generateOrganizationSchema(): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Palm Beaches AI",
    url: "https://palmbeachesai.com",
    logo: "https://palmbeachesai.com/images/pbailogo.svg",
    description: "AI solutions that guarantee measurable business value and ROI for Palm Beach County businesses. We help mid-market companies evaluate, implement, and optimize AI solutions with proven results.",
    email: "info@palmbeachesai.com",
    telephone: "561-220-7004",
    address: {
      "@type": "PostalAddress",
      streetAddress: "340 Royal Poinciana Way Suite #328, PO Box 403",
      addressLocality: "Palm Beach",
      addressRegion: "FL",
      postalCode: "33480",
      addressCountry: "US"
    },
    foundingDate: "2024",
    sameAs: [
      "https://linkedin.com/company/palmbeachesai",
      "https://twitter.com/palmbeachesai"
    ]
  };
}

export function generateLocalBusinessSchema(): LocalBusinessSchema {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Palm Beaches AI",
    url: "https://palmbeachesai.com",
    logo: "https://palmbeachesai.com/images/pbailogo.svg",
    description: "AI solutions that guarantee measurable business value and ROI for Palm Beach County businesses. Specializing in automation, customer experience optimization, and data analytics for mid-market companies.",
    email: "info@palmbeachesai.com",
    telephone: "561-220-7004",
    address: {
      "@type": "PostalAddress",
      streetAddress: "340 Royal Poinciana Way Suite #328, PO Box 403",
      addressLocality: "Palm Beach",
      addressRegion: "FL",
      postalCode: "33480",
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.7056,
      longitude: -80.0364
    },
    openingHours: [
      "Mo-Fr 09:00-17:00"
    ],
    priceRange: "$$$",
    paymentAccepted: [
      "Cash",
      "Credit Card",
      "Check",
      "Wire Transfer"
    ],
    areaServed: {
      "@type": "Place",
      name: "Palm Beach County, Florida"
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 26.7056,
        longitude: -80.0364
      },
      geoRadius: "50mi"
    }
  };
}

export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
  serviceType: string,
  category?: string,
  serviceUrl?: string
): ServiceSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "Organization",
      name: "Palm Beaches AI",
      url: "https://palmbeachesai.com"
    },
    areaServed: {
      "@type": "Place",
      name: "Palm Beach County, Florida"
    },
    serviceType,
    category,
    url: serviceUrl
  };
}

export function generateArticleSchema(
  title: string,
  description: string,
  author: string,
  datePublished: string,
  dateModified: string,
  slug: string,
  keywords?: string[],
  imageUrl?: string
): ArticleSchema {
  const baseUrl = "https://palmbeachesai.com";

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: {
      "@type": "Organization",
      name: author,
      url: baseUrl
    },
    publisher: {
      "@type": "Organization",
      name: "Palm Beaches AI",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/pbailogo.svg`
      }
    },
    datePublished,
    dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${slug}`
    },
    articleSection: "AI Solutions & Technology",
    keywords,
    ...(imageUrl && {
      image: {
        "@type": "ImageObject",
        url: imageUrl,
        width: 1200,
        height: 630
      }
    })
  };
}

export function generateFAQPageSchema(faqs: Array<{ question: string; answer: string }>): FAQPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function generateBreadcrumbListSchema(breadcrumbs: Array<{ name: string; url: string }>): BreadcrumbListSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };
}

export function generateAIAutomationServiceSchema(): ServiceSchema {
  return generateServiceSchema(
    "AI Automation Solutions",
    "Intelligent automation that reduces operational costs by 30-50% and frees up 30-40 minutes daily per employee for strategic work. Our solutions eliminate human error in data processing and routine workflows.",
    "Automation",
    "Business Process Automation",
    "https://palmbeachesai.com/#solution"
  );
}

export function generateCustomerExperienceServiceSchema(): ServiceSchema {
  return generateServiceSchema(
    "AI Customer Experience Optimization",
    "Handle 40% more customers without hiring staff through intelligent chatbots and 24/7 automated scheduling. Resolve 45% of customer inquiries instantly with 25% boost in customer satisfaction.",
    "Customer Service",
    "Customer Experience Management",
    "https://palmbeachesai.com/#solution"
  );
}

export function generateDataAnalyticsServiceSchema(): ServiceSchema {
  return generateServiceSchema(
    "AI Data Analytics & Insights",
    "Turn your data into profit-generating insights with 15% inventory cost reduction through demand forecasting and real-time pricing optimization that identifies new revenue streams.",
    "Data Analytics",
    "Business Intelligence",
    "https://palmbeachesai.com/#solution"
  );
}

export function renderJSONLD(schema: OrganizationSchema | LocalBusinessSchema | ServiceSchema | ArticleSchema | FAQPageSchema | BreadcrumbListSchema): string {
  return JSON.stringify(schema, null, 0);
}