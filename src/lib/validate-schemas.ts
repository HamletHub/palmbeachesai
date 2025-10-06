import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateAIAutomationServiceSchema,
  generateCustomerExperienceServiceSchema,
  generateDataAnalyticsServiceSchema,
  generateArticleSchema,
  generateFAQPageSchema,
  generateBreadcrumbListSchema,
  renderJSONLD
} from './schemas';

export function getAllSchemas() {
  const schemas = {
    organization: generateOrganizationSchema(),
    localBusiness: generateLocalBusinessSchema(),
    aiAutomationService: generateAIAutomationServiceSchema(),
    customerExperienceService: generateCustomerExperienceServiceSchema(),
    dataAnalyticsService: generateDataAnalyticsServiceSchema(),
    sampleArticle: generateArticleSchema(
      "Sample AI Article",
      "This is a sample article description for testing purposes",
      "Palm Beaches AI Team",
      "2024-12-05",
      "2024-12-05",
      "sample-article",
      ["AI", "Test", "Schema"]
    ),
    homepageFAQ: generateFAQPageSchema([
      {
        question: "What is Palm Beaches AI's ROI guarantee?",
        answer: "We guarantee measurable ROI within 90 days of implementation. If you don't see results, we'll refund your investment and fix the issues at no charge."
      }
    ]),
    breadcrumbs: generateBreadcrumbListSchema([
      { name: "Home", url: "https://palmbeachesai.com" },
      { name: "About", url: "https://palmbeachesai.com/about" }
    ])
  };

  return schemas;
}

export function validateSchemaStructure() {
  const schemas = getAllSchemas();
  const results: Record<string, boolean> = {};

  for (const [name, schema] of Object.entries(schemas)) {
    try {
      // Basic validation - check if schema has required fields
      const hasContext = '@context' in schema && schema['@context'] === 'https://schema.org';
      const hasType = '@type' in schema && typeof schema['@type'] === 'string';
      const canSerialize = typeof renderJSONLD(schema) === 'string';

      results[name] = hasContext && hasType && canSerialize;
    } catch (error) {
      console.error(`Schema validation failed for ${name}:`, error);
      results[name] = false;
    }
  }

  return results;
}

export function logSchemasForValidation() {
  const schemas = getAllSchemas();

  console.log('=== SCHEMA VALIDATION LOG ===');
  console.log('Use the JSON-LD below to test in Google Rich Results Test:');
  console.log('https://search.google.com/test/rich-results');
  console.log('');

  for (const [name, schema] of Object.entries(schemas)) {
    console.log(`--- ${name.toUpperCase()} SCHEMA ---`);
    console.log(renderJSONLD(schema));
    console.log('');
  }

  console.log('=== VALIDATION RESULTS ===');
  const validationResults = validateSchemaStructure();
  for (const [name, isValid] of Object.entries(validationResults)) {
    console.log(`${name}: ${isValid ? '✅ VALID' : '❌ INVALID'}`);
  }
}