import { useEffect } from "react";
import { useCartContext } from "./CartProvider";
import Item from "./Item";

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
                id={item.id}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <h4 className="opacity-50">Total</h4>
          <h4>{`$ ${cart?.total}`}</h4>
        </div>
        <button className="btn gold w-full">Checkout</button>
      </div>
    </div>
  );
};

export default Dropdown;
