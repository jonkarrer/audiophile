import { useRouter } from "next/router";
import Forms from "@/components/Checkout/Forms";
import Summary from "@/components/Checkout/Summary";
function Checkout() {
  const router = useRouter();

  return (
    <section className="bg-FAFAFA">
      <div className="wrapper mt-14 md:mt-0 grid gap-5">
        <p onClick={() => router.back()} className="opacity-50 cursor-pointer">
          Go Back
        </p>

        <Forms />

        <Summary />
      </div>
    </section>
  );
}

export default Checkout;
