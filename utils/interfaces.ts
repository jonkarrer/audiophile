import type { ReactNode } from "react";

export interface Children {
  children: ReactNode;
}
export interface IImage {
  mobile: string;
  tablet: string;
  desktop: string;
}
export interface IIncludes {
  quantity: string;
  item: string;
}
export interface IProduct {
  id: number;
  slug: string;
  name: string;
  image: IImage;
  category: string;
  categoryImage: IImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Array<IIncludes>;
  gallery: { order: { path: string } };
  others: Array<{ item: string }>;
}

export interface ISplash {
  categoryImage: IImage;
  isNew: boolean;
  description: string;
  name: string;
}
