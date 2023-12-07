export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const PRODUCT_FETCHED_SUCCESS = "PRODUCT_FETCHED_SUCCESS";
export const PRODUCT_FETCHED_FAILED = "PRODUCT_FETCHED_FAILED";
 // 10 actions

export const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCT_FETCHED_SUCCESS:
      return {
        ...state,
        productList: action.payload,
        isLoading: false,
      };
    case PRODUCT_FETCHED_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
  }
};


// can create multiple reducer and can merge into one

