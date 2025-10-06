'use client';

import { ContactForm } from '@/components/ContactForm';
import { EmailReveal } from '@/components/EmailReveal';
import { Header } from '@/components/Header';
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateBreadcrumbListSchema,
  renderJSONLD
} from '@/lib/schemas';

export default function ContactPage() {
  const organizationSchema = generateOrganizationSchema();
  const localBusinessSchema = generateLocalBusinessSchema();

  const breadcrumbSchema = generateBreadcrumbListSchema([
    { name: "Home", url: "https://palmbeachesai.com" },
    { name: "Contact", url: "https://palmbeachesai.com/contact" }
  ]);

  return (
    <div className="min-h-screen bg-white">
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
          __html: renderJSONLD(breadcrumbSchema)
        }}
      />
      <Header hideContactNav={true} hideCtaButton={true} currentPage="contact" />

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business with AI? Get in touch and let&apos;s discuss how we can help you achieve guaranteed ROI.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Let&apos;s Start a Conversation
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We understand that every business is unique. That&apos;s why we take the time to understand your specific challenges and goals before recommending any AI solutions.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-primary mb-2">What to Expect</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Free consultation to assess your AI readiness</li>
                    <li>• Custom roadmap tailored to your business goals</li>
                    <li>• Clear ROI projections and timeline</li>
                    <li>• No obligation - just expert guidance</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-primary mb-2">Contact Information</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div>
                      <p className="font-medium">Address:</p>
                      <p>340 Royal Poinciana Way</p>
                      <p>Suite #328 - 403</p>
                      <p>Palm Beach, FL 33480</p>
                    </div>
                    <div>
                      <p className="font-medium">Phone:</p>
                      <p>561-220-7004</p>
                    </div>
                    <div>
                      <p className="font-medium">Email:</p>
                      <p><EmailReveal user="info" domain="palmbeachesai.com" /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex justify-center lg:justify-end">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}