import { useState } from "react";
import { useCartContext } from "./CartProvider";

const Dropdown = () => {
  const cart = useCartContext();
  return (
    <div className="fixed left-0 top-0 bg-black bg-opacity-50  w-screen z-40">
      <div className="wrapper bg-white mt-28 p-6 grid gap-6">
        <div className="flex justify-between items-center">
          <h4>Cart ({`${cart?.currentCart.length}`})</h4>
          <span className="underline opacity-50">Remove all</span>
        </div>
        <div className="grid gap-6">
          {cart?.currentCart.map((item) => (
            <div key={item.id}>
              <Item
                image={item.image}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <h4 className="opacity-50">Total</h4>
          <h4>
            {`$ ${cart?.currentCart.reduce(
              (prev, curr) => (prev.price + curr.price) as any
            )}`}
          </h4>
        </div>
        <button className="btn gold w-full">Checkout</button>
      </div>
    </div>
  );
};

export default Dropdown;

interface IItem {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const Item = ({ image, name, price, quantity }: IItem) => {
  const [amount, setAmount] = useState(quantity);

  const shorthandName = () => {
    const model = name.split("-").shift();

    if (model === "xx99") {
      if (name.split("-")[2] === "two") {
        return "xx99 MK II";
      }
      return "xx99 MK I";
    } else {
      return model;
    }
  };

  return (
    <div className="flex items-center justify-between">
      <img
        className="w-16"
        src={`/${image.split("/").slice(2).join("/")}`}
        alt="product image"
      />
      <div className="flex-1 ml-4">
        <h5>{shorthandName()}</h5>
        <h5 className="opacity-50">{`$${price}`}</h5>
      </div>
      <span className="w-24 h-8 bg-F1F1F1 flex items-center justify-evenly">
        <span
          onClick={(e) => {
            setAmount(amount - 1);
          }}
          className="flex-1 grid place-content-center h-full cursor-pointer opacity-50"
        >
          -
        </span>
        <span className="">{amount}</span>
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
