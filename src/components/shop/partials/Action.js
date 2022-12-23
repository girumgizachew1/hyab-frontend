import { getUserById } from "../dashboardUser/FetchApi";

export const logout = () => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("cart");
  localStorage.removeItem("wishList");
  window.location.href = "/";
};

export const fetchData = async (dispatch) => {
  dispatch({ type: "loading", payload: true });
  let userId = JSON.parse(localStorage.getItem("jwt"))
    ? JSON.parse(localStorage.getItem("jwt")).user._id
    : "";
  try {
    let responseData = await getUserById(userId);

    if (responseData && responseData.User) {
      console.log(responseData.User);
      return responseData.User;
    }
  } catch (error) {
    return false;
    console.log(error);
  }
};
