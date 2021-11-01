const Forms = () => {
  return (
    <div className="p-6 bg-white rounded-lg grid gap-8">
      <h2>Checkout</h2>

      <form action="" className="grid gap-5">
        <p className="form-title md:col-span-2">Billing Details</p>
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
        <p className="form-title md:col-span-2">Shipping Info</p>
        <label htmlFor="Home Address" className="md:col-span-2">
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

      <form action="" className="grid gap-5 md:grid-cols-2">
        <p className="form-title md:col-span-2">Payment Details</p>

        <label
          htmlFor="payment method"
          className="grid gap-5 md:col-span-2 md:flex"
        >
          <p className="label md:col-start-1 md:flex-1">Payment Method</p>

          <div className="md:flex-1 space-y-5">
            <div className="flex items-center justify-start border p-3 rounded-lg md:col-start-2">
              <input type="radio" name="payment method" className="w-10" />
              <h6 className="font-bold text-sm">e-Money</h6>
            </div>
            <div className="flex items-center justify-start border p-3 rounded-lg md:col-start-2">
              <input type="radio" name="payment method" className="w-10" />
              <h6 className="font-bold text-sm">Cash on Delivery</h6>
            </div>
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
  );
};

export default Forms;
