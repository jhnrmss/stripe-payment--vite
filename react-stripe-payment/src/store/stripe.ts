import { Stripe } from "@stripe/stripe-js";
import { atom } from "jotai";

export const stripePkAtom = atom<Promise<Stripe | null>>(Promise.resolve(null));
export const stripeSkAtom = atom<string>("");
