export const customerState = {
  customers: [],
  loading: false,
};

export const customerReducer = (state, action) => {
  switch (action.type) {
    /* Get all Customer */
    case "fetchCustomerAndChangeState":
      return {
        ...state,
        customers: action.payload,
      };
    case "loading":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
