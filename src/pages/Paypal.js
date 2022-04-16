import { useSelector } from "react-redux";
import { selectPrice } from "../features/priceSlice";
import PaypalCheckoutButton from "./PaypalCheckoutButton";

const Paypal = () => {
  const price = useSelector(selectPrice);

  const product = {
    description: "Netflix Subscription",
    price: price,
  };

  return (
    <div className="paypal-button-container">
      <PaypalCheckoutButton product={product} />
    </div>
  );
};

export default Paypal;
