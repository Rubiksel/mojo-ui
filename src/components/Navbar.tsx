import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import * as NavigationMenuRadix from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button, buttonVariants } from "./ui/button";
import {
  Boxes,
  Building2,
  CheckCircle,
  CircleDollarSign,
  FileSearch,
  GraduationCap,
  HeartPulse,
  HelpCircle,
  Library,
  ListChecks,
  Menu,
  MonitorCog,
  NotebookText,
  Package,
  Rocket,
  School,
  ShoppingCart,
  Users,
} from "lucide-react";
import { ModeToggle } from "./mode-toggle";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "#solutions",
    label: "Solutions",
  },
  {
    href: "#resources",
    label: "Resources",
  },
  {
    href: "#pricing",
    label: "Pricing",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <img
                src="/mojo.png"
                alt="Mojo Helpdesk Logo"
                className="h-auto w-[230px] mr-2 object-contain flex-shrink-0"
              />
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex lg:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex lg:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"} className="w-[320px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Mojo Helpdesk
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-6 mt-6">
                  {/* Features (simple link) */}
                  <a
                    href="#features"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-violet-600"
                  >
                    Features
                  </a>

                  {/* General */}
                  <div>
                    <h3 className="text-sm font-semibold mb-2 text-gray-700">
                      General
                    </h3>
                    <div className="grid grid-cols-1 gap-3 pl-2">
                      <a
                        href="#features"
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <Boxes className="text-indigo-600 w-4 h-4" />
                        Features
                      </a>
                      <a
                        href="#pricing"
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CircleDollarSign className="text-indigo-600 w-4 h-4" />
                        Pricing
                      </a>
                    </div>
                  </div>
                  {/* Solutions (expanded) */}
                  <div>
                    <h3 className="text-sm font-semibold mb-2 text-gray-700">
                      Solutions
                    </h3>
                    <div className="grid grid-cols-1 gap-3 pl-2">
                      <a
                        href="/it-helpdesk"
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <MonitorCog className="text-indigo-600 w-4 h-4" />
                        IT Service Desk
                      </a>
                      <a
                        href="/solutions/customer"
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <Users className="text-indigo-600 w-4 h-4" />
                        Customer Service
                      </a>
                      <a
                        href="/solutions/asset"
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <Package className="text-indigo-600 w-4 h-4" />
                        Asset Management
                      </a>
                      <a
                        href="/solutions/growing"
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <Rocket className="text-indigo-600 w-4 h-4" />
                        Growing Businesses
                      </a>
                      <a
                        href="/solutions/ecommerce"
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <ShoppingCart className="text-indigo-600 w-4 h-4" />
                        E-commerce
                      </a>
                      <a
                        href="/solutions/education"
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <GraduationCap className="text-indigo-600 w-4 h-4" />
                        Education
                      </a>
                      <a
                        href="/solutions/healthcare"
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <HeartPulse className="text-indigo-600 w-4 h-4" />
                        Healthcare
                      </a>
                    </div>
                  </div>

                  {/* Resources (expanded) */}
                  <div>
                    <h3 className="text-sm font-semibold mb-2 text-gray-700">
                      Resources
                    </h3>
                    <div className="grid grid-cols-1 gap-3 pl-2">
                      <a
                        href="/resources/case-studies/austin"
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <School className="text-indigo-600 w-4 h-4" />
                        Austin Community College
                      </a>
                      <a
                        href="/resources/case-studies/hebron"
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <Library className="text-indigo-600 w-4 h-4" />
                        Hebron Public School
                      </a>
                      <a
                        href="/resources/case-studies/raksha"
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <Building2 className="text-indigo-600 w-4 h-4" />
                        Raksha Technologies
                      </a>
                      <a
                        href="/resources/case-studies/marion"
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <NotebookText className="text-indigo-600 w-4 h-4" />
                        Marion Central School
                      </a>
                      <a
                        href="/resources/guides/evaluate"
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <FileSearch className="text-indigo-600 w-4 h-4" />
                        Evaluate IT Helpdesk
                      </a>
                      <a
                        href="/resources/guides/features"
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <ListChecks className="text-indigo-600 w-4 h-4" />
                        10 Features
                      </a>
                      <a
                        href="/resources/guides/best-practices"
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="text-indigo-600 w-4 h-4" />
                        Best Practices
                      </a>
                      <a
                        href="/resources/guides/faqs"
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <HelpCircle className="text-indigo-600 w-4 h-4" />
                        FAQs
                      </a>
                    </div>
                  </div>

                  {/* Pricing (simple link) */}
                  <a
                    href="#pricing"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-violet-600"
                  >
                    Pricing
                  </a>

                  {/* Github CTA */}
                  <a
                    rel="noreferrer noopener"
                    href="https://github.com/leoMirandaa/shadcn-landing-page.git"
                    target="_blank"
                    className={`w-full border flex items-center justify-center gap-2 ${buttonVariants(
                      {
                        variant: "secondary",
                      }
                    )}`}
                  >
                    <GitHubLogoIcon className="w-5 h-5" />
                    Github Repo
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <div className="hidden lg:flex">
            <NavigationMenuRadix.Root>
              <NavigationMenuRadix.List className="flex items-center gap-6">
                {/* Features (simple link) */}
                <NavigationMenuRadix.Item>
                  <NavigationMenuRadix.Link asChild>
                    <a
                      href="#features"
                      className="text-sm font-medium text-gray-700 hover:text-violet-600"
                    >
                      Features
                    </a>
                  </NavigationMenuRadix.Link>
                </NavigationMenuRadix.Item>

                {/* Solutions dropdown */}
                <NavigationMenuRadix.Item>
                  <NavigationMenuRadix.Trigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-violet-600">
                    Solutions <CaretDownIcon className="h-4 w-4" />
                  </NavigationMenuRadix.Trigger>
                  <NavigationMenuRadix.Content
                    className="absolute mt-2 bg-white shadow-xl rounded-xl p-6 min-w-[520px]
             animate-in fade-in slide-in-from-top-2 z-50"
                  >
                    {" "}
                    <div className="grid grid-cols-2 gap-8">
                      <DropdownSection
                        title="By Department"
                        links={[
                          {
                            href: "/it-helpdesk",
                            label: "IT Service Desk",
                            icon: <MonitorCog />,
                          },
                          {
                            href: "/solutions/customer",
                            label: "Customer Service",
                            icon: <Users />,
                          },
                          {
                            href: "/solutions/asset",
                            label: "Asset Management",
                            icon: <Package />,
                          },
                        ]}
                      />
                      <DropdownSection
                        title="By Industry"
                        links={[
                          {
                            href: "/solutions/growing",
                            label: "Growing Businesses",
                            icon: <Rocket />,
                          },
                          {
                            href: "/solutions/ecommerce",
                            label: "E-commerce",
                            icon: <ShoppingCart />,
                          },
                          {
                            href: "/solutions/education",
                            label: "Education",
                            icon: <GraduationCap />,
                          },
                          {
                            href: "/solutions/healthcare",
                            label: "Healthcare",
                            icon: <HeartPulse />,
                          },
                        ]}
                      />
                    </div>
                  </NavigationMenuRadix.Content>
                </NavigationMenuRadix.Item>

                {/* Resources dropdown */}
                <NavigationMenuRadix.Item>
                  <NavigationMenuRadix.Trigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-violet-600">
                    Resources <CaretDownIcon className="h-4 w-4" />
                  </NavigationMenuRadix.Trigger>
                  <NavigationMenuRadix.Content
                    className="absolute mt-2 bg-white shadow-xl rounded-xl p-6 min-w-[520px]
             animate-in fade-in slide-in-from-top-2 z-50"
                  >
                    {" "}
                    <div className="grid grid-cols-2 gap-8">
                      <DropdownSection
                        title="Case Studies"
                        links={[
                          {
                            href: "/resources/case-studies/austin",
                            label: "Austin Community College",
                            icon: <School />,
                          },
                          {
                            href: "/resources/case-studies/hebron",
                            label: "Hebron Public School",
                            icon: <Library />,
                          },
                          {
                            href: "/resources/case-studies/raksha",
                            label: "Raksha Technologies",
                            icon: <Building2 />,
                          },
                          {
                            href: "/resources/case-studies/marion",
                            label: "Marion Central School",
                            icon: <NotebookText />,
                          },
                        ]}
                      />
                      <DropdownSection
                        title="Free Guides"
                        links={[
                          {
                            href: "/resources/guides/evaluate",
                            label: "Evaluate IT Helpdesk",
                            icon: <FileSearch />,
                          },
                          {
                            href: "/resources/guides/features",
                            label: "10 Features",
                            icon: <ListChecks />,
                          },
                          {
                            href: "/resources/guides/best-practices",
                            label: "Best Practices",
                            icon: <CheckCircle />,
                          },
                          {
                            href: "/resources/guides/faqs",
                            label: "FAQs",
                            icon: <HelpCircle />,
                          },
                        ]}
                      />
                    </div>
                  </NavigationMenuRadix.Content>
                </NavigationMenuRadix.Item>

                {/* Pricing (simple link) */}
                <NavigationMenuRadix.Item>
                  <NavigationMenuRadix.Link asChild>
                    <a
                      href="#pricing"
                      className="text-sm font-medium text-gray-700 hover:text-violet-600"
                    >
                      Pricing
                    </a>
                  </NavigationMenuRadix.Link>
                </NavigationMenuRadix.Item>
              </NavigationMenuRadix.List>
              {/* Indicator */}

              {/* Viewport */}
              <NavigationMenuRadix.Viewport
                className="absolute top-full rounded-lg bg-white shadow-xl
    data-[state=closed]:animate-out data-[state=closed]:fade-out-0
    data-[state=open]:animate-in data-[state=open]:fade-in-0
    hidden data-[state=open]:block min-w-[400px] z-50"
              />
            </NavigationMenuRadix.Root>
          </div>

          <div className="hidden lg:flex gap-4 items-center">
            <a href="/sign-in" rel="noreferrer noopener">
              <Button variant="outline" className="w-40">
                Sign in
              </Button>
            </a>
            <a
              href="https://signup.mojohelpdesk.com/mc/get-started/register/1020"
              rel="noreferrer noopener"
            >
              <Button className="w-40">Try for free</Button>
            </a>
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

function DropdownSection({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string; icon: React.ReactNode }[];
}) {
  return (
    <div>
      <h3
        className="text-sm font-semibolduppercase mb-2"
        style={{ color: "var(--gray-12)" }}
      >
        {title}
      </h3>
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.href}>
            <NavigationMenuRadix.Link asChild>
              <a
                href={link.href}
                className="flex items-center gap-2 rounded-md py-2 px-2 text-sm transition"
                style={{ color: "var(--gray-11)" }}
              >
                <span className="flex items-center justify-center w-4 h-4 text-indigo-600">
                  {link.icon}
                </span>
                <span className="leading-none">{link.label}</span>
              </a>
            </NavigationMenuRadix.Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
