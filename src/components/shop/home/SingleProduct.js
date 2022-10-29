import React, { Fragment, useState, useEffect, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { getAllProduct, getActiveProduct } from "../../admin/products/FetchApi";
import { HomeContext } from "./index";
import { isWishReq, unWishReq, isWish } from "./Mixins";

const apiURL = process.env.REACT_APP_API_URL;

const SingleProduct = (props) => {
  const { data, dispatch } = useContext(HomeContext);
  const { products } = data;
  const history = useHistory();

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
      let responseData = await getActiveProduct();
      setTimeout(() => {
        if (responseData && responseData.Products) {
          dispatch({ type: "setProducts", payload: responseData.Products });
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
      {products && products.length > 0 ? (
        products.map((item, index) => {
          return (
            <div className="">
              <Fragment key={index}>
                <div
                  className="w-72 h-full space-x-5"
                  onClick={(e) => history.push(`/products/${item._id}`)}
                >
                  <div className="mx-1 col-span-1 w-full h-80 border m-2 rounded-lg border-gray-200 hover:border-red-400 text-black  shadow-lg bg-white">
                    <img
                      onClick={(e) => history.push(`/products/${item._id}`)}
                      className="h-44 w-full object-cover object-center shadow-sm shadow-green-100 opacity-90 mt-4"
                      src={item.pImageUrl}
                      alt=""
                    />

                    <div className="flex items-center justify-between mt-2 p-2 border-b">
                      <div className="text-gray-800  text-base truncate">
                        {item.pName}
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>
                          <svg
                            className="w-4 h-4 fill-current text-yellow-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                          </svg>
                        </span>
                        <span className="text-gray-800">
                          {item?.pRatingsReviews?.length}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-row justify-between p-2 border-b">
                      <div>${item.pPrice}.00</div>
                      <button
                        onClick={(e) => history.push(`/products/${item._id}`)}
                        className="bg-red-400 border-gray-500 text-white text-sm rounded-lg w-14 h-6 md:w-24 md:h-8"
                      >
                        View
                      </button>
                    </div>

                    {/* WhisList Logic  */}
                    <div className="absolute top-0 right-0 mx-2 my-2 md:mx-4">
                      <svg
                        onClick={(e) => isWishReq(e, item._id, setWlist)}
                        className={`${
                          isWish(item._id, wList) && "hidden"
                        } w-5 h-5 md:w-6 md:h-6 cursor-pointer text-yellow-600 transition-all duration-300 ease-in`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <svg
                        onClick={(e) => unWishReq(e, item._id, setWlist)}
                        className={`${
                          !isWish(item._id, wList) && "hidden"
                        } w-5 h-5 md:w-6 md:h-6 cursor-pointer text-yellow-700 transition-all duration-300 ease-in`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    {/* WhisList Logic End */}
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

export default SingleProduct;
