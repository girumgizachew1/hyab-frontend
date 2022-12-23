import React, { Fragment, useEffect, useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { logout } from "./Action";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { LayoutContext } from "../index";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { isAdmin } from "../auth/fetchApi";
import LoginIcon from "@mui/icons-material/Login";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const Navber = (props) => {
  const history = useHistory();
  const location = useLocation();

  const { data, dispatch } = useContext(LayoutContext);

  const navberToggleOpen = () =>
    data.navberHamburger
      ? dispatch({ type: "hamburgerToggle", payload: false })
      : dispatch({ type: "hamburgerToggle", payload: true });

  const loginModalOpen = () =>
    data.loginSignupModal
      ? dispatch({ type: "loginSignupModalToggle", payload: false })
      : dispatch({ type: "loginSignupModalToggle", payload: true });

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
  }, [top]);

  return (
    <Fragment>
      <div
        className={`inset-0 fixed w-full h-16 z-30  transition duration-300 display ease-in-out  ${
          !top
            ? " bg-yellow-500 backdrop-blur-sm shadow-lg"
            : "bg-yellow-500 backdrop-blur-sm shadow-lg"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="px-3 col-span-2 lg:hidden flex flex-row-reverse justify-between z-10">
              <div className="flex flex-row-reverse space-x-4">
                <svg
                  onClick={(e) => navberToggleOpen()}
                  className="col-span-1 lg:hidden w-8 h-8 cursor-pointer text-orange-600"
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
                  onClick={(e) => cartModalOpen()}
                  className="col-span-1 lg:hidden w-8 h-8 cursor-pointer text-red-600"
                  title="Cart"
                >
                  <AddShoppingCartIcon></AddShoppingCartIcon>

                  <span className="absolute top-0 mt-1 mr-4 bg-red-700 rounded px-1 text-white text-xs hover:text-gray-200 font-semibold">
                    {data.cartProduct !== null ? data.cartProduct.length : 0}
                  </span>
                </div>
              </div>

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
                          <svg
                            className="cursor-pointer w-8 h-8 text-gray-600 hover:text-gray-800"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                      </span>
                      <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                        <div
                          class="absolute right-0 w-40 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                          aria-labelledby="headlessui-menu-button-1"
                          id="headlessui-menu-items-117"
                          role="menu"
                        >
                          {!isAdmin() ? (
                            <>
                              <div class="py-1">
                                <a
                                  onClick={(e) => history.push("/user/orders")}
                                  tabindex="0"
                                  className="text-gray-700 flex justify-left space-x-5 w-full px-4 py-1 text-sm leading-5 text-left hover:bg-gray-200"
                                  role="menuitem"
                                >
                                  <span>
                                    <ListAltIcon />
                                  </span>
                                  <span>My Orders</span>
                                </a>
                              </div>
                              <div class="py-1">
                                <a
                                  onClick={(e) => history.push("/user/profile")}
                                  tabindex="0"
                                  className="text-gray-700 flex justify-left space-x-5 w-full px-4 py-1 text-sm leading-5 text-left hover:bg-gray-200"
                                  role="menuitem"
                                >
                                  <span>
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
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                      />
                                    </svg>
                                  </span>
                                  <span>My Account</span>
                                </a>
                              </div>
                              <div class="py-1">
                                <a
                                  onClick={(e) => history.push("/wish-list")}
                                  tabindex="0"
                                  className="text-gray-700 flex justify-left space-x-5 w-full px-4 py-1 text-sm leading-5 text-left hover:bg-gray-200"
                                  role="menuitem"
                                >
                                  <span>
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
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                      />
                                    </svg>
                                  </span>
                                  <span>My Wishlist</span>
                                </a>
                              </div>
                              <div class="py-1">
                                <a
                                  onClick={(e) => history.push("/user/setting")}
                                  tabindex="0"
                                  className="text-gray-700 flex justify-left space-x-5 w-full px-4 py-1 text-sm leading-5 text-left hover:bg-gray-200"
                                  role="menuitem"
                                >
                                  <span>
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
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                      />
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                      />
                                    </svg>
                                  </span>
                                  <span>Setting</span>
                                </a>
                              </div>
                            </>
                          ) : (
                            <>
                              <div class="py-1">
                                <a
                                  onClick={(e) =>
                                    history.push("/admin/dashboard")
                                  }
                                  tabindex="0"
                                  className="text-gray-700 flex justify-left space-x-5 w-full px-4 py-1 text-sm leading-5 text-left hover:bg-gray-200"
                                  role="menuitem"
                                >
                                  <span>
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
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                      />
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                      />
                                    </svg>
                                  </span>
                                  <span>Admin Panel</span>
                                </a>
                              </div>
                            </>
                          )}

                          <div class="py-1">
                            <a
                              onClick={(e) => logout()}
                              tabindex="3"
                              className="text-gray-700 flex justify-left space-x-5 w-full px-4 py-1 text-sm leading-5 text-left hover:bg-gray-200"
                              role="menuitem"
                            >
                              <span>
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
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                  />
                                </svg>
                              </span>
                              <span>Logout</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
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

              {!isAdmin() ? (
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
                      <span></span>
                      <span>Logout</span>
                    </span>
                  </li>
                </Fragment>
              ) : (
                <div
                  onClick={(e) => loginModalOpen()}
                  className="cursor-pointer text-white hover:text-gray-100  rounded-lg"
                  title="Login"
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

//   localStorage.getItem("jwt") ? (
//                   <Fragment>
//                     <div
//                       className="userDropdownBtn hover:bg-gray-100 text-black px-2 py-2 rounded-lg hidden lg:flex relative"
//                       title="Logout"
//                     >
//                       <ManageAccountsIcon />
//                       <div className="userDropdown absolute right-0 mt-5 bg-white rounded">
//                         {!isAdmin() ? (
//                           <Fragment>

//                           </Fragment>
//                         ) : (
//                           <Fragment>
//                             <li className="flex flex-col text-blue-800 w-48 shadow-lg">
//                               <span
//                                 onClick={(e) =>
//                                   history.push("/admin/dashboard")
//                                 }
//                                 className="flex space-x-2 py-2 px-8 hover:bg-gray-100 cursor-pointer"
//                               >
//                                 <span>
//                                   <svg
//                                     className="w-6 h-6"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                   >
//                                     <path
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                       strokeWidth={2}
//                                       d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
//                                     />
//                                     <path
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                       strokeWidth={2}
//                                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                                     />
//                                   </svg>
//                                 </span>
//                                 <span>Admin Panel</span>
//                               </span>
//                               <span
//                                 onClick={(e) => logout()}
//                                 className="flex space-x-2 py-2 px-8 hover:bg-blue-600 cursor-pointer"
//                               >
//                                 <span>
//                                   <svg
//                                     className="w-6 h-6"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                   >
//                                     <path
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                       strokeWidth={2}
//                                       d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//                                     />
//                                   </svg>
//                                 </span>
//                                 <span>Logout</span>
//                               </span>
//                             </li>
//                           </Fragment>
//                         )}
//                       </div>
//                     </div>
//                   </Fragment>
//                 ) : (
//                   /* Login Modal Button */
//     <div
//                     onClick={(e) => loginModalOpen()}
//                     className="cursor-pointer hover:bg-green-400 px-2 py-2 rounded-lg hidden lg:flex "
//                     title="Login"
//                   >
//                     <LoginIcon className="text-black" />
//                   </div>
//                 )}

//    <li className="flex flex-col text-gray-800 text-sm w-48 shadow-lg">
//   <span
//     onClick={(e) => history.push("/user/orders")}
//     className="flex space-x-2 py-2 px-8 hover:bg-green-200 cursor-pointer"
//   >
//     <span>
//       <ListAltIcon />
//     </span>
//     <span>My Orders</span>
//   </span>
//   <span
//     onClick={(e) => history.push("/user/profile")}
//     className="flex space-x-2 py-2 px-8 hover:bg-green-200 cursor-pointer"
//   >
//     <span>
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//         />
//       </svg>
//     </span>
//     <span>My Account</span>
//   </span>
//   <span
//     onClick={(e) => history.push("/wish-list")}
//     className="flex space-x-2 py-2 px-8 hover:bg-green-200 cursor-pointer"
//   >
//     <span>
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//         />
//       </svg>
//     </span>
//     <span>My Wishlist</span>
//   </span>
//   <span
//     onClick={(e) => history.push("/user/setting")}
//     className="flex space-x-1 py-2 px-8 hover:bg-green-200 cursor-pointer"
//   >
//     <span>
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
//         />
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//         />
//       </svg>
//     </span>
//     <span>Setting</span>
//   </span>
//   <span
//     onClick={(e) => logout()}
//     className="flex space-x-2 py-2 px-8 hover:bg-green-200 cursor-pointer"
//   >
//     <span>
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//         />
//       </svg>
//     </span>
//     <span>Logout</span>
//   </span>
// </li>
