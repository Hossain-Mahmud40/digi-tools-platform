import { Check } from "lucide-react";

const Product = ({ onAddToCart, product }) => {
  const badgeStyles = {
    "Best Seller": "bg-[#fff3d6] text-[#d58a00]",
    Popular: "bg-[#ebe8ff] text-[#6d4cff]",
    New: "bg-[#dcfce7] text-[#16a34a]",
  };
  const badgeClass = badgeStyles[product.badge] || "bg-gray-100 text-gray-600";
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_18px_45px_rgba(16,23,39,0.08)]">
          <div className="flex items-start justify-between gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5f3ff]">
              <img
                src={product.image}
                alt={product.name}
                className="h-7 w-7 object-contain"
              />
            </div>

            <span
              className={`rounded-full px-4 py-1.5 text-xs font-semibold ${badgeClass}`}
            >
              {product.badge}
            </span>
          </div>

          <h3 className="mt-8 text-2xl font-bold text-[#101727]">
            {product.name}
          </h3>

          <p className="mt-4 min-h-[52px] text-sm leading-6 text-[#627382]">
            {product.description}
          </p>

          <div className="mt-5 flex items-end gap-1">
            <span className="text-2xl font-extrabold text-[#101727]">
              {product.price}
            </span>
          </div>

          <ul className="mt-5 space-y-2">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-[#627382]"
              >
                <Check className="h-4 w-4 text-green-500" />

                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button
            className="btn mt-6 w-full rounded-full border-0 bg-gradient-to-r from-[#4f39f6] to-[#b20cff] text-white shadow-none hover:opacity-90"
            onClick={() => onAddToCart(product)}
          >
            Buy Now
          </button>
        </div>
  );
};

export default Product;
