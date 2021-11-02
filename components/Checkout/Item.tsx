import Name from "@/components/Cart/Name";
import { IItem } from "@/utils/interfaces";

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

export default Item;
