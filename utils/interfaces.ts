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
  gallery: IGallery;
  others: Array<IOther>;
}

export interface IOther {
  slug: string;
  name: string;
  image: IImage;
}

export interface IGallery {
  first: IGalleryItem;
  second: IGalleryItem;
  third: IGalleryItem;
}

export interface IGalleryItem {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface ISplash {
  image: IImage;
  isNew: boolean;
  description: string;
  name: string;
  price: number;
  slug: string;
  id: number;
}

export interface IAddToCart {
  productName: string;
  id: number;
  price: number;
  image: string;
}
