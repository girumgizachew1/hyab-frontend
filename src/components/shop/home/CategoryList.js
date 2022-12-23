import React, { Fragment, useState, useEffect, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { getAllProduct, getActiveProduct } from "../../admin/products/FetchApi";
import { getActiveCategory } from "../../admin/categories/FetchApi"
import { HomeContext } from "./index";
import { isWishReq, unWishReq, isWish } from "./Mixins";


const apiURL = process.env.REACT_APP_API_URL;
const CategoriesList = (props) => {
  const { data, dispatch } = useContext(HomeContext);
  const { products } = data;
  const [categories, setCategories] = useState(null);
  const history = useHistory() 
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
          <div className="w-16 h-16 border border-yellow-600 border-solid rounded-full border-t-4  animate-spin">
     
    </div>
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
                onClick={(e) => history.push(`/products/category/${item._id}`)}
                className="rounded overflow-hidden shadow-md hover:shadow-xl flex flex-row bg-gray-50 justify-between p-2">
                {/* <div className="mx-1 col-span-1 w-full  border m-2 rounded-lg border-green-200 text-black shadow-lg bg-white hover:bg-white hover:text-green-600 hover:hidden "> */}
                <div className="px-2 py-4 text-center ">
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
