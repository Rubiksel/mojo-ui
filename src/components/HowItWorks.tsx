import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FolderIcon, BookOpenIcon, TagsIcon } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <FolderIcon />,
    title: "Centralize requests",
    description:
      "Still using spreadsheets and emails for requests? Migrate to Mojo Helpdesk to put them all in a powerful but simple ticket tracking.",
  },
  {
    icon: <BookOpenIcon />,
    title: "Knowledge base",
    description:
      "Cut down incoming requests with the self-service knowledge base.",
  },
  {
    icon: <TagsIcon />,
    title: "Assign, prioritize, tag",
    description:
      "Mojo keeps things organized. Tickets can be assigned and tagged. Mojo automation can do all this automatically.",
  },

];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Mojo Helpdesk streamlines request management with simple tools that
        centralize requests, reduce workload, and keep teams organized.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
