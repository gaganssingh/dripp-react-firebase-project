import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import {
  DemoContainer,
  FormContainer,
  PaymentButton,
  PaymentFormContainer,
} from "./PaymentForm.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const currentUser = useSelector(selectCurrentUser);
  const amount = useSelector(selectCartTotal);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount * 100, // Converted to cents
      }),
    }).then((res) => {
      return res.json();
    });
    const { client_secret: clientSecret } = response.paymentIntent;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful!");
      }
    }
  };

  if (amount === 0) {
    return null;
  }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={handlePayment}>
        <h2>Pay with Credit Card</h2>
        <CardElement />
        <PaymentButton buttonType="paynow" disabled={isProcessingPayment}>
          Pay Now
        </PaymentButton>
      </FormContainer>
      {/* prettier-ignore */}
      <DemoContainer>
        <p>Demo CC: <span>4242 4242 4242 4242</span></p>
        <p>Demo expiry date: <span>12/25</span></p>
        <p>Demo CVC: <span>424</span></p>
        <p>Demo ZIP: <span>42424</span></p>
      </DemoContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
