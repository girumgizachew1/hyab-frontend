import React, { Fragment, useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { getAllProduct, getActiveProduct } from "../../admin/products/FetchApi";
import { getActiveCategory } from "../../admin/categories/FetchApi"
import { HomeContext } from "./index";
import { isWishReq, unWishReq, isWish } from "./Mixins";


const apiURL = process.env.REACT_APP_API_URL;
const CategoriesList = (props) => {
  const { data, dispatch } = useContext(HomeContext);
  const { products } = data;
  const [categories, setCategories] = useState(null);

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
      let responseData = await getActiveCategory();
      setTimeout(() => {
        if (responseData && responseData.Categories) {
          setCategories(responseData.Categories);
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
      {categories && categories.length > 0 ? (
        categories?.map((item, index) => {
          return (
            <Fragment key={index}>
              <div 
                onClick={(e) => Redirect(`/products/category/${item._id}`)}
                className="rounded overflow-hidden shadow-md hover:shadow-xl flex flex-row bg-gray-50 justify-between p-2">
                {/* <div className="mx-1 col-span-1 w-full  border m-2 rounded-lg border-green-200 text-black shadow-lg bg-white hover:bg-white hover:text-green-600 hover:hidden "> */}
                <div className="px-6 py-4 text-center ">
                    <div className="font-bold text-LG mb-2">
                      {item.cName}
                    </div>
                  </div> 
                  <img 
                    className="h-16 w-16 object-fit shadow-sm shadow-green-100 "
                    src={item.cImageUrl}
                    alt=""
                  />
                {/* </div> */}
              </div>
            </Fragment>
          );
        })
      ) : (
        <div className="col-span-2 md:col-span-3 lg:col-span-4 flex items-center justify-center py-24 text-2xl">
          No Categories found
        </div>
      )}
    </Fragment>
  );
};

export default CategoriesList;
