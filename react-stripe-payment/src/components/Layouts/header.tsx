import { Fragment } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";
import { useAtomValue } from "jotai";
import { productAtom } from "@/store/productAtom";
import { twMerge } from "tailwind-merge";
import { NavLink } from "react-router-dom";

export default function Header() {
  const products = useAtomValue(productAtom);
  return (
    <header className="relative bg-white">
      <nav aria-label="Top" className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative border-b border-gray-200 px-4 pb-14 sm:static sm:px-0 sm:pb-0">
          <div className="flex h-16 items-center justify-between">
            <div className="flex flex-1">
              <NavLink to={"/"}>
                <p className="text-lg font-bold font-sans">STRIPE-PAYMENT</p>
              </NavLink>
            </div>

            <div className="flex flex-1 items-center justify-end">
              {/* Search */}
              <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
              </a>

              {/* Cart */}
              <Popover className="ml-4 flow-root text-sm lg:relative lg:ml-8">
                <Popover.Button className="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon
                    className={twMerge(
                      "h-6 w-6 flex-shrink-0  ",
                      products.length > 0
                        ? "text-red-400 group-hover:text-red-500"
                        : "text-gray-400 group-hover:text-gray-500"
                    )}
                    aria-hidden="true"
                  />
                  <span
                    className={twMerge(
                      "ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800",
                      products.length > 0
                        ? "text-red-700 group-hover:text-red-800"
                        : "text-gray-700 group-hover:text-gray-800"
                    )}
                  >
                    {products.length}
                  </span>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Panel className="absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-3 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
                    {products && products.length > 0 && (
                      <div className="mx-auto max-w-2xl px-4">
                        <ul
                          role="list"
                          className="divide-y divide-gray-200 max-h-96 overflow-y-auto no-scrollbar"
                        >
                          {products.map((product) => (
                            <li
                              key={product.id}
                              className="flex items-center py-6"
                            >
                              <img
                                src={product.images[0].src}
                                alt={product.images[0].alt}
                                className="h-16 w-16 flex-none rounded-md border border-gray-200"
                              />
                              <div className="ml-4 flex-auto">
                                <h3 className="font-medium text-gray-900">
                                  <a href={product.href}>{product.name}</a>
                                </h3>
                              </div>
                            </li>
                          ))}
                        </ul>

                        <p className="mt-6 text-center">
                          <NavLink to={"/product/cart"}>
                            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                              View Shopping Bag
                            </button>
                          </NavLink>
                        </p>
                      </div>
                    )}
                    {products.length === 0 && (
                      <p className="text-center pt-4 items-center text-xl">
                        No Items yet!
                      </p>
                    )}
                  </Popover.Panel>
                </Transition>
              </Popover>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
