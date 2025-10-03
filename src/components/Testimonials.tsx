import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Mike H.",
    userName: "Director, Campus Technology Services",
    comment:
      '"Mojo Helpdesk has allowed us to get far more people outside of IT involved. Many tickets cross-organizational boundaries as they are multi-step so Mojo Helpdesk has helped solve that problem."',
  },
  {
    name: "Nick Elder",
    userName: "CIO, Southern Institute of Technology, New Zealand",
    comment:
      '"A lot of organisations our size use enterprise products that are far more expensive, and we have tried a few, but now our staff have used Mojo, they don’t want to go back to anything else. You have created an absolute gem."',
  },
  {
    name: "Todd A.",
    userName: "General Manager of Technology, Sona Dermatology & MedSpa",
    comment:
      '"We needed to reduce complexity and find a solution that was sized and priced right for our business. Mojo checked all the boxes."',
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold pb-8">
        What Our Customer Are Saying
      </h2>

      {/* <p className="text-xl text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error
        facere hic reiciendis illo
      </p> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(({ name, userName, comment }: TestimonialProps) => (
          <Card
            key={userName}
            className="max-w-md md:break-inside-avoid overflow-hidden"
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(var(--primary))] text-white">
                <Quote className="w-6 h-6" />
              </div>

              <div className="flex flex-col">
                <CardTitle className="text-lg">{name}</CardTitle>
                <CardDescription>{userName}</CardDescription>
              </div>
            </CardHeader>

            <CardContent>{comment}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
