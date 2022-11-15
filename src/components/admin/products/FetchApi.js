import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

export const getAllProduct = async () => {
  try {
    let res = await axios.get(`${apiURL}/api/product/all-product`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getNewProduct = async () => {
  try {
    let res = await axios.get(`${apiURL}/api/product/new-product`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOfferProduct = async () => {
  try {
    let res = await axios.get(`${apiURL}/api/product/offer-product`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPopularProduct = async () => {
  try {
    let res = await axios.get(`${apiURL}/api/order/popular-product`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getActiveProduct = async () => {
  try {
    let res = await axios.get(`${apiURL}/api/product/active-product`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createPorductImage = async ({ pImage }) => {
  /* Most important part for uploading multiple image  */
  let formData = new FormData();
  for (const file of pImage) {
    formData.append("pImage", file);
  }
  /* Most important part for uploading multiple image  */
};

export const createProduct = async (
  {
    pName,
    pDescription,
    pImage,
    pStatus,
    pCategory,
    pQuantity,
    pImageUrl,
    pPrice,
    pOffer,
    pWorldWide,
  },
  urls
) => {
  /* Most important part for uploading multiple image  */
  let formData = new FormData();
  for (const file of pImage) {
    formData.append("pImage", file);
  }
  console.log(urls);
  // const url = JSON.stringfy(urls);
  /* Most important part for uploading multiple image  */
  formData.append("pName", pName);
  formData.append("pDescription", pDescription);
  formData.append("pStatus", pStatus);
  formData.append("pCategory", pCategory);
  // formData.append("pImageUrl", url);
  formData.append("pQuantity", pQuantity);
  formData.append("pPrice", pPrice);
  formData.append("pOffer", pOffer);

  try {
    let res = await axios.post(`${apiURL}/api/product/add-product`, {
      pName,
      pDescription,
      pPrice,
      pQuantity,
      pCategory,
      pImageUrl: urls,
      pOffer,
      pStatus,
      pWorldWide,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const editProduct = async (product, urls) => {
  console.log(product);
  /* Most important part for updating multiple image  */
  let formData = new FormData();
  // if (product.pEditImages) {
  //   for (const file of product.pEditImages) {
  //     formData.append("pEditImages", file);
  //   }
  // }
  console.log(urls);
  /* Most important part for updating multiple image  */
  formData.append("pId", product.pId);
  formData.append("pName", product.pName);
  formData.append("pDescription", product.pDescription);
  formData.append("pStatus", product.pStatus);
  formData.append("pCategory", product.pCategory);
  formData.append("pQuantity", product.pQuantity);
  formData.append("pPrice", product.pPrice);
  formData.append("pOffer", product.pOffer);
  formData.append("pImages", product.pImages);
  formData.append("pImageUrl ", product.pImageUrl);
  console.log(product.pCategory);
  try {
    let res = await axios.post(`${apiURL}/api/product/edit-product`, {
      pId: product.pId,
      pName: product.pName,
      pDescription: product.pDescription,
      pPrice: product.pPrice,
      pQuantity: product.pQuantity,
      pCategory: product.pCategory,
      pImageUrl: urls,
      pOffer: product.pOffer,
      pStatus: product.pStatus,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (pId) => {
  try {
    let res = await axios.post(`${apiURL}/api/product/delete-product`, { pId });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const productByCategory = async (catId) => {
  try {
    let res = await axios.post(`${apiURL}/api/product/product-by-category`, {
      catId,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const productByPrice = async (price) => {
  try {
    let res = await axios.post(`${apiURL}/api/product/product-by-price`, {
      price,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
