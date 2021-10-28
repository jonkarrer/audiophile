import { useState } from "react";

const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex items-center space-x-5">
      <span className="w-32 bg-F1F1F1 h-full flex items-center justify-evenly">
        <span
          onClick={() => setQuantity(quantity - 1)}
          className="flex-1 grid place-content-center h-full cursor-pointer opacity-50"
        >
          -
        </span>
        <span className="">{quantity}</span>
        <span
          onClick={() => setQuantity(quantity + 1)}
          className="flex-1 grid place-content-center h-full cursor-pointer opacity-50"
        >
          +
        </span>
      </span>
      <span className="btn gold">Add to Cart</span>
    </div>
  );
};

export default AddToCart;
