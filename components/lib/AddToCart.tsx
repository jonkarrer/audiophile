import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useCartContext } from "../Cart/CartProvider";
import { IProduct } from "@/utils/interfaces";

const AddToCart = ({
  productName,
  id,
  price,
  image,
}: {
  productName: string;
  id: number;
  price: number;
  image: string;
}) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const cart = useCartContext();

  useEffect(() => {
    //Reset quantity if route changes
    setQuantity(1);
  }, [router]);

  const handleClick = () => {
    const checkCart = cart?.currentCart.filter((item) => item.id === id);

    if (checkCart?.length != 0) {
      const [item] = checkCart as any;
      item.quantity = quantity;
      console.log(item);
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
      <span onClick={() => handleClick()} className="btn gold">
        Add to Cart
      </span>
    </div>
  );
};

export default AddToCart;
