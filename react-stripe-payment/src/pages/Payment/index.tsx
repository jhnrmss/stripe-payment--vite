import { stripePkAtom, stripeSkAtom } from "@/store/stripe";
import { Elements } from "@stripe/react-stripe-js";
import { useAtomValue } from "jotai";
import CheckoutForm from "./CheckoutForm";

function Payment() {
  const stripePromise = useAtomValue(stripePkAtom);
  const clientSecret = useAtomValue(stripeSkAtom);

  return (
    <>
      <h1 className="text-xl font-medium my-4 text-center">
        React Stripe and the Payment Element
      </h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <div className="flex justify-center items-center">
            <CheckoutForm />
          </div>
        </Elements>
      )}
    </>
  );
}

export default Payment;
