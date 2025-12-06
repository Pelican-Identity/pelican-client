import { Background } from "@/components/background";
import { ComplianceReadiness } from "@/components/blocks/compliance-readiness";
import { CoreIdentityLayer } from "@/components/blocks/core-identity-layer";
import { EnterpriseSecurity } from "@/components/blocks/enterprise-security";
import { Features } from "@/components/blocks/features";
import { Footer } from "@/components/blocks/footer";
import { ForBusinesses } from "@/components/blocks/for-businesses";
import { ForDevelopers } from "@/components/blocks/for-developers";
import { Hero } from "@/components/blocks/hero";
import { HowItWorks } from "@/components/blocks/how-it-works";
import { KycVerificationCTA } from "@/components/blocks/kyc-verification-cta";
import { Navbar } from "@/components/blocks/navbar";
import { PortableIdentity } from "@/components/blocks/portable-identity";
import { Pricing } from "@/components/blocks/pricing";
import { PrivacySecurity } from "@/components/blocks/privacy-security";
import { WhyPelican } from "@/components/blocks/why-pelican";

export default function DeveloperPage() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}
