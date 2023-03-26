import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoriesSubTab from "./CategoriesSubTab";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function CategoriesTab() {
  const { categories, subcategories, loading } = useSelector(
    (item) => item.categoryReducer
  );
  return (
    <>
      {categories.map((item, i) => (
        <div key={i}>
          <Menu as="div" className="inherit inline-block text-left">
            <div>
              <Menu.Button
                className={classNames(
                  item.current
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                  "rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"
                )}
              >
                {item.name}
                <ChevronDownIcon
                  className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                {subcategories.hasOwnProperty(item._id) && (
                  <CategoriesSubTab subcategories={subcategories[item._id]} />
                )}

                {/* {subcategories.hasOwnProperty(item._id) && subcategories[item._id].map((element, i) =>
                                    (
                                        <div className="px-1 py-1 " key={i}>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${active ? 'bg-kazari-500 text-white' : 'text-gray-900'
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    >
                                                        {element.name}
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    )
                                    )} */}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      ))}
    </>
  );
}
export default CategoriesTab;
