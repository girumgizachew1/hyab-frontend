import { createOrder } from "./FetchApi";

export const fetchData = async (cartListProduct, dispatch) => {
  dispatch({ type: "loading", payload: true });
  try {
    let responseData = await cartListProduct();
    if (responseData && responseData.Products) {
      setTimeout(function () {
        dispatch({ type: "cartProduct", payload: responseData.Products });
        dispatch({ type: "loading", payload: false });
      }, 1000);
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchbrainTree = async (getBrainTreeToken, setState) => {
  try {
    let responseData = await getBrainTreeToken();
    if (responseData && responseData) {
      setState({
        clientToken: responseData.clientToken,
        success: responseData.success,
      });
      console.log(responseData);
    }
  } catch (error) {
    console.log(error);
  }
};

export const pay = async (
  data,
  dispatch,
  state,
  setState,
  getPaymentProcess,
  totalCost,
  history
) => {
  console.log(state);
  if (!state.address) {
    setState({ ...state, error: "Please provide your address" });
  } else if (!state.phone) {
    setState({ ...state, error: "Please provide your phone number" });
  } else if (!state.first_name) {
    setState({ ...state, error: "Please provide your first name" });
  } else if (!state.last_name) {
    setState({ ...state, error: "Please provide your last name" });
  } else if (!state.postCode) {
    setState({ ...state, error: "Please provide your post code" });
  } else if (!state.country) {
    setState({ ...state, error: "Please provide your country" });
  } else if (!state.city) {
    setState({ ...state, error: "Please provide your city" });
  } else if (!state.occasion) {
    setState({ ...state, error: "Please provide your occasion" });
  } else {
    let nonce;
    state.instance
      .requestPaymentMethod()
      .then((data) => {
        dispatch({ type: "loading", payload: true });
        nonce = data.nonce;
        let paymentData = {
          amountTotal: totalCost(),
          paymentMethod: nonce,
        };
        getPaymentProcess(paymentData)
          .then(async (res) => {
            console.log(res);
            if (res) {
              let orderData = {
                allProduct: JSON.parse(localStorage.getItem("cart")),
                user: JSON.parse(localStorage.getItem("jwt")).user._id,
                amount: res.transaction.amount,
                transactionId: res.transaction.id,
                address: state.address,
                phone: state.phone,
                firstName: state.first_name,
                lastName: state.last_name,
                country: state.country,
                city: state.city,
                postCode: state.postCode,
                occasion: state.occasion,
              };
              try {
                let resposeData = await createOrder(orderData);
                console.log(resposeData);
                if (resposeData.success) {
                  console.log("response success");
                  localStorage.setItem("cart", JSON.stringify([]));
                  console.log("xER CART product null");
                  dispatch({ type: "cartProduct", payload: null });
                  dispatch({ type: "cartTotalCost", payload: null });
                  console.log("order success");
                  dispatch({ type: "orderSuccess", payload: true });
                  setState({ clientToken: "", instance: {} });
                  console.log("before loadding success");
                  dispatch({ type: "loading", payload: false });
                  return history.push("/");
                } else if (resposeData.error) {
                  dispatch({ type: "loading", payload: false });
                  console.log(resposeData.error);
                } else if (resposeData.message) {
                  dispatch({ type: "loading", payload: false });
                  console.log(resposeData.message);
                  setState({ ...state, error: resposeData.message });
                }
              } catch (error) {
                console.log(error);
                dispatch({ type: "loading", payload: false });
              }
            }
          })
          .catch((err) => {
            console.log(err);
            dispatch({ type: "loading", payload: false });
          });
      })
      .catch((error) => {
        console.log(error);
        setState({ ...state, error: error.message });
      });
  }
};

// } else {
//   let nonce;
//   state.instance
//     .requestPaymentMethod()
//     .then((data) => {
//       dispatch({ type: "loading", payload: true });
//       nonce = data.nonce;
//       let paymentData = {
//         amountTotal: totalCost(),
//         paymentMethod: nonce,
//       };
//       getPaymentProcess(paymentData)
//         .then(async (res) => {
//           if (res) {
//             let orderData = {
//               allProduct: JSON.parse(localStorage.getItem("cart")),
//               user: JSON.parse(localStorage.getItem("jwt")).user._id,
//               amount: res.transaction.amount,
//               transactionId: res.transaction.id,
//               address: state.address,
//               phone: state.phone,
//             };
//             try {
//               let resposeData = await createOrder(orderData);
//               if (resposeData.success) {
//                 localStorage.setItem("cart", JSON.stringify([]));
//                 dispatch({ type: "cartProduct", payload: null });
//                 dispatch({ type: "cartTotalCost", payload: null });
//                 dispatch({ type: "orderSuccess", payload: true });
//                 setState({ clientToken: "", instance: {} });
//                 dispatch({ type: "loading", payload: false });
//                 return history.push("/");
//               } else if (resposeData.error) {
//                 console.log(resposeData.error);
//               }
//             } catch (error) {
//               console.log(error);
//             }
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     })
//     .catch((error) => {
//       console.log(error);
//       setState({ ...state, error: error.message });
//     });
// }
