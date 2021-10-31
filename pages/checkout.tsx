import { useRouter } from "next/router";

function Checkout() {
  const router = useRouter();
  return (
    <section className="bg-FAFAFA">
      <div className="wrapper mt-14 grid gap-5">
        <p onClick={() => router.back()} className="opacity-50 cursor-pointer">
          Go Back
        </p>

        <div className="p-6 bg-white rounded-lg grid gap-8">
          <h2>Checkout</h2>

          <form action="" className="grid gap-5">
            <p className="text-D87D4A tracking-widest text-sm font-medium uppercase">
              Billing Details
            </p>
            <label htmlFor="name">
              <p className="label">Name</p>
              <input type="text" name="name" placeholder="Alexei Ward" />
            </label>
            <label htmlFor="email">
              <p className="label">Email</p>
              <input type="email" name="email" placeholder="alexei@mail.com" />
            </label>
            <label htmlFor="phone">
              <p className="label">Phone Number</p>
              <input type="tel" name="phone" placeholder="+1 202-555-0136" />
            </label>
          </form>

          <form action="" className="grid gap-5">
            <p className="text-D87D4A tracking-widest text-sm font-medium uppercase">
              Shipping Info
            </p>
            <label htmlFor="Home Address">
              <p className="label">Your Address</p>
              <input
                type="text"
                name="address"
                placeholder="1137 Williams Avenue"
              />
            </label>
            <label htmlFor="zip code">
              <p className="label">Zip Code</p>
              <input type="text" name="zip code" placeholder="10001" />
            </label>
            <label htmlFor="city">
              <p className="label">City</p>
              <input type="text" name="city" placeholder="New York" />
            </label>
            <label htmlFor="country">
              <p className="label">Country</p>
              <input type="text" name="country" placeholder="United States" />
            </label>
          </form>

          <form action="" className="grid gap-5">
            <p className="text-D87D4A tracking-widest text-sm font-medium uppercase">
              Payment Details
            </p>

            <label htmlFor="payment method" className="grid gap-4">
              <p className="label">Payment Method</p>
              <div className="flex items-center justify-start border p-3 rounded-lg">
                <input type="radio" name="payment method" className="w-10" />
                <h6 className="font-bold text-sm">e-Money</h6>
              </div>

              <div className="flex items-center justify-start border p-3 rounded-lg">
                <input type="radio" name="payment method" className="w-10" />
                <h6 className="font-bold text-sm">Cash on Delivery</h6>
              </div>
            </label>

            <label htmlFor="money number">
              <p className="label">e-money/Number</p>
              <input type="text" name="money number" placeholder="238521993" />
            </label>
            <label htmlFor="money pin">
              <p className="label">e-money/PIN</p>
              <input type="text" name="money pin" placeholder="6891" />
            </label>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
