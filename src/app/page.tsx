'use client';

import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { HeroSection } from '@/components/home/HeroSection';
import { SocialProofSection } from '@/components/home/SocialProofSection';
import { homepageFAQs } from '@/data/faqData';

// Lazy load below-the-fold sections
const ProblemSection = dynamic(() => import('@/components/home/ProblemSection').then(mod => ({ default: mod.ProblemSection })), {
  loading: () => <div className="py-20 min-h-[400px]" />
});

const SolutionSection = dynamic(() => import('@/components/home/SolutionSection').then(mod => ({ default: mod.SolutionSection })), {
  loading: () => <div className="py-20 bg-section-lg min-h-[400px]" />
});

const DetailedSolutionsSection = dynamic(() => import('@/components/home/DetailedSolutionsSection').then(mod => ({ default: mod.DetailedSolutionsSection })), {
  loading: () => <div className="py-20 min-h-[500px]" />
});

const HowToSection = dynamic(() => import('@/components/home/HowToSection').then(mod => ({ default: mod.HowToSection })), {
  loading: () => <div className="py-20 bg-section-lg min-h-[400px]" />
});

const ProofSection = dynamic(() => import('@/components/home/ProofSection').then(mod => ({ default: mod.ProofSection })), {
  loading: () => <div className="py-20 min-h-[600px]" />
});

const ScienceSection = dynamic(() => import('@/components/home/ScienceSection').then(mod => ({ default: mod.ScienceSection })), {
  loading: () => <div className="py-20 bg-section-lg min-h-[400px]" />
});

const WhyUsSection = dynamic(() => import('@/components/home/WhyUsSection').then(mod => ({ default: mod.WhyUsSection })), {
  loading: () => <div className="py-20 min-h-[600px]" />
});

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup faqItems={homepageFAQs} />
      <Header />
      <HeroSection />
      <SocialProofSection />
      <ProblemSection />
      <SolutionSection />
      <DetailedSolutionsSection />
      <HowToSection />
      <ProofSection />
      <ScienceSection />
      <WhyUsSection />
      <Footer />
    </div>
  );
}
