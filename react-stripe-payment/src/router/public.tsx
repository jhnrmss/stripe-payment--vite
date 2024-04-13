import PublicLayout from "@/components/Layouts/public";
import Payment from "@/pages/Payment";
import Products from "@/pages/Products";
import Cart from "@/pages/Products/ProductCart";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "product",
        children: [
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "payment",
            element: <Payment />,
          },
        ],
      },
    ],
  },
]);
