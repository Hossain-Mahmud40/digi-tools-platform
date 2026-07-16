const CartItem = ({ item, itemIndex, onRemoveFromCart }) => {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-[#f8fafc] px-5 py-5">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
          <img
            src={item.image}
            alt={item.name}
            className="h-7 w-7 object-contain"
          />
        </div>
        <div>
          <h3 className="font-bold text-[#101727]">{item.name}</h3>
          <p className="mt-1 text-sm font-medium text-[#627382]">
            {item.price}
          </p>
        </div>
      </div>

      <button
        className="text-sm font-bold text-pink-500 hover:text-pink-600"
        onClick={() => onRemoveFromCart(itemIndex)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
