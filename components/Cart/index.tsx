import { useState } from "react";
import { useCartContext } from "./CartProvider";

const Cart = () => {
  const cart = useCartContext();
  return (
    <div className="fixed left-0 top-0 bg-black bg-opacity-50  w-screen z-40">
      <div className="wrapper bg-white mt-28">
        <article className="p-6">
          <div className="flex justify-between items-center">
            <h4>Cart ({`${cart?.currentCart.length}`})</h4>
            <span className="underline opacity-50">Remove all</span>
          </div>
          <div>
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
          <button className="btn gold">Checkout</button>
        </article>
      </div>
    </div>
  );
};

export default Cart;

interface IItem {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const Item = ({ image, name, price, quantity }: IItem) => {
  const [amount, setAmount] = useState(quantity);
  return (
    <div>
      <img src={image.split("/").slice(2).join("/")} alt="product image" />
      <div>
        <h5>{name}</h5>
        <h5>{`$${price}`}</h5>
      </div>
      <span className="w-32 bg-F1F1F1 h-full flex items-center justify-evenly">
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
