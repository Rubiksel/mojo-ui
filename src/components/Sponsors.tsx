interface OrgProps {
  src: string;
  alt: string;
}

const orgs: OrgProps[] = [
  { src: "/logos/abc.svg", alt: "Associated Builders and Contractors" },
  { src: "/logos/das-keyboard.png", alt: "Das Keyboard" },
  { src: "/logos/dcs.png", alt: "Georgia State Department of Community Supervision" },
  { src: "/logos/harvard.png", alt: "Harvard" },
  { src: "/logos/LACMA.png", alt: "Los Angeles County Museum of Art" },
  { src: "/logos/michigan.png", alt: "Michigan State University" },
  { src: "/logos/rocketRoute.svg", alt: "RocketRoute" },
  { src: "/logos/scotts.png", alt: "Scotts" },
  { src: "/logos/sofistadium.png", alt: "SoFi Stadium" },
  { src: "/logos/spurs.png", alt: "San Antonio Spurs" },
  { src: "/logos/texashospital.png", alt: "Texas Children's Hospital" },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-24  overflow-hidden">
      <h2 className="text-center text-md lg:text-xl font-bold mb-12 text-primary">
        Trusted by Leading Organizations
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee gap-12">
          {orgs.concat(orgs).map(({ src, alt }, idx) => (
            <div key={idx} className="flex items-center justify-center min-w-[140px]">
              <img
                src={src}
                alt={alt}
                className="max-w-[120px] h-auto object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
