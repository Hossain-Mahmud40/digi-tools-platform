const stats = [
  {
    value: "50K+",
    label: "Active Users",
  },
  {
    value: "200+",
    label: "Premium Tools",
  },
  {
    value: "4.9",
    label: "Rating",
  },
];

import ProductTabs from "./ProductTabs";

const ProductsIntro = ({ activeTab, cartCount, onTabChange }) => {
  return (
    <section className="bg-white">
      <div className="bg-gradient-to-r from-[#4f39f6] to-[#b20cff] px-6 py-12 text-white lg:px-28">
        <div className="mx-auto grid max-w-[1200px] gap-8 text-center md:grid-cols-3 md:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`py-2 ${
                index !== stats.length - 1
                  ? "md:border-r md:border-white/30"
                  : ""
              }`}
            >
              <h2 className="text-4xl font-extrabold leading-none md:text-5xl">
                {stat.value}
              </h2>
              <p className="mt-4 text-base font-medium text-white/85">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 py-20 text-center lg:px-28">
        <div className="mx-auto max-w-[760px]">
          <h2 className="text-3xl font-extrabold text-[#101727] md:text-4xl">
            Premium Digital Tools
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-sm leading-6 text-[#627382]">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>

          <ProductTabs
            activeTab={activeTab}
            cartCount={cartCount}
            onTabChange={onTabChange}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsIntro;
