import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const PaypalCheckoutButton = (props) => {
  const { product } = props;
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleApprove = (orderId) => {
    // Call backend function to fulfill order

    // if response is success
    setPaidFor(true);
    // Refresh user's account or subscription status

    // if response is error
    // alert("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.");
  };

  if (paidFor) {
    // Display success message, modal or redirect user to success page
    Swal.fire({
      title: "Suscrito!",
      text: "Suscripción realizada exitosamente!",
      icon: "success",
      confirmButtonText: "Ok",
      confirmButtonColor: "green",
      timer: "3000",
    });
    history.push("/");
  }

  if (error) {
    // Display error message, modal or redirect user to error page
    //alert(error);
    Swal.fire({
      title: "Error!",
      text: "Por favor verifique e intente nuevamente!",
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#d33",
      timer: "3000",
    });
  }

  return (
    <PayPalButtons
      onClick={(data, actions) => {
        // Validate on button click, client or server side
        const hasAlreadyBoughtSubscription = false;

        if (hasAlreadyBoughtSubscription) {
          setError(
            "You already bought this subscription. Go to your account to view your list of subscription."
          );

          return actions.reject();
        } else {
          return actions.resolve();
        }
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: product.description,
              amount: {
                value: product.price,
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        console.log("order", order);

        handleApprove(data.orderID);
      }}
      onCancel={() => {
        // Display cancel message, modal or redirect user to cancel page or back to cart
      }}
      onError={(err) => {
        setError(err);
        console.error("PayPal Checkout onError", err);
      }}
    />
  );
};

export default PaypalCheckoutButton;
