import React, { Fragment, useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { LayoutContext } from "../layout";
import { subTotal, quantity, totalCost } from "../partials/Mixins";

import { cartListProduct } from "../partials/FetchApi";
import { getBrainTreeToken, getPaymentProcess } from "./FetchApi";
import { fetchData, fetchbrainTree, pay } from "./Action";
import { Select, option, MenuItem } from "@mui/material";
import DropIn from "braintree-web-drop-in-react";

const apiURL = process.env.REACT_APP_API_URL;

export const CheckoutComponent = (props) => {
  const history = useHistory();
  const { data, dispatch } = useContext(LayoutContext);

  const [state, setState] = useState({
    // Street Address: "",
    first_name: "",
    last_name: "",
    phone: "",
    address: "",
    postCode: "",
    country: "",
    city: "",
    occasion: "",
    error: false,
    success: false,
    clientToken: null,
    instance: {},
  });
  const country_list = [
    "Algeria",
    "Angola",
    "Argentina",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Belarus",
    "Belgium",
    "Botswana",
    "Brazil",
    "China",
    "Congo",
    "Denmark",
    "Djibouti",
    "Egypt",
    "Ethiopia",
    "France",
    "Georgia",
    "Germany",
    "India",
    "Israel",
    "Italy",
    "Japan",
    "Jordan",
    "Kenya",
    "Kuwait",
    "Mexico",
    "Monaco",
    "Morocco",
    "Netherlands",
    "Niger",
    "Nigeria",
    "Norway",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saudi Arabia",
    "Senegal",
    "South Africa",
    "South Korea",
    "Spain",
    "Sudan",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Thailand",
    "Togo",
    "Tunisia",
    "Turkey",
    "Uganda",
    "United Arab Emirates",
    "United Kingdom",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const cData = [
    { text: "Atlanta", group: "US", value: "atl" },
    { text: "Boston", group: "US", value: "bos" },
    { text: "Bath", group: "UK", value: "bat" },
    { text: "Bristol", group: "UK", value: "bri" },
  ];

  const occastion_list = [
    "Birthday",
    "New Years",
    "Graduation",
    "New Born Baby",
    "Baby Shower",
    "Aniversity",
    "Other",
  ];

  useEffect(() => {
    fetchData(cartListProduct, dispatch);
    fetchbrainTree(getBrainTreeToken, setState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <section className="mx-4 mt-20 md:mx-12 md:mt-32 lg:mt-24">
        {/* Product List */}
        <div className="flex flex-col md:flex md:space-x-2 md:flex-col md:w-5/6 md:m-auto">
          <div className="md:w-full m-auto">
            
          <div>
          <div className="py-4 text-center">
              <h3 className="text-2xl font-bold text-gray-800">Step 1: confirm your order</h3>
              <p className="text-gray-600 pt-4">"Please review the items in your cart and make sure everything is correct before proceeding to checkout. Once you confirm your order, you will not be able to make any changes. 
              Click the "Confirm Order" button to complete your purchase."</p>
          </div>
          </div>




            <CheckoutProducts products={data.cartProduct} />
          </div>

          <div className="w-full order-first md:order-last">
            <div>
          <div className="py-4 text-center">
              <h3 className="text-2xl font-bold text-gray-800">Step 2: Enter Your Shipping Address</h3>
              <p className="text-gray-600 pt-4">"Before we can process your order, we need to know where to send it. Please enter the address where you would like your order to be shipped. Be sure to double check that you have entered all of the necessary information, such as your name, street address, apartment or suite number (if applicable), city, state, and zip code. It's important to make sure that all of this information is correct, as we want to ensure that your order is delivered to the correct location. When you're ready, click the "Continue to Payment" button to proceed to the next step."</p>
          </div>
          </div>
            {state.clientToken !== null ? (
              <Fragment>
                <div
                  onBlur={(e) => setState({ ...state, error: false })}
                  className="px-4 py-1 md:p-8"
                >
                  {state.error ? (
                    <div className="bg-red-200 py-2 px-4 rounded">
                      {state.error}
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="flex flex-row space-x-5 w-full">
                    <div className="flex flex-col space-y-5 w-1/2">
                      <div className="flex flex-col py-2 w-full">
                        <label htmlFor="first_name" className="pb-2">
                          First Name
                        </label>
                        <input
                          value={state.first_name}
                          onChange={(e) =>
                            setState({
                              ...state,
                              first_name: e.target.value,
                              error: false,
                            })
                          }
                          type="text"
                          id="first_name"
                          className="border px-4 py-2"
                          placeholder="First Name..."
                        />
                      </div>

                      <div className="flex flex-col py-2 w-full">
                        <label htmlFor="country" className="pb-2">
                          Country
                        </label>
                        <select
                          value={state.country}
                          className="px-4 py-2 border focus:outline-none"
                          onChange={(e) =>
                            setState({
                              ...state,
                              country: e.target.value,
                              error: false,
                            })
                          }
                          // defaultValue="Ethiopia"
                          name="country"
                          id="country"
                        >
                          {country_list?.map((country) => {
                            return (
                              <option
                                name="country"
                                // className=" py-0"
                                value={country}
                                key={country}
                              >
                                {country}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div className="flex flex-col py-2 w-full">
                        <label htmlFor="occasion" className="pb-2">
                          Occasion
                        </label>
                        <select
                          value={state.occasion}
                          className="px-4 py-2 border focus:outline-none"
                          onChange={(e) =>
                            setState({
                              ...state,
                              occasion: e.target.value,
                              error: false,
                            })
                          }
                        >
                          <option value={null}>Select an occastion</option>
                          {occastion_list?.map((occastion) => {
                            return (
                              <option value={occastion} key={occastion}>
                                {occastion}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div className="flex flex-col py-2 mb-2 w-full">
                        <label htmlFor="phone" className="pb-2">
                          Reciver Phone Number
                        </label>
                        <input
                          value={state.phone}
                          onChange={(e) =>
                            setState({
                              ...state,
                              phone: e.target.value,
                              error: false,
                            })
                          }
                          type="number"
                          id="phone"
                          className="border px-4 py-2"
                          placeholder="+880"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col space-y-5 w-1/2">
                      <div className="flex flex-col py-2 w-full">
                        <label htmlFor="last_name" className="pb-2">
                          Last Name
                        </label>
                        <input
                          value={state.last_name}
                          onChange={(e) =>
                            setState({
                              ...state,
                              last_name: e.target.value,
                              error: false,
                            })
                          }
                          type="text"
                          id="last_name"
                          className="border px-4 py-2"
                          placeholder="Last Name..."
                        />
                      </div>

                      <div className="flex flex-col py-2 w-full">
                        <label htmlFor="city" className="pb-2">
                          City / Town
                        </label>
                        <input
                          value={state.city}
                          onChange={(e) =>
                            setState({
                              ...state,
                              city: e.target.value,
                              error: false,
                            })
                          }
                          type="text"
                          id="city"
                          className="border px-4 py-2"
                          placeholder="City..."
                        />
                      </div>

                      <div className="flex flex-col py-2 w-full ">
                        <label htmlFor="address" className="pb-2">
                          Street Address
                        </label>
                        <input
                          value={state.address}
                          onChange={(e) =>
                            setState({
                              ...state,
                              address: e.target.value,
                              error: false,
                            })
                          }
                          type="text"
                          id="address"
                          className="border px-4 py-2"
                          placeholder="Address..."
                        />
                      </div>

                      <div className="flex flex-col py-2 w-full">
                        <label htmlFor="code" className="pb-2">
                          Post code
                        </label>
                        <input
                          value={state.postCode}
                          onChange={(e) =>
                            setState({
                              ...state,
                              postCode: e.target.value,
                              error: false,
                            })
                          }
                          type="text"
                          id="code"
                          className="border px-4 py-2"
                          placeholder="Post code..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <div className=" col-span-2 md:col-span-3 lg:col-span-4 flex items-center justify-center py-24">
                  <div className="w-16 h-16 border border-yellow-600 border-solid rounded-full border-t-4  animate-spin">
     
                  </div>
              </div>
            )}
          </div>

          <div className="md:w-full m-auto pb-10 md:order-last">
            <div>
          <div className="py-4 text-center">
              <h3 className="text-2xl font-bold text-gray-800">Step 3: Make A payment</h3>
              <p className="text-gray-600 pt-4">"It's time to complete your purchase! Please choose how you would like to pay for your order. We accept payments through PayPal and Mastercard. If you choose to pay with PayPal, you will be redirected to the PayPal website to complete the payment. If you choose to pay with a Mastercard, please enter your card information in the form provided. Please double check that all of the information you enter is correct, as we want to make sure that your payment is processed smoothly. When you're ready, click the "Pay Now" button to finish your order. Thank you for shopping with us!."</p>
          </div>
          </div>
            <DropIn
              options={{
                authorization: state.clientToken,
                paypal: {
                  flow: "vault",
                },
              }}
              onInstance={(instance) => (state.instance = instance)}
            />
            <div
              onClick={(e) =>
                // {
                //   console.log(state);
                //   console.log(state.country);
                // }
                pay(
                  data,
                  dispatch,
                  state,
                  setState,
                  getPaymentProcess,
                  totalCost,
                  history
                )
              }
              className="w-full px-4 py-2 text-center text-white font-semibold cursor-pointer"
              style={{ background: "#303031" }}
            >
              Pay now
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

const CheckoutProducts = ({ products }) => {
  const history = useHistory();

  return (
    <Fragment>
      <div className="grid grid-cols-2 md:grid-cols-1">
        {products !== null && products.length > 0 ? (
          products.map((product, index) => {
            return (
              <div
                key={index}
                className="col-span-1 m-2 md:py-6 md:border-t md:border-b md:my-2 md:mx-0 md:flex md:items-center md:justify-between"
              >
                <div className="md:flex md:flex-row md:w-full md:justify-between md:space-x-4">
                  <img
                    onClick={(e) => history.push(`/products/${product._id}`)}
                    className="cursor-pointer md:h-20 md:w-20 object-cover object-center"
                    src={product.pImageUrl[0]}
                    alt="wishListproduct"
                  />
                  <div className="text-lg md:ml-6 truncate md:flex md:flex-col md:justify-center">
                    {product.pName}
                  </div>
                  <div className="md:ml-6 font-semibold text-gray-600 text-sm md:flex md:flex-col md:justify-center">
                    Price : ${product.pPrice}.00{" "}
                  </div>
                  <div className="md:ml-6 font-semibold text-gray-600 text-sm md:flex md:flex-col md:justify-center">
                    Quantitiy : {quantity(product._id)}
                  </div>
                  <div className="font-semibold text-gray-600 text-sm md:flex md:flex-col md:justify-center">
                    Subtotal : ${subTotal(product._id, product.pPrice)}.00
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>No product found for checkout</div>
        )}
      </div>
    </Fragment>
  );
};

export default CheckoutProducts;
