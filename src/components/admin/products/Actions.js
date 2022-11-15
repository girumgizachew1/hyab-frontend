import { getPopularProduct, getAllProduct } from "./FetchApi";
import { getAllCategory } from "../categories/FetchApi";

export const fetchData = async (dispatch) => {
  dispatch({ type: "loading", payload: true });
  let responseData = await getAllProduct();
  setTimeout(() => {
    if (responseData && responseData.Products) {
      dispatch({
        type: "fetchProductsAndChangeState",
        payload: responseData.Products,
      });
      dispatch({ type: "loading", payload: false });
    }
  }, 1000);

  //   let responseData = await getAllProduct();
  //   setTimeout(() => {
  //     if (responseData && responseData.Products) {
  //       dispatch({
  //         type: "fetchProductsAndChangeState",
  //         payload: responseData.Products,
  //       });
  //       setLoading(false);
  //     }
  //   }, 1000);
};

/* Filter All Order */
export const filterProduct = async (
  type,
  data,
  dispatch,
  dropdown,
  setDropdown
) => {
  let categories;
  let responseDataCate = await getAllCategory();
  if (responseDataCate.Categories) {
    // console.log(responseData.Categories);
    categories = responseDataCate.Categories;
  }

  let responseData = await getAllProduct();
  if (responseData && responseData.Products) {
    let newData;
    if (type === "All") {
      dispatch({
        type: "fetchProductsAndChangeState",
        payload: responseData.Products,
      });
      setDropdown(!dropdown);
    }
    console.log(categories);
    console.log(type);
    // categories.length > 0
    categories.map((category, index) => {
      // console.log(category);
      if (type.cName === category.cName) {
        newData = responseData.Products.filter(
          (item) => item.pCategory?.cName === category.cName
        );
        console.log(newData);
        dispatch({ type: "fetchProductsAndChangeState", payload: newData });

        setDropdown(!dropdown);
      }
    });
    // : "";
  }
};
