export const productReducer = (state = [], action) => {
  switch (action.type) {
    case "@cart/add":
      return [...state, action.product];
    case "@cart/delete":
      return state.filter((product) => product.id !== action.product.id);
    case "@cart/empty":
      return [];
    default: {
      return state;
    }
  }
};

export const addProduct = (product) => {
  return {
    type: "@cart/add",
    product: { product, id: +new Date() },
  };
};

export const deleteProduct = (product) => {
  return {
    type: "@cart/delete",
    product,
  };
};

export const emptyCart = () => {
  return {
    type: "@cart/empty",
  };
};
