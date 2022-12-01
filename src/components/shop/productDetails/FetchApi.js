import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

export const getSingleProduct = async (pId) => {
  try {
    console.log(`${apiURL}/api/product/single-product`);
    let res = await axios.post(`${apiURL}/api/product/single-product`, {
      pId: pId,
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getRelatedProduct = async (catId) => {
  try {
    // console.log(`${apiURL}/api/product/product-by-relation`);
    let res = await axios.post(`${apiURL}/api/product/product-by-relation`, {
      catId: catId,
    });
    // console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postAddReview = async (formData) => {
  try {
    let res = await axios.post(`${apiURL}/api/product/add-review`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postDeleteReview = async (formData) => {
  try {
    let res = await axios.post(`${apiURL}/api/product/delete-review`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
