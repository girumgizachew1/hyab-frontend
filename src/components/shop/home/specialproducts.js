import React, { Fragment, useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { getOfferProduct } from "../../admin/products/FetchApi";
import { HomeContext } from "./index";
import { isWishReq, unWishReq, isWish } from "./Mixins";
import { useHistory } from "react-router-dom";
const apiURL = process.env.REACT_APP_API_URL;

const SpecialProduct = (props) => {
  const history = useHistory();
  const { data, dispatch } = useContext(HomeContext);
  const { specialproducts } = data;
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
      let responseData = await getOfferProduct();
      setTimeout(() => {
        if (responseData && responseData.Products) {
          console.log(responseData.Products);
          dispatch({ type: "specialProducts", payload: responseData.Products });
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
      {specialproducts && specialproducts.length > 0 ? (
        specialproducts.map((item, index) => {
          return (
            <div className="">
              <Fragment key={index}>
                <div
                  className="w-full h-full space-x-5"
                  onClick={(e) => history.push(`/products/${item._id}`)}
                >
                  <div className="col-span-1 w-full h-40 border m-2 rounded-lg border-green-200 text-black  shadow-lg bg-white">
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
