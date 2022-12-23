import Home from "./home";
import Aboutus from "./home/Aboutus";

import Howtoorder from "./home/howtoorder";

import Contactus from "./home/contactus";

import WishList from "./wishlist";
import ProtectedRoute from "./auth/ProtectedRoute";
import VerifyEmail from "./auth/verifyEmail";
import PasswordReset from "./auth/PasswordReset";
import AdminProtectedRoute from "./auth/AdminProtectedRoute";
import CartProtectedRoute from "./auth/CartProtectedRoute";
import { LayoutContext } from "./layout";
import { layoutState, layoutReducer } from "./layout/layoutContext";
import { isAdmin, isAuthenticate } from "./auth/fetchApi";
import PageNotFound from "./layout/PageNotFound";
import ProductDetails from "./productDetails";
import ProductByCategory from "./home/ProductByCategory";
import CheckoutPage from "./order/CheckoutPage";
import Chat from "./chat";
import Policyinfo from "./home/policy/policyinfo";
export {
  Policyinfo,
  Aboutus,
  Chat,
  Howtoorder,
  Contactus,
  Home,
  WishList,
  ProtectedRoute,
  AdminProtectedRoute,
  CartProtectedRoute,
  LayoutContext,
  layoutState,
  layoutReducer,
  isAdmin,
  isAuthenticate,
  PageNotFound,
  ProductDetails,
  ProductByCategory,
  CheckoutPage,
  VerifyEmail,
  PasswordReset,
};
