'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { HeroSection } from '@/components/home/HeroSection';
import { SocialProofSection } from '@/components/home/SocialProofSection';
import { ProblemSection } from '@/components/home/ProblemSection';
import { SolutionSection } from '@/components/home/SolutionSection';
import { DetailedSolutionsSection } from '@/components/home/DetailedSolutionsSection';
import { HowToSection } from '@/components/home/HowToSection';
import { ProofSection } from '@/components/home/ProofSection';
import { ScienceSection } from '@/components/home/ScienceSection';
import { WhyUsSection } from '@/components/home/WhyUsSection';
import { homepageFAQs } from '@/data/faqData';

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
