 const initialState = []
 const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT":
      return {
        productInfo: action.payload,
      };
  }
  return state;
};
export default ProductReducer