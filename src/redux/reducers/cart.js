const initialState = {
  items: [],
  totalItems: 0,
};

const removeItemOnce = (arr, value) => {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};

const removeItemAll = (arr, value) => {
  var i = 0;
  while (i < arr.length) {
    if (JSON.stringify(arr[i]) === JSON.stringify(value)) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
        totalItems: state.totalItems + 1,
      };
    case 'REMOVE_ITEM_CART':
      return {
        ...state,
        items: removeItemOnce(state.items, action.payload),
      };
    case 'DELETE_ITEM_CART':
      return {
        ...state,
        items: removeItemAll(state.items, action.payload),
      };
    case 'DELETE_ALL_CART':
      return {
        ...state,
        items: [],
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
