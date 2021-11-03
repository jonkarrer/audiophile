import Receipt from "./Receipt";
import { useRouter } from "next/router";

const Order = () => {
  const router = useRouter();

  const handleClick = () => {
    document.body.style.overflow = "scroll";
    router.push("/");
  };
  return (
    <div className="fixed top-0 left-0 m-auto h-screen w-screen bg-black bg-opacity-60 grid place-content-center z-50">
      <article className="bg-white rounded-lg grid gap-5 p-8 md:w-558 md:gap-8">
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

        <Receipt />

        <button onClick={() => handleClick()} className="btn gold w-full">
          back to home
        </button>
      </article>
    </div>
  );
};

export default Order;
