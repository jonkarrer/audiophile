import { IOther } from "@/utils/interfaces";

function Others({ others }: { others: Array<IOther> }) {
  return (
    <div className="grid place-items-center gap-10">
      <h3>you may also like</h3>
      <div className="md:flex md:space-x-5">
        {others.map((item, index) => (
          <article key={index} className="grid gap-6 place-items-center">
            <img
              className="rounded-lg"
              src={`/${item.image.desktop.split("/").slice(2).join("/")}`}
              alt="product image"
            />
            <h3 className="md:text-xl">{item.name}</h3>
            <button className="btn gold">see product</button>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Others;
