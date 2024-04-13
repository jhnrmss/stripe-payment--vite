import { RouterProvider } from "react-router";
import { router } from "./router/public";
import { useEffect } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { useSetAtom } from "jotai";
import { stripePkAtom } from "./store/stripe";

function App() {
  const setStripePromise = useSetAtom(stripePkAtom);

  useEffect(() => {
    fetch("http://localhost:5252/config").then(async (r: Response) => {
      const { publishableKey }: { publishableKey: string } = await r.json();
      console.log("PKPK", publishableKey);
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
