import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "./product.types";

const initalState = {
  getProducts: {
    loading: false,
    error: false,
    data: [],
  },
};

export const ProductReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_LOADING: {
      return {
        ...state,
        getProducts: {
          ...state.addProduct,
          loading: true,
        },
      };
    }
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        getProducts: {
          ...state.getProducts,
          loading: false,
          data: payload,
        },
      };
    }

    case GET_PRODUCTS_ERROR: {
      return {
        ...state,
        getProducts: {
          ...state.getProducts,
          loading: false,
          error: true,
        },
      };
    }

    default: {
      return state;
    }
  }
};
