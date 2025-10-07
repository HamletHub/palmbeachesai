'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { trackFormSubmit, trackBusinessGoal } from './GoogleTagManager';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Track form submission attempt
    trackFormSubmit('contact_form', {
      form_location: 'contact_page',
      lead_source: 'website'
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });

        // Track successful form submission as business goal
        trackBusinessGoal('lead_generated', 1);

        // Track conversion event
        trackFormSubmit('contact_form_success', {
          form_location: 'contact_page',
          lead_value: 2500, // estimated value based on your ROI assessment
          conversion_type: 'contact'
        });
      } else {
        setSubmitStatus('error');

        // Track form submission error
        trackFormSubmit('contact_form_error', {
          form_location: 'contact_page',
          error_type: 'server_error'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');

      // Track form submission error
      trackFormSubmit('contact_form_error', {
        form_location: 'contact_page',
        error_type: 'network_error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-lg">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-primary mb-4">Get In Touch</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              rows={4}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
          {submitStatus === 'success' && (
            <p className="text-green-600 text-sm text-center">Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-600 text-sm text-center">Failed to send message. Please try again.</p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}