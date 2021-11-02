import { useCartContext } from "../Cart/CartProvider";
import Item from "./Item";
import { useRouter } from "next/router";
const Order = () => {
  const cart = useCartContext();
  const grandTotal = cart != undefined ? cart.total + 50 : undefined;

  const router = useRouter();

  const handleClick = () => {
    document.body.style.overflow = "scroll";
    router.push("/");
  };
  return (
    <div className="fixed top-0 left-0 m-auto h-screen w-screen bg-black bg-opacity-60 grid place-content-center z-50">
      <article className="bg-white rounded-lg grid gap-5 p-8">
        <div className="bg-D87D4A rounded-full w-16 h-16 grid place-content-center">
          <img src="/shared/check.svg" alt="check mark icon" />
        </div>
        <div>
          <h3>Thank you</h3>
          <h3>For your order</h3>
        </div>
        <p className="opacity-50">
          You will recieve and email notification shortly
        </p>
        <div>
          {cart?.currentCart.length != undefined &&
          cart?.currentCart.length > 0 ? (
            <div className="p-5 grid gap-5 bg-F1F1F1 rounded-t-lg">
              <div className="border-b border-101010 p-4">
                <Item
                  image={cart.currentCart[0].image}
                  name={cart.currentCart[0].name}
                  price={cart.currentCart[0].price}
                  quantity={cart.currentCart[0].quantity}
                  id={cart.currentCart[0].id}
                />
              </div>
              <div>
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
          <div className="bg-black text-white p-4 rounded-b-lg">
            <h4 className="font-normal opacity-50">Grand total</h4>
            <h4 className="font-normal">${grandTotal}</h4>
          </div>
        </div>
        <button onClick={() => handleClick()} className="btn gold w-full">
          back to home
        </button>
      </article>
    </div>
  );
};

export default Order;
