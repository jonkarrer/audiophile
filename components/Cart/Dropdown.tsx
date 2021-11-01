import { useCartContext } from "./CartProvider";
import Item from "./Item";
import { useRouter } from "next/router";

const Dropdown = () => {
  const cart = useCartContext();
  const router = useRouter();

  return (
    <div className="fixed left-0 top-0 w-screen z-40 lg:right-0 lg:m-auto lg:wrapper">
      <div className="wrapper bg-white mt-28 p-6 grid gap-6 rounded-lg md:w-96 md:p-8 md:float-right">
        <div className="flex justify-between items-center">
          <h4 className="text-lg">Cart ({`${cart?.currentCart.length}`})</h4>
          <span
            onClick={() => cart?.updateCart([])}
            className="underline opacity-50 cursor-pointer"
          >
            Remove all
          </span>
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
          <h4 className="opacity-50 text-base font-medium">Total</h4>
          <h4 className="text-lg">{`$ ${cart?.total}`}</h4>
        </div>
        <button
          onClick={() => router.push("/checkout")}
          className="btn gold w-full"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
