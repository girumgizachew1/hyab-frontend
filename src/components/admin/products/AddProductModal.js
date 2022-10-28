import React, { Fragment, useContext, useState, useEffect } from "react";
import { ProductContext } from "./index";
import { createProduct, getAllProduct } from "./FetchApi";
import { getAllCategory } from "../categories/FetchApi";

import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase/config";
// import { storeImage } from "../firebase/useStorage";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";
import { LinearProgress } from "@mui/material";
import { CircularProgress } from "@mui/material";

const AddProductDetail = ({ categories }) => {
  const { data, dispatch } = useContext(ProductContext);
  const [urls, setUrls] = useState([]);
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(false);

  const alert = (msg, type) => (
    <div className={`bg-${type}-200 py-2 px-4 w-full`}>{msg}</div>
  );

  const [fData, setFdata] = useState({
    pName: "",
    pDescription: "",
    pStatus: "Active",
    pImage: null, // Initial value will be null or empty array
    pCategory: "",
    pPrice: "",
    pOffer: 10,
    pWorldWide: false,
    pImageUrl: "",
    pQuantity: "",
    success: false,
    error: false,
  });

  const fetchData = async () => {
    let responseData = await getAllProduct();
    setTimeout(() => {
      if (responseData && responseData.Products) {
        dispatch({
          type: "fetchProductsAndChangeState",
          payload: responseData.Products,
        });
      }
    }, 1000);
  };

  const onChangeImage = (e) => {
    // const images = img;
    // console.log(images);
    // console.log(images[0]);
    // if(!images) return;
    setShow(true);
    const promises = [];
    for (let i = 0; i < e.target.files.length; i++) {
      // let newImage;
      const image = e.target.files[i];
      const storageRef = projectStorage.ref(`ResizedImage/${image.name}`);
      const collectionRef = projectFirestore.collection("ResizedImage");
      promises.push(storageRef);

      const imageFilname = image.name;
      // ddddddddddddddddddddddddddddddddd

      let reader = new FileReader();
      reader.readAsDataURL(image);

      reader.onload = (event) => {
        let image_url = event.target.result;

        const newImage = document.createElement("img");
        newImage.src = image_url;
        const img = new Image();

        newImage.onload = (e) => {
          let canvas = document.createElement("canvas");
          var MAX_HEIGHT = 1500;
          let ratio = MAX_HEIGHT / e.target.height;

          canvas.height = MAX_HEIGHT;
          canvas.width = e.target.width * ratio;

          const ctx = canvas.getContext("2d");

          console.log(image);
          ctx.drawImage(newImage, 0, 0, canvas.width, canvas.height);

          console.log(ctx.canvas.toBlob);
          try {
            ctx.canvas.toBlob(
              (blob) => {
                console.log(blob);
                const fileNew = new File([blob], imageFilname, {
                  type: "image/jpeg",
                  lastModified: Date.now(),
                });
                console.log(fileNew);

                storageRef.put(fileNew).on(
                  "state_changed",
                  (snapshot) => {
                    const progress = Math.round(
                      (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    console.log(progress);
                    // setProgress(progress);
                  },
                  (error) => {
                    console.log(error);
                  },
                  async () => {
                    storageRef.getDownloadURL().then((urls) => {
                      setShow(false);
                      collectionRef.add({ urls, createdAt });
                      setUrls((prevState) => [...prevState, urls]);
                    });
                    const createdAt = timestamp();
                  }
                );
              },
              "image/jpeg",
              1
            );
          } catch (err) {
            console.log(err);
          } finally {
            // const fine = ctx.canvar.toBlob();
          }
        };

        newImage.onerror = (e) => {
          // setinvalidImage('Invalid image content.');
          console.log("image error");
          console.log(e);
          return false;
        };
      };
    }

    Promise.all(promises)
      .then(() => {
        console.log("All images uploaded");
        console.log(urls);
      })
      .catch((err) => console.log(err));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    // e.target.reset();
    setLoad(true);
    if (!fData.pImage) {
      setFdata({ ...fData, error: "Please upload at least 2 image" });
      setTimeout(() => {
        setFdata({ ...fData, error: false });
      }, 2000);
    }

    console.log(fData.pImage);
    console.log(urls);
    try {
      let responseData = await createProduct(fData, urls);
      if (responseData.success) {
        fetchData();
        setFdata({
          ...fData,
          pName: "",
          pDescription: "",
          pImage: "",
          pStatus: "Active",
          pCategory: "",
          pPrice: "",
          pQuantity: "",
          pOffer: 0,
          success: responseData.success,
          error: false,
        });
        setUrls([]);
        setTimeout(() => {
          setFdata({
            ...fData,
            pName: "",
            pDescription: "",
            pImage: "",
            pStatus: "Active",
            pCategory: "",
            pPrice: "",
            pQuantity: "",
            pOffer: 0,
            success: false,
            error: false,
          });
          setUrls([]);
        }, 2000);
      } else if (responseData.error) {
        setFdata({ ...fData, success: false, error: responseData.error });
        setTimeout(() => {
          return setFdata({ ...fData, error: false, success: false });
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  };

  // console.log(urls);

  return (
    <Fragment>
      {/* Black Overlay */}
      <div
        onClick={(e) => dispatch({ type: "addProductModal", payload: false })}
        className={`${
          data.addProductModal ? "" : "hidden"
        } fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50`}
      />
      {/* End Black Overlay */}

      {/* Modal Start */}
      <div
        className={`${
          data.addProductModal ? "" : "hidden"
        } fixed inset-0 flex items-center z-30 justify-center overflow-auto`}
      >
        <div className="mt-32 md:mt-0 relative bg-white w-11/12 md:w-3/6 shadow-lg flex flex-col items-center space-y-4 px-4 py-4 md:px-8">
          <div className="flex items-center justify-between w-full pt-4">
            <span className="text-left font-semibold text-2xl tracking-wider">
              Add Product
            </span>
            {/* Close Modal */}
            <span
              style={{ background: "#303031" }}
              onClick={(e) =>
                dispatch({ type: "addProductModal", payload: false })
              }
              className="cursor-pointer text-gray-100 py-2 px-2 rounded-full"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
          {fData.error ? alert(fData.error, "red") : ""}
          {fData.success ? alert(fData.success, "green") : ""}
          <form className="w-full" onSubmit={(e) => submitForm(e)}>
            <div className="flex space-x-1 py-4">
              <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                <label htmlFor="name">Product Name *</label>
                <input
                  value={fData.pName}
                  onChange={(e) => {
                    setFdata({
                      ...fData,
                      error: false,
                      success: false,
                      pName: e.target.value,
                    });
                  }}
                  className="px-4 py-2 border focus:outline-none"
                  type="text"
                />
              </div>
              <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                <label htmlFor="price">Product Price *</label>
                <input
                  value={fData.pPrice}
                  onChange={(e) =>
                    setFdata({
                      ...fData,
                      error: false,
                      success: false,
                      pPrice: e.target.value,
                    })
                  }
                  type="number"
                  className="px-4 py-2 border focus:outline-none"
                  id="price"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="description">Product Description *</label>
              <textarea
                value={fData.pDescription}
                onChange={(e) =>
                  setFdata({
                    ...fData,
                    error: false,
                    success: false,
                    pDescription: e.target.value,
                  })
                }
                className="px-4 py-2 border focus:outline-none"
                name="description"
                id="description"
                cols={5}
                rows={2}
              />
            </div>
            {/* Most Important part for uploading multiple image */}
            <div className="flex flex-col mt-4">
              <label htmlFor="image">Product Images *</label>
              <span className="text-gray-600 text-xs">
                You can select more than one images
              </span>
              <input
                onChange={(e) => {
                  onChangeImage(e);
                  setFdata({
                    ...fData,
                    error: false,
                    success: false,
                    pImage: [...e.target.files],
                  });
                }}
                type="file"
                accept=".jpg, .jpeg, .png"
                className="px-4 py-2 border focus:outline-none"
                id="image"
                multiple
              />
            </div>

            {show ? <LinearProgress /> : ""}

            {/* Most Important part for uploading multiple image */}
            <div className="flex space-x-1 py-4">
              <div className="w-1/2 flex flex-col space-y-1">
                <label htmlFor="status">Product Status *</label>
                <select
                  value={fData.pStatus}
                  onChange={(e) =>
                    setFdata({
                      ...fData,
                      error: false,
                      success: false,
                      pStatus: e.target.value,
                    })
                  }
                  name="status"
                  className="px-4 py-2 border focus:outline-none"
                  id="status"
                >
                  <option name="status" value="Active">
                    Active
                  </option>
                  <option name="status" value="Disabled">
                    Disabled
                  </option>
                </select>
              </div>
              <div className="w-1/2 flex flex-col space-y-1">
                <label htmlFor="status">Product Category *</label>
                <select
                  value={fData.pCategory}
                  onChange={(e) =>
                    setFdata({
                      ...fData,
                      error: false,
                      success: false,
                      pCategory: e.target.value,
                    })
                  }
                  name="status"
                  className="px-4 py-2 border focus:outline-none"
                  id="status"
                >
                  <option disabled value="">
                    Select a category
                  </option>
                  {categories.length > 0
                    ? categories.map(function (elem) {
                        return (
                          <option name="status" value={elem._id} key={elem._id}>
                            {elem.cName}
                          </option>
                        );
                      })
                    : ""}
                </select>
              </div>
            </div>
            <div className="flex space-x-1 py-4">
              <div className="w-1/2 flex flex-col space-y-1">
                <label htmlFor="quantity">Product in Stock *</label>
                <input
                  value={fData.pQuantity}
                  onChange={(e) =>
                    setFdata({
                      ...fData,
                      error: false,
                      success: false,
                      pQuantity: e.target.value,
                    })
                  }
                  type="number"
                  className="px-4 py-2 border focus:outline-none"
                  id="quantity"
                />
              </div>
              <div className="w-1/2 flex flex-col space-y-1">
                <label htmlFor="status">Shipment availability *</label>
                <select
                  value={fData.pWorldWide}
                  onChange={(e) =>
                    setFdata({
                      ...fData,
                      error: false,
                      success: false,
                      pWorldWide: e.target.value,
                    })
                  }
                  name="shipment"
                  className="px-4 py-2 border focus:outline-none"
                  id="status"
                >
                  <option name="shipment" value={true}>
                    All countries
                  </option>
                  <option name="shipment" value={false}>
                    Only in ethiopia
                  </option>
                </select>
              </div>
            </div>
            <div className="flex flex-col space-y-1 w-full pb-4 md:pb-6 mt-4">
              <button
                style={{ background: "#303031" }}
                type="submit"
                className="rounded-full bg-gray-800 text-gray-100 text-lg font-medium py-2"
                disabled={urls.length === 0 ? true : false}
              >
                Create product
              </button>
              {load ? (
                <div className="flex flex-row justify-center">
                  <CircularProgress />
                </div>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

const AddProductModal = (props) => {
  useEffect(() => {
    fetchCategoryData();
  }, []);

  const [allCat, setAllCat] = useState({});

  const fetchCategoryData = async () => {
    let responseData = await getAllCategory();
    if (responseData.Categories) {
      setAllCat(responseData.Categories);
    }
  };

  return (
    <Fragment>
      <AddProductDetail categories={allCat} />
    </Fragment>
  );
};

export default AddProductModal;
