import { IItem } from "@/utils/interfaces";
import { useEffect, useState } from "react";
import { useCartContext } from "./CartProvider";
import Name from "./Name";

const Item = ({ image, name, price, quantity, id }: IItem) => {
  const [amount, setAmount] = useState(quantity);
  const cart = useCartContext();

  useEffect(() => {
    const getItem = cart?.currentCart.filter((item) => item.id === id);
    const [item] = getItem as any;
    item.quantity = amount;

    const newBasket: any = cart?.currentCart.filter((item) => item.id != id);

    if (amount === 0) {
      //If the user reduces item to 0 then kick out
      cart?.updateCart([...newBasket]);
    } else {
      cart?.updateCart([...newBasket, item]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount]);

  return (
    <div className="flex items-center justify-between">
      <img
        className="w-16 rounded-lg"
        src={`/${image.split("/").slice(2).join("/")}`}
        alt="product image"
      />
      <div className="flex-1 ml-4">
        <Name name={name} />
        <h5 className="opacity-50 text-sm">{`$${price}`}</h5>
      </div>
      <span className="w-24 h-8 bg-F1F1F1 flex items-center justify-evenly">
        <span
          onClick={() => setAmount(amount - 1)}
          className="flex-1 grid place-content-center h-full cursor-pointer opacity-50"
        >
          -
        </span>
        <span>{amount}</span>
        <span
          onClick={(e) => {
            setAmount(amount + 1);
          }}
          className="flex-1 grid place-content-center h-full cursor-pointer opacity-50"
        >
          +
        </span>
      </span>
    </div>
  );
};

export default Item;
