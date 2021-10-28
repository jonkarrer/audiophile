import { Children } from "@/utils/interfaces";
import React, { useContext, useState, Dispatch, SetStateAction } from "react";

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
}

export const CartContext = React.createContext<ICart | null>(null);

export const useCartContext = () => {
  return useContext(CartContext);
};

export function CartProvider({ children }: Children) {
  const [cart, setCart] = useState([] as IProduct[]);

  return (
    <CartContext.Provider value={{ currentCart: cart, updateCart: setCart }}>
      {children}
    </CartContext.Provider>
  );
}
