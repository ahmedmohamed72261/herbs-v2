"use client";

import { HeroSection } from "@/src/widgets/hero";
import { ProductsSection } from "@/src/widgets/sections/products-section";
import { FeaturesSection } from "@/src/widgets/sections/features-section";
import { StatsSection } from "@/src/widgets/sections/stats-section";
import { CategoriesSection } from "@/src/widgets/sections/categories-section";
import { CertificatesSection } from "@/src/widgets/sections/certificates-section";
import { TeamSection } from "@/src/widgets/sections/team-section";
import { CTASection } from "@/src/widgets/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <ProductsSection />
      <CategoriesSection />
      <CertificatesSection />
      <TeamSection />
      <CTASection />
    </>
  );
}
