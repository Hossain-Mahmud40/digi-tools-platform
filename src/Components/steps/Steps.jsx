import { PackageCheck, Rocket, UserRound } from "lucide-react";
import StepCard from "./StepCard";

const steps = [
  {
    number: "01",
    title: "Create Account",
    description: "Sign up for free in seconds. No credit card required to get started.",
    icon: UserRound,
  },
  {
    number: "02",
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
    icon: PackageCheck,
  },
  {
    number: "03",
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
    icon: Rocket,
  },
];

const Steps = () => {
  return (
    <section className="bg-[#f8fafc] px-6 py-24 lg:px-28">
      <div className="mx-auto max-w-[1200px] text-center">
        <h2 className="text-3xl font-extrabold text-[#101727] md:text-4xl">
          Get Started In 3 Steps
        </h2>
        <p className="mx-auto mt-4 max-w-[520px] text-sm leading-6 text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
