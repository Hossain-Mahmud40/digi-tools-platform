import { use } from "react";
import PricingCard from "./PricingCard";

const Pricing = ({ pricingPromise }) => {
  const pricingResponse = use(pricingPromise);
  const pricingPlans = pricingResponse.data;

  return (
    <section className="bg-white px-6 py-24 lg:px-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#101727] md:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-sm leading-6 text-[#627382]">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
