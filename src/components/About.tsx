import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32 space-y-16">
      {/* First block (Designed with Purpose) */}
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src="/call-center.jpg"
            alt="Call Center"
            className="h-[300px] object-cover rounded-lg"
          />
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Designed With{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Purpose
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Mojo Helpdesk is an easy to use cloud ticket tracking that helps
                companies provide superior employee & customer service at a
                lower cost. Over 10 years ago, Metadot, the Mojo's parent
                company, needed a help desk that would give our customers
                personal, dynamic, and natural experiences. We couldn’t find one
                that met our needs, so we built it. We've now made this
                available for organizations like yours, and today thousands of
                educational organizations, from small to large, use Mojo
                Helpdesk to manage their IT, maintenance requests from staff,
                faculty, and more.
              </p>
            </div>
            <Statistics />
          </div>
        </div>
      </div>

      {/* Second block (Centralize, Assign, etc.) */}
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left content */}
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Centralize, Assign,{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Automate
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Centralize, assign, auto-assign, tag, and reuse answers. Simple
                to start, powerful at scale.
              </p>

              <ul className="list-disc ml-5 mt-4 text-muted-foreground space-y-2">
                <li>
                  <strong>Plug & Play Customer Support:</strong> The simplest,
                  quickest implementation (live in days, not months).
                </li>
                <li>
                  <strong>Get just what you need:</strong> Don’t pay for or
                  wrestle with complexity, long-term contracts, or aggressive
                  upsell.
                </li>
                <li>
                  <strong>Connect with us:</strong> Customers love our Austin,
                  TX-based support team and even help drive our roadmap.
                </li>
              </ul>

              <p className="mt-4 font-semibold">
                Over 2.5 million happy users.
              </p>
              <a
                href="https://signup.mojohelpdesk.com/mc/get-started/register/1020"
                className="text-primary font-medium underline mt-2 inline-block"
              >
                Try for free →
              </a>
            </div>
            <Statistics />
          </div>

          {/* Right image */}
          <img
            src="/happy-user.jpg"
            alt="Customer success"
            className="h-[300px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};