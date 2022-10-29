import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { home, ProductDetails, AdminProtectedRoute } from "./shop/";
import {
  DashboardAdmin,
  Categories,
  Products,
  Orders,
  Customers,
} from "./admin";

/* Routing All page will be here */
const Routes = (props) => {
  return (
    <Router>
      <Switch>
        {/* Shop & Public Routes */}
        <Route exact path="/" component={home} />

        {/* <Route exact path="/wish-list" component={WishList} /> */}
        <Route exact path="/products/:id" component={ProductDetails} />
        {/* <Route
          exact
          path="/products/category/:catId"
          component={ProductByCategory}
        /> */}

        {/* <Route exact path="/api/:id/verify/:token"
         component={VerifyEmail} />
        <Route exact path="/password-reset/:id/:token" component={PasswordReset} /> */}

        {/* <CartProtectedRoute
          exact={true}
          path="/checkout"
          component={CheckoutPage}
        /> */}

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
        {/* <ProtectedRoute
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
        /> */}
        {/* User Dashboard End */}

        {/* 404 Page */}
        {/* <Route component={PageNotFound} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;