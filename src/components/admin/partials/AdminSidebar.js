import React, { Fragment } from "react";
import { useLocation, Redirect, useHistory } from "react-router-dom";

const AdminSidebar = (props) => {
  const location = useLocation();
  const history = useHistory();
  return (
    <Fragment>
      <div
        style={{ boxShadow: "1px 1px 8px 0.2px #aaaaaa" }}
        id="sidebar"
        className="hidden md:block sticky top-0 left-0 h-screen md:w-3/12 lg:w-2/12 sidebarShadow bg-white text-gray-600"
      >
        <div
          onClick={(e) => history.push("/admin/dashboard")}
          className={`${
            location.pathname === "/admin/dashboard"
              ? "border-r-4 border-gray-800 bg-gray-100"
              : ""
          } hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center py-6`}
        >
          <span>
            <svg
              className="w-8 h-8 text-gray-600 hover:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </span>
          <span className="hover:text-gray-800">Dashboard</span>
        </div>
        <hr className="border-b border-gray-200" />
        <div
          onClick={(e) => history.push("/admin/dashboard/categories")}
          className={`${
            location.pathname === "/admin/dashboard/categories"
              ? "border-r-4 border-gray-800 bg-gray-100"
              : ""
          } hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center py-6`}
        >
          <span>
            <svg
              className="w-8 h-8 text-gray-600 hover:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </span>
          <span className="hover:text-gray-800">Categories</span>
        </div>
        <hr className="border-b border-gray-200" />
        <div
          onClick={(e) => history.push("/admin/dashboard/products")}
          className={`${
            location.pathname === "/admin/dashboard/products"
              ? "border-r-4 border-gray-800 bg-gray-100"
              : ""
          } hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center py-6`}
        >
          <span>
            <svg
              className="w-8 h-8 text-gray-600 hover:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
          </span>
          <span className="hover:text-gray-800">Product</span>
        </div>
        <hr className="border-b border-gray-200" />
        <div
          onClick={(e) => history.push("/admin/dashboard/orders")}
          className={`${
            location.pathname === "/admin/dashboard/orders"
              ? "border-r-4 border-gray-800 bg-gray-100"
              : ""
          } hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center py-6`}
        >
          <span>
            <svg
              className="w-8 h-8 text-gray-600 hover:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </span>
          <span className="hover:text-gray-800">Order</span>
        </div>
        <hr className="border-b border-gray-200" />
        <div
          onClick={(e) => history.push("/admin/dashboard/customers")}
          className={`${
            location.pathname === "/admin/dashboard/customers"
              ? "border-r-4 border-gray-800 bg-gray-100"
              : ""
          } hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center py-6`}
        >
          <span>
            <svg
              className="w-8 h-8 text-gray-600 hover:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </span>
          <span className="hover:text-gray-800">Customers</span>
        </div>
        <hr className="border-b border-gray-200" />
        <div
          onClick={(e) => history.push("/admin/dashboard/chats")}
          className={`${
            location.pathname === "/admin/dashboard/chats"
              ? "border-r-4 border-gray-800 bg-gray-100"
              : ""
          } hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center py-6`}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chat"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />{" "}
            </svg>
          </span>
          <span className="hover:text-gray-800">Chat</span>
        </div>
        <hr className="border-b border-gray-200" />
      </div>
    </Fragment>
  );
};

export default AdminSidebar;
