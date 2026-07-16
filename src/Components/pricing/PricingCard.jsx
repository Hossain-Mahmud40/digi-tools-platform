import { Check } from "lucide-react";

const PricingCard = ({ plan }) => {
  const cardClass = plan.isPopular
    ? "relative bg-gradient-to-br from-[#4f39f6] to-[#b20cff] text-white shadow-xl"
    : "bg-white text-[#101727] shadow-sm";
  const mutedText = plan.isPopular ? "text-white/80" : "text-[#627382]";
  const buttonClass = plan.isPopular
    ? "bg-white text-[#6d28d9] hover:bg-white/90"
    : "bg-gradient-to-r from-[#4f39f6] to-[#b20cff] text-white hover:opacity-90";

  return (
    <div className={`rounded-lg border border-gray-100 p-7 ${cardClass}`}>
      {plan.isPopular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#ffdd4a] px-5 py-1 text-xs font-bold text-[#6b4b00]">
          Most Popular
        </span>
      )}

      <h3 className="text-xl font-extrabold">{plan.name}</h3>
      <p className={`mt-2 text-sm ${mutedText}`}>{plan.description}</p>

      <div className="mt-7 flex items-end gap-1">
        <span className="text-4xl font-extrabold">{plan.price}</span>
        <span className={`pb-1 text-sm ${mutedText}`}>{plan.billing}</span>
      </div>

      <ul className="mt-7 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className={`flex items-center gap-2 text-sm ${mutedText}`}>
            <Check className="h-4 w-4 flex-none text-[#22c55e]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`btn mt-8 w-full rounded-full border-0 shadow-none ${buttonClass}`}>
        {plan.buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
