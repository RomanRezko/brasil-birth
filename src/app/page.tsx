import {
  Header,
  Hero,
  Features,
  Roadmap,
  Pricing,
  Trust,
  FAQ,
  CTA,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Roadmap />
        <Pricing />
        <Trust />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
