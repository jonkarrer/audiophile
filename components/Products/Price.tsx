const Price = ({ price }: { price: number }) => {
  const priceArr = `${price}`.split("");
  let finalPrice: string = "";

  if (priceArr.length > 3) {
    priceArr.splice(1, 0, ",");
    finalPrice = priceArr.join("");
  } else {
    finalPrice = priceArr.join("");
  }

  return <h4 className="text-lg">{`$ ${finalPrice}`}</h4>;
};

export default Price;
