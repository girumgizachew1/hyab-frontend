import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { UserProfile, UserOrders, SettingUser } from "./shop/dashboardUser";
import {
  Policyinfo,
  Home,
  Aboutus,
  Howtoorder,
  Contactus,
  ProductDetails,
  AdminProtectedRoute,
  Chat,
} from "./shop/";
import {
  DashboardAdmin,
  Categories,
  Products,
  Orders,
  Customers,
  Chats,
} from "./admin";
import {
  WishList,
  ProtectedRoute,
  CartProtectedRoute,
  PageNotFound,
  ProductByCategory,
  CheckoutPage,
  VerifyEmail,
  PasswordReset,

} from "./shop";

/* Routing All page will be here */
const Routes = (props) => {
  return (
    <Router>
      <Switch>
        {/* Shop & Public Routes */}
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutus" component={Aboutus} />

        <Route exact path="/howtoorder" component={Howtoorder} />

        <Route exact path="/contactus" component={Contactus} />
        <Route exact path="/chat" component={Chat} />

        <Route exact path="/wish-list" component={WishList} />

        <Route exact path="/policyinfo" component={Policyinfo} />


        {/* <Route exact path="/wish-list" component={WishList} /> */}

        <Route exact path="/products/:id" component={ProductDetails} />
        <Route
          exact
          path="/products/category/:catId"
          component={ProductByCategory}
        />
        <Route exact path="/api/:id/verify/:token" component={VerifyEmail} />
        <Route
          exact
          path="/password-reset/:id/:token"
          component={PasswordReset}
        />

        <CartProtectedRoute
          exact={true}
          path="/checkout"
          component={CheckoutPage}
        />

        {/* Shop & Public Routes End */}

        {/* Admin Routes */}
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard"
          component={DashboardAdmin}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/categories"
          component={Categories}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/chats"
          component={Chats}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/products"
          component={Products}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/orders"
          component={Orders}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/customers"
          component={Customers}
        />
        {/* Admin Routes End */}

        {/* User Dashboard */}

        <ProtectedRoute
          exact={true}
          path="/user/profile"
          component={UserProfile}
        />

        <ProtectedRoute
          exact={true}
          path="/user/orders"
          component={UserOrders}
        />
        <ProtectedRoute
          exact={true}
          path="/user/setting"
          component={SettingUser}
        />

        {/* User Dashboard End */}

        {/* 404 Page */}
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
