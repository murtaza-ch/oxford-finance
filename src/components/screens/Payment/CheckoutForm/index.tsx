import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { VStack, Text } from "@chakra-ui/react";
import { CButton } from "../../..";
import "./index.css";

interface CheckoutFormProps {
  price: number;
}

const CheckoutForm = (props: CheckoutFormProps) => {
  const { price } = props;
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement: any = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <VStack mt="20px">
        <Text textAlign="center" color="#333" fontSize="14px">
          By clicking Buy Now you agree with our privacy policy and terms.
        </Text>
        <CButton title={`Pay NZD$${price}`} type="submit" disabled={!stripe} />
      </VStack>
    </form>
  );
};

export default CheckoutForm;
