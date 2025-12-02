import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { WhyPelican } from "@/components/blocks/why-pelican";
import { Pricing } from "@/components/blocks/pricing";
import { CoreIdentityLayer } from "@/components/blocks/core-identity-layer";
import { Testimonials } from "@/components/blocks/testimonials";
import { CTA } from "@/components/blocks/cta";
import { PortableIdentity } from "@/components/blocks/portable-identity";
import { KycVerificationCTA } from "@/components/blocks/kyc-verification-cta";
import { HowItWorks } from "@/components/blocks/how-it-works";
import { EnterpriseSecurity } from "@/components/blocks/enterprise-security";
import { ComplianceReadiness } from "@/components/blocks/compliance-readiness";
import { ForDevelopers } from "@/components/blocks/for-developers";
import { ForBusinesses } from "@/components/blocks/for-businesses";
import { PrivacySecurity } from "@/components/blocks/privacy-security";

export default function Home() {
  return (
    <>
      <Background className="via-muted to-muted/80">
        <Hero />
        <WhyPelican />
        <CoreIdentityLayer />
        <Features />
      </Background>
      {/* <CTA /> */}
      <PortableIdentity />
      <KycVerificationCTA />
      <HowItWorks />
      <EnterpriseSecurity />
      <ComplianceReadiness />
      <Pricing />
      <ForDevelopers />
      <ForBusinesses />
      <PrivacySecurity />
    </>
  );
}
