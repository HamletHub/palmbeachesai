import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateAIAutomationServiceSchema,
  generateCustomerExperienceServiceSchema,
  generateDataAnalyticsServiceSchema,
  generateFAQPageSchema,
  generateBreadcrumbListSchema,
  renderJSONLD
} from '@/lib/schemas';

interface FAQItem {
  question: string;
  answer: string;
}

interface SchemaMarkupProps {
  faqItems: FAQItem[];
}

export function SchemaMarkup({ faqItems }: SchemaMarkupProps) {
  const organizationSchema = generateOrganizationSchema();
  const localBusinessSchema = generateLocalBusinessSchema();
  const aiAutomationService = generateAIAutomationServiceSchema();
  const customerExperienceService = generateCustomerExperienceServiceSchema();
  const dataAnalyticsService = generateDataAnalyticsServiceSchema();

  const breadcrumbSchema = generateBreadcrumbListSchema([
    { name: "Home", url: "https://palmbeachesai.com" }
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderJSONLD(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderJSONLD(localBusinessSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderJSONLD(aiAutomationService)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderJSONLD(customerExperienceService)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderJSONLD(dataAnalyticsService)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderJSONLD(faqSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderJSONLD(breadcrumbSchema)
        }}
      />
    </>
  );
}
