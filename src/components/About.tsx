import { Statistics } from "./Statistics";
import clsx from "clsx";

interface AboutProps {
  title: string;
  highlight: string;
  description: string;
  bullets?: { strong: string; text: string }[];
  note?: string;
  ctaText?: string;
  ctaHref?: string;
  image: string;
  imageAlt: string;
  reverse?: boolean; // when true, image goes on the left (like your second section)
  showStatistics?: boolean;
}

export const About = ({
  title,
  highlight,
  description,
  bullets,
  note,
  ctaText,
  ctaHref,
  image,
  imageAlt,
  reverse = false,
  showStatistics = true,
}: AboutProps) => {
  return (
    <section id="about" className="container py-24 sm:py-32 space-y-16">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div
          className={clsx(
            "px-6 flex flex-col gap-8 md:gap-12",
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          )}
        >
          {/* Left content */}
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                {title}{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  {highlight}
                </span>
              </h2>

              <p className="text-xl text-muted-foreground mt-4">
                {description}
              </p>

              {bullets && (
                <ul className="list-disc ml-5 mt-4 text-muted-foreground space-y-2">
                  {bullets.map((b, i) => (
                    <li key={i}>
                      <strong>{b.strong}:</strong> {b.text}
                    </li>
                  ))}
                </ul>
              )}

              {note && <p className="mt-4 font-semibold">{note}</p>}

              {ctaHref && ctaText && (
                <a
                  href={ctaHref}
                  className="text-primary font-medium underline mt-2 inline-block"
                >
                  {ctaText} →
                </a>
              )}
            </div>

            {showStatistics && <Statistics />}
          </div>

          {/* Right (or left) image */}
          <img
            src={image}
            alt={imageAlt}
            className="h-[300px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};
