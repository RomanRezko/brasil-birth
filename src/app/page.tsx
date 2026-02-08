import {
  Header,
  Hero,
  Problems,
  Features,
  Roadmap,
  Pricing,
  Trust,
  Location,
  Team,
  FAQ,
  LeadMagnet,
  CTA,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Features />
        <Roadmap />
        <Pricing />
        <Trust />
        <Location />
        <Team />
        <FAQ />
        <LeadMagnet />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
