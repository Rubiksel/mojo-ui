import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { Testimonials } from "./components/Testimonials";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <HowItWorks />
      <About
        title="Centralize, Assign,"
        highlight="Automate"
        description="Centralize, assign, auto-assign, tag, and reuse answers. Simple to start, powerful at scale."
        bullets={[
          {
            strong: "Plug & Play Customer Support",
            text: "The simplest, quickest implementation (live in days, not months).",
          },
          {
            strong: "Get just what you need",
            text: "Don’t pay for or wrestle with complexity, long-term contracts, or aggressive upsell.",
          },
          {
            strong: "Connect with us",
            text: "Customers love our Austin, TX-based support team and even help drive our roadmap.",
          },
        ]}
        note="Over 2.5 million happy users."
        ctaText="Try for free"
        ctaHref="https://signup.mojohelpdesk.com/mc/get-started/register/1020"
        image="/happy-user.jpg"
        imageAlt="Customer success"
      />
      <FAQ />
      <About
        title="Designed With"
        highlight="Purpose"
        description="Mojo Helpdesk is an easy to use cloud ticket tracking that helps companies provide superior employee & customer service at a lower cost. Over 10 years ago, Metadot, the Mojo's parent company, needed a help desk that would give our customers personal, dynamic, and natural experiences. We couldn’t find one that met our needs, so we built it. We've now made this available for organizations like yours, and today thousands of educational organizations, from small to large, use Mojo Helpdesk to manage their IT, maintenance requests from staff, faculty, and more."
        image="/call-center.jpg"
        imageAlt="Call Center"
        reverse
      />
      <Services />
      <Cta />
      <Testimonials />
      <Pricing />
      <Newsletter />

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
