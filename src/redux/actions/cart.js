export const setCartItem = (obj) => ({
  type: 'SET_CART',
  payload: obj,
});

export const removeCartItem = (obj) => ({
  type: 'REMOVE_ITEM_CART',
  payload: obj,
});

export const deleteCartItem = (obj) => ({
  type: 'DELETE_ITEM_CART',
  payload: obj,
});

export const deleteAllCart = () => ({
  type: 'DELETE_ALL_CART',
});
