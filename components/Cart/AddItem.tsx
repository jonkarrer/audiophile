import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useCartContext } from "./CartProvider";
import { IAddToCart } from "@/utils/interfaces";

const AddItem = ({ productName, id, price, image }: IAddToCart) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const cart = useCartContext();

  useEffect(() => {
    //Reset quantity if route changes
    setQuantity(1);
  }, [router]);

  const checkCart = cart?.currentCart.filter((item) => item.id === id);
  const handleClick = () => {
    if (checkCart?.length != 0) {
      return alert("Item is already in the Cart ");
    } else {
      cart?.updateCart([
        ...cart.currentCart,
        {
          id: id,
          name: productName,
          quantity: quantity,
          price: price,
          image: image,
        },
      ]);
    }
  };

  return (
    <div className="flex items-center space-x-5">
      <span className="w-32 bg-F1F1F1 h-full flex items-center justify-evenly">
        <span
          onClick={(e) => {
            e.stopPropagation();
            //Prevents 0
            if (quantity === 1) return;

            setQuantity(quantity - 1);
          }}
          className="flex-1 grid place-content-center h-full cursor-pointer opacity-50"
        >
          -
        </span>
        <span className="">{quantity}</span>
        <span
          onClick={(e) => {
            e.stopPropagation();
            setQuantity(quantity + 1);
          }}
          className="flex-1 grid place-content-center h-full cursor-pointer opacity-50"
        >
          +
        </span>
      </span>
      <span
        onClick={() => handleClick()}
        className={`btn text-white ${
          checkCart?.length != 0 ? "bg-FBAF85 cursor-not-allowed" : "bg-D87D4A"
        }`}
      >
        {checkCart?.length != 0 ? "In Cart" : "Add to Cart"}
      </span>
    </div>
  );
};

export default AddItem;
