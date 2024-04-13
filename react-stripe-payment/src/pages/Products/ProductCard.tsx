import { StarIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import ProductOverview from "./ProductOverview";
import { useState } from "react";

export type ProductType = {
  id: number;
  name: string;
  href: string;
  rating: number;
  reviewCount: number;
  price: number;
  description: string;
  images: Array<ProductImage>;
};

export type ProductImage = {
  id: number;
  name: string;
  src: string;
  alt: string;
};
const ProductCard = ({ product }: { product: ProductType }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="group relative border border-gray-200 p-4 sm:p-6">
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
        <img
          src={product.images[0].src}
          alt={product.images[0].alt}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="pb-4 pt-10 text-center">
        <h3 className="text-sm font-medium text-gray-900">
          <a onClick={() => setOpen((prev) => !prev)}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </a>
        </h3>
        <div className="mt-3 flex flex-col items-center">
          <p className="sr-only">{product.rating} out of 5 stars</p>
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={twMerge(
                  product.rating > rating ? "text-yellow-400" : "text-gray-200",
                  "h-5 w-5 flex-shrink-0"
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="mt-1 text-sm text-gray-500">
            {product.reviewCount} reviews
          </p>
        </div>
        <p className="mt-4 text-base font-medium text-gray-900">
          ${product.price}
        </p>
      </div>
      <ProductOverview open={open} setOpen={setOpen} product={product} />
    </div>
  );
};

export default ProductCard;
