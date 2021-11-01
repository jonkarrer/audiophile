import { useCartContext } from "@/components/Cart/CartProvider";
import Name from "@/components/Cart/Name";
import { IItem } from "@/utils/interfaces";

const Summary = () => {
  const cart = useCartContext();
  const grandTotal = cart != undefined ? cart.total + 50 : undefined;

  console.log(grandTotal);
  return (
    <div className="p-6 bg-white rounded-lg grid gap-6">
      <h4>Summary</h4>
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

      <button className="btn gold w-full">Continue and Pay</button>
    </div>
  );
};

export default Summary;

const Item = ({ image, name, price, quantity, id }: IItem) => {
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
      <p>{`x${quantity}`}</p>
    </div>
  );
};

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
      <h4 className="text-lg">{`$ ${amount}`}</h4>
    </div>
  );
};
