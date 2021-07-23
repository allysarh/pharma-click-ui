const INITIAL_STATE = {
  product_list: [],
  city_list: [],
};

export const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_DATA_PRODUCTS":
      return { ...state, product_list: action.payload };
    case "GET_DATA_CITY":
      return { ...state, city_list: action.payload };
    default:
      return state;
  }
};
