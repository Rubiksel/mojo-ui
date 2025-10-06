import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";

interface FAQProps {
  question: string;
  answer?: string;
  value: string;
  bullets?: string[];
  button?: {
    label: string;
    href: string;
  };
}

const FAQList: FAQProps[] = [
  {
    question: "IT Support",
    value: "item-1",
    bullets: [
      "Centralize IT & maintenance requests to improve triage and organization",
      "Automate repetitive tasks to decrease workload and free up staff",
      "Cut down on new requests with built-in knowledge base",
    ],
    button: {
      label: "Learn more",
      href: "/it-helpdesk",
    },
  },
  {
    question: "Customer Service",
    value: "item-2",
    bullets: [
      "Boost customer satisfaction with self-service knowledge base",
      "Resolve issues faster with automation",
      "Measure customer satisfaction to improve where it's needed",
    ],
    button: {
      label: "Learn more",
      href: "/customer-service-help-desk",
    },
  },
  {
    question: "Facility & Maintenance Management",
    value: "item-3",
    bullets: [
      "Create maintenance tickets & auto-assign them",
      "Manage assets, maintenance contracts & create tickets related to them",
      "Display news alert in the public knowledge base",
    ],
  },
  {
    question: "Product Management",
    value: "item-4",
    bullets: [
      "Log all product issues in Mojo.",
      "Measure time spent by ticket categories",
      "Slice and dice ticket reports with tag filters",
      "Assign automatically based on user roles",
    ],
  },
  {
    question: "Operations Management",
    value: "item-5",
    bullets: [
      "Assign work duties with Mojo Helpdesk",
      "Watch work progress and send automated reminders",
      "Catch run-away tickets before it's too late",
    ],
  },
  {
    question: "Human Resources",
    value: "item-6",
    bullets: [
      "On-boarding sequences",
      "Vacation requests",
      "Leave requests",
      "Training requests",
      "Etc...",
    ],
  },
  {
    question: "Software Management",
    value: "item-7",
    bullets: [
      "Track feature requests and tag them",
      "Manage bugs and filter by outcome",
      "Incident reporting",
    ],
  },
  {
    question: "Anything else? Yes!",
    value: "item-8",
    answer:
      "Mojo Helpdesk can track anything. From contracts, to defects, credit applications, registration requests, bugs, improvement requests. Virtually anything.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Mojo Helpdesk Is Used In{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          All Departments{" "}
        </span>
        Of An Organization
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(
          ({ question, answer, value, bullets, button }: FAQProps) => (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>

              <AccordionContent className="space-y-4 text-muted-foreground">
                <p>{answer}</p>

                {bullets && (
                  <ul className="list-disc ml-6 space-y-2">
                    {bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}

                {button && (
                  <Button asChild variant="outline" className="mt-4">
                    <a href={button.href}>{button.label}</a>
                  </Button>
                )}
              </AccordionContent>
            </AccordionItem>
          )
        )}
      </Accordion>
    </section>
  );
};
