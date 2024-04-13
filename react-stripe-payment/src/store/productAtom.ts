import { ProductType } from "@/pages/Products/ProductCard";
import { atom } from "jotai";

export const productAtom = atom<ProductType[]>([]);
