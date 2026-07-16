const ProductTabs = ({ activeTab, cartCount, onTabChange }) => {
  const activeClass =
    "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white shadow-sm";
  const inactiveClass = "bg-white text-[#101727] hover:bg-[#f5f3ff]";

  return (
    <div className="mt-6 inline-flex rounded-full border border-gray-100 bg-white p-1 shadow-sm">
      <button
        className={`rounded-full px-7 py-3 text-sm font-bold ${
          activeTab === "products" ? activeClass : inactiveClass
        }`}
        onClick={() => onTabChange("products")}
      >
        Products
      </button>
      <button
        className={`rounded-full px-7 py-3 text-sm font-bold ${
          activeTab === "cart" ? activeClass : inactiveClass
        }`}
        onClick={() => onTabChange("cart")}
      >
        Cart ({cartCount})
      </button>
    </div>
  );
};

export default ProductTabs;
