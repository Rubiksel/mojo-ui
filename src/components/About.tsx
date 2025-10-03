import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src="/call-center.jpg"
            alt="Call Center"
            className="h-[300px] object-cover rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
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
                company needed a help desk that would give our customers
                personal, dynamic, and natural experiences. We couldn’t find one
                that met our needs, so we built it. We've now made this
                available for organization like yours, and today thousands of
                educational organizations, from small to large, use Mojo
                Helpdesk to manage their IT, maintenance requests from staff,
                faculty and more.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
