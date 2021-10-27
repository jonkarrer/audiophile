import { IIncludes } from "@/utils/interfaces";

const InTheBox = ({ includes }: { includes: Array<IIncludes> }) => {
  return (
    <article className="grid gap-5">
      <h3>In the box</h3>
      <div className="grid gap-3">
        {includes.map((item, index) => (
          <div
            key={index}
            className="grid grid-flow-col place-content-start gap-6"
          >
            <span className="text-D87D4A flex items-end">
              {`${item.quantity}x`}
            </span>
            <span className="opacity-50">{item.item}</span>
          </div>
        ))}
      </div>
    </article>
  );
};

export default InTheBox;
