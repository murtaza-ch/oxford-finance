import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

interface PaymentScreenProps {
  screenId: string;
  onSetAnswerValue?: (name: string, value: number | string) => void;
  answers: {
    "chooseYourTerm.monthsAndPrice": string;
  };
}

export default function PaymentScreen(props: PaymentScreenProps) {
  const { answers } = props;
  const price = answers["chooseYourTerm.monthsAndPrice"]?.split(" ")[1];
  const months = answers["chooseYourTerm.monthsAndPrice"]?.split(" ")[0];
  return (
    <Elements stripe={stripePromise}>
      <Box p="20px" bgColor="#eefaff" minH="600px">
        <CheckoutForm price={+price} />
      </Box>
    </Elements>
  );
}
