import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { Switch } from "@/components/ui/switch"; // shadcn/ui switch
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  benefitList: string[];
}

const basePricingList: PricingProps[] = [
  {
    title: "Team",
    popular: PopularPlanType.NO,
    price: 14,
    description:
      "Unlimited tickets, but limited storage, queues, and automation. 25 agents max.",
    benefitList: [
      "Full ticket tracking",
      "Email integration",
      "Self service knowledge base",
      "Canned responses",
      "Custom forms",
      "Customer ticket history",
      "Satisfaction survey",
      "Automations",
      "Basic business hours",
      "Basic SLA monitoring",
      "Knowledge base suggester",
      "Time tracking",
      "Ticket views",
      "Recurring Tickets Scheduler",
      "Your own mail server",
      "Google integration",
      "Single Sign On: Google, Microsoft, SAML, Classlink, etc.",
      "Branding",
    ],
  },
  {
    title: "Business",
    popular: PopularPlanType.YES,
    price: 24,
    description:
      "Plenty of storage, queues, forms, triggers, and automation. 100 agents max.",
    benefitList: [
      "All Team plan features",
      "Agent permissions",
      "Escalation rules",
      "Ticket merging",
      "Round robin assignment",
      "Advanced business hours",
      "Advanced SLA monitoring",
      "Private knowledge base",
      "Advanced security",
      "Your domain",
      "KPI",
      "Paper invoice",
      "Phone support",
      "White-glove service",
    ],
  },
  {
    title: "Enterprise",
    popular: PopularPlanType.NO,
    price: 34,
    description:
      "Ideal for mission-critical ticket tracking and helpdesk. Unlimited agents.",
    benefitList: [
      "All Business plan features",
      "Advanced reporting",
      "Dedicated account manager",
      "Priority support",
      "Automated exports",
      "Increased quotas",
      "Sandbox",
      "HIPAA compliance",
    ],
  },
];

export const Pricing = () => {
  const [yearly, setYearly] = useState(false);
  const [nonProfit, setNonProfit] = useState(false);

  // Apply 20% discount for yearly pricing
  const getPrice = (price: number, title: string) => {
    let finalPrice = price;

    if (yearly) {
      // Apply yearly discounts only
      if (nonProfit && (title === "Business" || title === "Enterprise")) {
        // 25% discount for yearly school/non-profit
        finalPrice = price * 0.75;
      } else {
        // 10% discount for regular yearly billing
        finalPrice = price * 0.9;
      }
    }

    return Number(finalPrice.toFixed(1)); // keep 1 decimal
  };

  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Transparent pricing. No hidden fees.
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Join thousands of businesses who are winning every day with Mojo
        Helpdesk.
      </h3>

      {/* Toggle & checkbox */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
        <div className="flex items-center gap-2">
          <Label htmlFor="billing">Monthly</Label>
          <Switch id="billing" checked={yearly} onCheckedChange={setYearly} />
          <Label htmlFor="billing">Yearly - save(*) 10%</Label>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox
            id="nonProfit"
            checked={nonProfit}
            onCheckedChange={(checked) => setNonProfit(checked === true)}
          />
          <Label htmlFor="nonProfit">I am a school or non-profit(**)</Label>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
        {basePricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES && (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Most popular
                  </Badge>
                )}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">
                  ${getPrice(pricing.price, pricing.title)}
                </span>
                <span className="text-muted-foreground"> /month per agent</span>
              </div>
              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500 shrink-0 mr-2" />
                    <h3>{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto">
        (*) One year subscription: a 10% discount is available for all
        businesses.
        <br />
        (**) A total of 25% discount is available to educational and non-profit
        organizations for the Business and Enterprise plan yearly subscription
        only. Discounts are not cumulative.
      </p>
    </section>
  );
};
