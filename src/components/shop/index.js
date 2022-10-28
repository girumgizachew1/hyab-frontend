import { layoutState, layoutReducer } from "./layout/layoutContext";
import { LayoutContext } from "./layout";
import home from "./home";
import ProductDetails from "./productDetails";
import ProtectedRoute from "./auth/ProtectedRoute";
import VerifyEmail from "./auth/verifyEmail";
import PasswordReset from "./auth/PasswordReset";
import AdminProtectedRoute from "./auth/AdminProtectedRoute";
import CartProtectedRoute from "./auth/CartProtectedRoute";

export {
  LayoutContext,
  layoutState,
  layoutReducer,
  home,
  ProductDetails,
  CartProtectedRoute,
  AdminProtectedRoute,
  PasswordReset,
  VerifyEmail,
  ProtectedRoute,
};
