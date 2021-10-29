import { Children } from "@/utils/interfaces";
import React, {
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

interface IProduct {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

interface ICart {
  currentCart: IProduct[];
  updateCart: Dispatch<SetStateAction<IProduct[]>>;
  total: number;
}

export const CartContext = React.createContext<ICart | null>(null);

export const useCartContext = () => {
  return useContext(CartContext);
};

export function CartProvider({ children }: Children) {
  const [cart, setCart] = useState([] as IProduct[]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const calcTotal = () => {
      if (cart?.length === 1) return cart[0].price * cart[0].quantity;
      if (cart?.length === 0) return 0;

      let alpha = 0;
      for (const item of cart) {
        alpha += item.price * item.quantity;
      }
      return alpha;
    };
    setTotal(calcTotal());
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ currentCart: cart, updateCart: setCart, total: total }}
    >
      {children}
    </CartContext.Provider>
  );
}
