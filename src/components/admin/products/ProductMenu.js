import React, { Fragment, useContext, useState, useEffect } from "react";
import { ProductContext } from "./index";
import AddProductModal from "./AddProductModal";
import EditProductModal from "./EditProductModal";

import { getAllCategory } from "../categories/FetchApi";

import { filterOrder } from "../orders/Actions";
import { filterProduct } from "../products/Actions";

const ProductMenu = (props) => {
  const { data, dispatch } = useContext(ProductContext);
  const [dropdown, setDropdown] = useState(false);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetchCategoryData();
  }, []);

  const fetchCategoryData = async () => {
    let responseData = await getAllCategory();
    if (responseData.Categories) {
      // console.log(responseData.Categories);
      setCategories(responseData.Categories);
    }
  };

  return (
    <Fragment>
      <div className="col-span-1 flex justify-left space-x-5 items-center">
        <div className="flex items-center">
          {/* It's open the add product modal */}
          <span
            style={{ background: "#303031" }}
            onClick={(e) =>
              dispatch({ type: "addProductModal", payload: true })
            }
            className="rounded-full cursor-pointer p-2 bg-gray-800 flex items-center text-gray-100 text-sm font-semibold uppercase"
          >
            <svg
              className="w-6 h-6 text-gray-100 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            Add Product
          </span>
        </div>

        <div
          style={{ background: "#303031" }}
          className="relative rounded-full text-gray-100 text-sm font-semibold uppercase"
        >
          <div
            onClick={(e) => setDropdown(!dropdown)}
            className="flex items-center cursor-pointer rounded-full overflow-hidden p-2 justify-center"
          >
            <svg
              className="w-6 h-6 text-gray-100 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
            </svg>
            <span className="pr-2">Filter</span>
          </div>
          <div
            style={{ background: "#303031" }}
            className={`${
              dropdown ? "" : "hidden"
            } absolute top-0 left-0 mt-12 rounded-lg overflow-hidden w-full md:w-48 flex flex-col z-10`}
          >
            <span
              onClick={(e) =>
                filterProduct("All", data, dispatch, dropdown, setDropdown)
              }
              className="px-4 py-2 hover:bg-black text-center cursor-pointer"
            >
              All
            </span>
            {categories?.length > 0
              ? categories?.map((category) => {
                  return (
                    <span
                      onClick={(e) =>
                        filterProduct(
                          category,
                          data,
                          dispatch,
                          dropdown,
                          setDropdown
                        )
                      }
                      className="px-4 py-2 hover:bg-black text-center cursor-pointer"
                    >
                      {category.cName}
                    </span>
                  );
                })
              : ""}
          </div>
        </div>

        <AddProductModal />
        <EditProductModal />
      </div>
    </Fragment>
  );
};

export default ProductMenu;
