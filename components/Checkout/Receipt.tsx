import { useCartContext } from "../Cart/CartProvider";
import Item from "./Item";
import { useState } from "react";

const Receipt = () => {
  const [openItems, setOpenItems] = useState(true);

  const cart = useCartContext();
  const grandTotal = cart != undefined ? cart.total + 50 : undefined;

  return (
    <>
      <div className={`${openItems ? "md:flex" : "hidden"}`}>
        <div className="grid gap-4 md:w-72 p-5 bg-F1F1F1 rounded-t-lg md:rounded-t-none md:rounded-l-lg ">
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
          <hr />
          <div className="cursor-pointer" onClick={() => setOpenItems(false)}>
            <p className="text-center font-semibold text-xs opacity-50">
              View Less
            </p>
          </div>
        </div>
        <div className="bg-black text-white p-4 rounded-b-lg md:flex-1 md:grid md:place-content-end md:justify-start md:p-6 md:rounded-b-none md:rounded-r-lg md:rounded-br-lg">
          <h4 className="font-normal opacity-50 text-base">Grand total</h4>
          <h4 className="font-normal text-lg">${grandTotal}</h4>
        </div>
      </div>
      <div className={`${openItems ? "hidden" : "md:flex"}`}>
        {cart?.currentCart.length != undefined &&
        cart?.currentCart.length > 0 ? (
          <div className="p-5 grid gap-5 bg-F1F1F1 rounded-t-lg md:w-72 md:rounded-t-none md:rounded-l-lg">
            <div className="border-b border-4C4C4C border-opacity-50 p-4">
              <Item
                image={cart.currentCart[0].image}
                name={cart.currentCart[0].name}
                price={cart.currentCart[0].price}
                quantity={cart.currentCart[0].quantity}
                id={cart.currentCart[0].id}
              />
            </div>
            <div className="cursor-pointer" onClick={() => setOpenItems(true)}>
              <p className="text-center">
                and {cart.currentCart.length - 1} other item(s)
              </p>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 bg-F1F1F1 rounded-t-lg p-4">
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
        )}

        <div className="bg-black text-white p-4 rounded-b-lg md:flex-1 md:grid md:place-content-center md:justify-start md:p-6 md:rounded-b-none md:rounded-r-lg md:rounded-br-lg">
          <h4 className="font-normal opacity-50 text-base">Grand total</h4>
          <h4 className="font-normal text-lg">${grandTotal}</h4>
        </div>
      </div>
    </>
  );
};

export default Receipt;
