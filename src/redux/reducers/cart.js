const initialState = {
  items: [],
  totalItems: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
        totalItems: state.totalItems + 1,
      };
    case 'SET_TOTAL_ITEMS':
      return {
        ...state,
        totalItems: action.payload,
      };

    default:
      return state;
  }
};

export default cart;
