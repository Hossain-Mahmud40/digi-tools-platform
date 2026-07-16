const getNumericPrice = (price) => {
  const amount = price.match(/\d+/);
  return amount ? Number(amount[0]) : 0;
};

const CartSummary = ({ cartItems, onCheckout }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + getNumericPrice(item.price),
    0,
  );

  return (
    <div className="mt-7">
      <div className="flex items-center justify-between text-sm text-[#627382]">
        <span>Total:</span>
        <span className="text-2xl font-extrabold text-[#101727]">
          ${totalPrice}
        </span>
      </div>

      <button
        className="btn mt-6 w-full rounded-full border-0 bg-gradient-to-r from-[#4f39f6] to-[#b20cff] text-white shadow-none hover:opacity-90"
        disabled={cartItems.length === 0}
        onClick={onCheckout}
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default CartSummary;
