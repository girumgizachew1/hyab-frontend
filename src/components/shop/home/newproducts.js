import React, { Fragment, useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { getNewProduct } from "../../admin/products/FetchApi";
import { HomeContext } from "./index";
import { isWishReq, unWishReq, isWish } from "./Mixins";
import { useHistory } from "react-router-dom";
const apiURL = process.env.REACT_APP_API_URL;

const SpecialProduct = (props) => {
  const history = useHistory();
  const { data, dispatch } = useContext(HomeContext);
  const { newproducts } = data;
  /* WhisList State */
  const [wList, setWlist] = useState(
    JSON.parse(localStorage.getItem("wishList"))
  );

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    dispatch({ type: "loading", payload: true });
    try {
      let responseData = await getNewProduct();
      setTimeout(() => {
        if (responseData && responseData.Products) {
          console.log(responseData.Products);
          dispatch({ type: "newproducts", payload: responseData.Products });
          dispatch({ type: "loading", payload: false });
        }
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  if (data.loading) {
    return (
      <div className=" col-span-2 md:col-span-3 lg:col-span-4 flex items-center justify-center py-24">
        <svg
          className="w-12 h-12 animate-spin text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path>
        </svg>
      </div>
    );
  }
  return (
    <Fragment>
      {newproducts && newproducts.length > 0 ? (
        newproducts.map((item, index) => {
          return (
            <div className="">
              <Fragment key={index}>
                <div className="w-full h-full space-x-5">
                  <div
                    className="col-span-1  w-full h-40 border m-2 rounded-lg border-green-200 text-black  shadow-lg bg-white"
                    onClick={(e) => history.push(`/products/${item._id}`)}
                  >
                    <img
                      onClick={(e) => Redirect(`/products/${item._id}`)}
                      className="h-40 w-full object-cover object-center shadow-sm shadow-green-100 opacity-90 "
                      src={item.pImageUrl}
                      alt=""
                    />
                  </div>
                </div>
              </Fragment>
            </div>
          );
        })
      ) : (
        <div className="col-span-2 md:col-span-3 lg:col-span-4 flex items-center justify-center py-24 text-2xl">
          No product found
        </div>
      )}
    </Fragment>
  );
};

export default SpecialProduct;
