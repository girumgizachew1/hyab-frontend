import React, { Fragment, useEffect, useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { logout, fetchData } from "./Action";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { LayoutContext } from "../index";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { isAdmin } from "../auth/fetchApi";
import LoginIcon from "@mui/icons-material/Login";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import axios from "axios";
// import { fetchData } from "../dashboardUser/Action";
import { DashboardUserContext } from "../dashboardUser/Layout";
const apiURL = process.env.REACT_APP_API_URL;

const Navber = (props) => {
  const history = useHistory();
  const location = useLocation();

  const { data, dispatch } = useContext(LayoutContext);
  // console.log(data.loginSignupModal);

  // const userDetails = Emaildata.userDetails !== null ? Emaildata.userDetails : "";
  // console.log(Emaildata);

  const [email, setEmail] = useState("");

  const navberToggleOpen = () =>
    data.navberHamburger
      ? dispatch({ type: "hamburgerToggle", payload: false })
      : dispatch({ type: "hamburgerToggle", payload: true });

  const loginModalOpen = () => {
    console.log("inside login modal");
    data.loginSignupModal
      ? dispatch({ type: "loginSignupModalToggle", payload: false })
      : dispatch({ type: "loginSignupModalToggle", payload: true });
  };

  const cartModalOpen = () =>
    data.cartModal
      ? dispatch({ type: "cartModalToggle", payload: false })
      : dispatch({ type: "cartModalToggle", payload: true });
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 200 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
    // setEmail(userDetails.email);
  }, [top]);

  useEffect(() => {
    fetchEmail();
  }, []);

  const fetchEmail = async () => {
    // dispatch({ type: "loading", payload: true });
    let userId = JSON.parse(localStorage.getItem("jwt"));
    try {
      let res = await fetchData(dispatch);
      setEmail(res.email);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div
        className={`inset-0 fixed w-full h-16 z-30  transition duration-300 display ease-in-out  ${
          !top
            ? " bg-red-400 backdrop-blur-sm shadow-lg"
            : "bg-red-500 bg-opacity-75"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="px-3 col-span-2 lg:hidden flex flex-row-reverse justify-between z-10">
              <div className="flex flex-row-reverse space-x-4">
                <svg
                  onClick={(e) => navberToggleOpen()}
                  className="col-span-1 lg:hidden w-8 h-8 cursor-pointer text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Cart Modal Button */}
                <div
                  onClick={(e) => history.push("/")}
                  style={{ letterSpacing: "0.10rem" }}
                  className="flex items-left text-left font-bold uppercase text-gray-800 text-2xl cursor-pointer px-2"
                >
                  <span className="text-white">Hyab</span>
                  <span className="text-green-600">Market</span>
                </div>
              </div>

              <div
                onClick={(e) => history.push("/")}
                style={{ letterSpacing: "0.70rem" }}
                className="hidden lg:flex lg:flex-row py-3 col-span-1 items-left text-left font-bold uppercase text-gray-800 text-2xl cursor-pointer px-2"
              >
                <span className="text-white">Hyab</span>
                <span className="text-green-600">Market</span>
              </div>

              <div className="hidden lg:flex lg:flex-row lg:space-x-3 lg:justify-center col-span-1  text-white py-4 w-full ">
                <span
                  className="hover:text-gray-100 px-1 rounded-lg font-light tracking-widest  cursor-pointer"
                  onClick={(e) => history.push("/")}
                >
                  Gift Shop
                </span>
                <span
                  className="hover:text-gray-100 px-1 rounded-lg font-light tracking-widest cursor-pointer"
                  onClick={(e) => history.push("/blog")}
                >
                  How to order
                </span>
                <span
                  className="hover:text-gray-100 px-1 rounded-lg font-light tracking-widest cursor-pointer"
                  onClick={(e) => history.push("/contact-us")}
                >
                  Contact us
                </span>
              </div>

              <div className=" flex flex-col justify-center">
                <div className="flex space-x-4 items-right -ml-4 col-span-2 lg:col-span-1 lg:mr-4 flex justify-end">
                  {/*  WishList Page Button */}
                  <div
                    onClick={(e) => history.push("/wish-list")}
                    className="hover:text-gray-100 rounded-lg px-2 py-2 cursor-pointer hidden lg:flex"
                    title="Wishlist"
                  >
                    <FavoriteBorderIcon
                      className={`${
                        location.pathname === "/wish-list"
                          ? "fill-current text-black"
                          : ""
                      } w-8 h-8 text-white cursor-pointer`}
                    />
                  </div>
                  {/* Cart Modal Button */}
                  <div
                    onClick={(e) => cartModalOpen()}
                    className="text-white hover:text-gray-100 px-2 py-2 rounded-lg relative cursor-pointer hidden lg:flex"
                    title="Cart"
                  >
                    <AddShoppingCartIcon></AddShoppingCartIcon>
                    <span className="absolute top-0 mt-1 mr-4 bg-red-700 rounded px-1 text-white text-xs hover:text-gray-200 font-semibold">
                      {data.cartProduct !== null ? data.cartProduct.length : 0}
                    </span>
                  </div>

                  {localStorage.getItem("jwt") ? (
                    <div class="flex items-center justify-center mt-0 hidden lg:flex ">
                      <div class=" relative inline-block text-left dropdown">
                        <span class="rounded-md shadow-sm">
                          <button
                            class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-inherit border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                            type="button"
                            aria-haspopup="true"
                            aria-expanded="true"
                            aria-controls="headlessui-menu-items-117"
                          >
                            <span>
                              <ManageAccountsIcon />
                            </span>
                            <svg
                              class="w-5 h-5 ml-2 -mr-1"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </span>
                        <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                          <div
                            class="absolute right-0 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                            aria-labelledby="headlessui-menu-button-1"
                            id="headlessui-menu-items-117"
                            role="menu"
                          >
                            <div class="px-4 py-3">
                              <p class="text-sm leading-5">Signed in as</p>
                              <p class="text-sm font-medium leading-5 text-gray-900 truncate">
                                {email}
                              </p>
                            </div>

                            {!isAdmin() ? (
                              <div class="py-1">
                                <a
                                  onClick={(e) => history.push("/user/orders")}
                                  tabindex="0"
                                  className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-200"
                                  role="menuitem"
                                >
                                  My Orders
                                </a>
                                <a
                                  onClick={(e) => history.push("/user/profile")}
                                  tabindex="1"
                                  className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-200"
                                  role="menuitem"
                                >
                                  My Account
                                </a>
                                <a
                                  onClick={(e) => history.push("/wish-list")}
                                  tabindex="1"
                                  className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-200"
                                  role="menuitem"
                                >
                                  My Wishlist
                                </a>

                                <a
                                  onClick={(e) => history.push("/user/setting")}
                                  tabindex="2"
                                  className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-200"
                                  role="menuitem"
                                >
                                  Setting
                                </a>
                              </div>
                            ) : (
                              <div class="py-1">
                                <a
                                  onClick={(e) =>
                                    history.push("/admin/dashboard")
                                  }
                                  tabindex="2"
                                  className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-200"
                                  role="menuitem"
                                >
                                  Admin Panel
                                </a>
                              </div>
                            )}

                            <div class="py-1">
                              <a
                                onClick={(e) => logout()}
                                tabindex="3"
                                className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-200"
                                role="menuitem"
                              >
                                Sign out
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Login Modal Button */
                    <div
                      onClick={(e) => loginModalOpen()}
                      className="cursor-pointer hover:bg-green-400 px-2 py-2 rounded-lg hidden lg:flex "
                      title="Login"
                    >
                      <LoginIcon className="text-black" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div
              className={
                data.navberHamburger && data.navberHamburger
                  ? "flex lg:hidden transition-all ease-out duration-500 md:transition-none md:w-auto md:flex-grow md:flex md:items-center mt-2"
                  : "flex lg:hidden  transition-all ease-out duration-500 md:transition-none md:w-auto md:flex-grow md:flex md:items-center -mt-64"
              }
            >
              <div className="w-full  col-span-1 flex flex-col text-sm text-gray-800 bg-white shadow-sm shadow-green-100 rounded-b-sm opacity-85 space-y-3">
                <span
                  className="flex space-x-2 py-2 px-8 hover:bg-green-200 cursor-pointer text-gray-800 text-sm"
                  onClick={(e) => history.push("/blog")}
                >
                  How to Order
                </span>
              </div>
            </div>

            <div className="hidden lg:flex lg:flex-row lg:space-x-3 lg:justify-center col-span-1  text-white py-4 w-full ">
              <span
                className="hover:text-gray-100 px-1 rounded-lg font-light tracking-widest  cursor-pointer"
                onClick={(e) => history.push("/aboutus")}
              >
                About us
              </span>
              <span
                className="hover:text-gray-100 px-1 rounded-lg font-light tracking-widest cursor-pointer"
                onClick={(e) => history.push("/howtoorder")}
              >
                how to Order
              </span>
              <span
                className="hover:text-gray-100 px-1 rounded-lg font-light tracking-widest cursor-pointer"
                onClick={(e) => history.push("/contactus")}
              >
                Contact us
              </span>
            </div>

            <div className=" flex flex-col justify-center">
              <div className="flex space-x-4 items-right -ml-4 col-span-2 lg:col-span-1 lg:mr-4 flex justify-end">
                {/*  WishList Page Button */}
                <div
                  onClick={(e) => history.push("/wish-list")}
                  className="hover:text-gray-100 rounded-lg px-2 py-2 cursor-pointer hidden lg:flex"
                  title="Wishlist"
                >
                  {/* <span> */}
                  Contact us
                  {/* </span> */}
                  {localStorage.getItem("jwt") ? (
                    <Fragment>
                      <li className="flex flex-col text-gray-800 text-sm w-full shadow-lg space-y-3">
                        <span
                          onClick={(e) => history.push("/user/orders")}
                          className="flex space-x-2 py-2 px-8 hover:bg-green-200 cursor-pointer"
                        >
                          <span></span>
                          <span>My Orders</span>
                        </span>

                        <span
                          onClick={(e) => history.push("/wish-list")}
                          className="flex space-x-2 py-2 px-8 hover:bg-green-200 cursor-pointer"
                        >
                          <span></span>
                          <span>My Wishlist</span>
                        </span>
                        <span
                          onClick={(e) => history.push("/user/setting")}
                          className="flex space-x-1 py-2 px-8 hover:bg-green-200 cursor-pointer"
                        >
                          <div class="px-4 py-3">
                            <p class="text-sm leading-5">signed in as</p>
                            <p class="text-sm font-medium leading-5 text-gray-900 truncate">
                              {email}
                            </p>
                          </div>

                          {!isAdmin() ? (
                            <div class="py-1">
                              <a
                                onClick={(e) => history.push("/user/orders")}
                                tabindex="0"
                                className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-200"
                                role="menuitem"
                              >
                                My Orders
                              </a>
                              <a
                                onClick={(e) => history.push("/user/profile")}
                                tabindex="1"
                                className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-200"
                                role="menuitem"
                              >
                                My Account
                              </a>
                              <a
                                onClick={(e) => history.push("/wish-list")}
                                tabindex="1"
                                className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-200"
                                role="menuitem"
                              >
                                My Wishlist
                              </a>

                              <a
                                onClick={(e) => history.push("/user/setting")}
                                tabindex="2"
                                className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-200"
                                role="menuitem"
                              >
                                Setting
                              </a>
                            </div>
                          ) : (
                            <div class="py-1">
                              <a
                                onClick={(e) =>
                                  history.push("/admin/dashboard")
                                }
                                tabindex="2"
                                className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-200"
                                role="menuitem"
                              >
                                Admin Panel
                              </a>
                            </div>
                          )}

                          <div class="py-1">
                            <a
                              onClick={(e) => logout()}
                              tabindex="3"
                              className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-200"
                              role="menuitem"
                            >
                              Sign out
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Login Modal Button */
                  <div
                    onClick={(e) => loginModalOpen()}
                    className="cursor-pointer hover:bg-green-400 px-2 py-2 rounded-lg hidden lg:flex "
                    title="Login"
                  >
                    <LoginIcon className="text-black" />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div
            className={
              data.navberHamburger && data.navberHamburger
                ? "flex lg:hidden transition-all ease-out duration-500 md:transition-none md:w-auto md:flex-grow md:flex md:items-center mt-2"
                : "flex lg:hidden  transition-all ease-out duration-500 md:transition-none md:w-auto md:flex-grow md:flex md:items-center -mt-64"
            }
          >
            <div className="w-full  col-span-1 flex flex-col text-sm text-gray-800 bg-white shadow-sm shadow-green-100 rounded-b-sm opacity-85 space-y-3">
              <span
                className="flex space-x-2 py-2 px-8 hover:bg-green-200 cursor-pointer text-gray-800 text-sm"
                onClick={(e) => history.push("/blog")}
              >
                How to Order
              </span>
              <span
                className="flex space-x-2 py-2 px-8 hover:bg-green-200 cursor-pointer text-gray-800 text-sm"
                onClick={(e) => history.push("/contact-us")}
              >
                Contact us
              </span>
              {localStorage.getItem("jwt") ? (
                <Fragment>
                  <li className="flex flex-col text-gray-800 text-sm w-full shadow-lg space-y-3">
                    <span
                      onClick={(e) => history.push("/user/orders")}
                      className="flex space-x-2 py-2 px-8 hover:bg-green-200 cursor-pointer"
                    >
                      <span></span>
                      <span>My Orders</span>
                    </span>

                    <span
                      onClick={(e) => history.push("/wish-list")}
                      className="flex space-x-2 py-2 px-8 hover:bg-green-200 cursor-pointer"
                    >
                      <span></span>
                      <span>My Wishlist</span>
                    </span>
                    <span
                      onClick={(e) => history.push("/user/setting")}
                      className="flex space-x-1 py-2 px-8 hover:bg-green-200 cursor-pointer"
                    >
                      <span></span>
                      <span>Setting</span>
                    </span>
                    <span
                      onClick={(e) => logout()}
                      className="flex space-x-2 py-2 px-8 hover:bg-green-200 cursor-pointer"
                    >
                      <span className="font-medium tracking-widest text-base hover:text-gray-100  px-3 py-2 rounded-lg cursor-pointer ">
                        login
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`.dropdown:focus-within .dropdown-menu {
            opacity:1;
            transform: translate(0) scale(1);
            visibility: visible;
          }`}
      </style>
    </Fragment>
  );
};

export default Navber;
