import { useCartContext } from "@/components/Cart/CartProvider";
import Item from "./Item";
import Order from "@/components/Checkout/Order";
import { useState } from "react";

const Summary = () => {
  const cart = useCartContext();
  const grandTotal = cart != undefined ? cart.total + 50 : undefined;
  const [order, setOrder] = useState(false);

  const handleClick = () => {
    setOrder(true);

    if (order) {
      document.body.style.overflow = "scroll";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div className="container p-6 bg-white rounded-lg grid gap-6 ">
      <h4 className="lg:text-lg">Summary</h4>
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

      <div>
        <Cost cost="Total" amount={cart?.total} />
        <Cost cost="Shipping" amount={50} />
        <Cost cost="VAT (INCLUDED)" amount={1079} />
      </div>

      <Cost cost="Grand Total" amount={grandTotal} />

      <button onClick={() => handleClick()} className="btn gold w-full">
        Continue and Pay
      </button>

      <div className={`${order ? "block" : "hidden"}`}>
        <Order />
      </div>

      <style jsx>{`
        .container {
          height: max-content;
        }
      `}</style>
    </div>
  );
};

export default Summary;

const Cost = ({
  cost,
  amount,
}: {
  cost: string;
  amount: number | undefined;
}) => {
  return (
    <div className="flex items-center justify-between">
      <h4 className="opacity-50 text-base font-medium">{cost}</h4>
      <h4
        className={`text-lg ${cost === "Grand Total" ? "text-D87D4A" : ""}`}
      >{`$${amount}`}</h4>
    </div>
  );
};
