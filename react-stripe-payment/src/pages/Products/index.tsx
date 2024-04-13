import { productAtom } from "@/store/productAtom";
import ProductCard, { ProductType } from "./ProductCard";
import { useAtomValue } from "jotai";

const products: ProductType[] = [
  {
    id: 1,
    name: "Organize Basic Set (Walnut)",
    price: 149,
    rating: 5,
    reviewCount: 38,
    images: [
      {
        id: 1,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
        alt: "TODO",
      },
      {
        id: 2,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
        alt: "TODO",
      },
      {
        id: 3,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
        alt: "TODO",
      },
    ],
    href: "#",
    description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  },
  {
    id: 2,
    name: "Organize Pen Holder",
    price: 15,
    rating: 5,
    reviewCount: 18,
    images: [
      {
        id: 1,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg",
        alt: "TODO",
      },
      {
        id: 2,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg",
        alt: "TODO",
      },
      {
        id: 3,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg",
        alt: "TODO",
      },
    ],

    href: "#",
    description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  },
];

export default function Products() {
  const productss = useAtomValue(productAtom);
  console.log(productss);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <h2 className=" text-2xl my-6 font-semibold ">New Products</h2>

        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
