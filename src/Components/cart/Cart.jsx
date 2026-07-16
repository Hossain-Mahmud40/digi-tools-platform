import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const Cart = ({ cartItems, onCheckout, onRemoveFromCart }) => {
  return (
    <section className="bg-white px-6 pb-24 lg:px-28">
      <div className="mx-auto max-w-[980px] rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#101727]">Your Cart</h2>

        {cartItems.length > 0 ? (
          <div className="mt-7 space-y-4">
            {cartItems.map((item, index) => (
              <CartItem
                item={item}
                itemIndex={index}
                key={`${item.id}-${index}`}
                onRemoveFromCart={onRemoveFromCart}
              />
            ))}
          </div>
        ) : (
          <div className="mt-7 rounded-2xl bg-[#f8fafc] px-6 py-10 text-center text-sm font-medium text-[#627382]">
            Your cart is empty.
          </div>
        )}

        <CartSummary cartItems={cartItems} onCheckout={onCheckout} />
      </div>
    </section>
  );
};

export default Cart;
