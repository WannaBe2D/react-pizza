const initialState = {
  items: [],
  isLoadded: false,
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PIZZAS':
      return {
        ...state,
        items: action.payload,
        isLoadded: true,
      };
    default:
      return state;
  }
};

export default pizzas;
