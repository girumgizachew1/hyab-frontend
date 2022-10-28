import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

const BearerToken = () =>
  localStorage.getItem("jwt")
    ? JSON.parse(localStorage.getItem("jwt")).token
    : false;
const Headers = () => {
  return {
    headers: {
      token: `Bearer ${BearerToken()}`,
    },
  };
};

export const getAllCustomer = async () => {
  try {
    let res = await axios.get(`${apiURL}/api/user/all-user`, Headers());
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCustomer = async (cId) => {
  try {
    let res = await axios.post(
      `${apiURL}/api/user/delete-user`,
      { oId: cId, status: "delete" },
      Headers()
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
