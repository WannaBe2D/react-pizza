const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
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
  var price = 0;
  while (i < arr.length) {
    if (JSON.stringify(arr[i]) === JSON.stringify(value)) {
      arr.splice(i, 1);
      price = price + value.price;
    } else {
      ++i;
    }
  }
  //console.log(price);

  return [arr, i, price];
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };
    case 'REMOVE_ITEM_CART':
      return {
        ...state,
        items: removeItemOnce(state.items, action.payload),
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - action.payload.price,
      };
    case 'DELETE_ITEM_CART':
      const [arr, i, price] = removeItemAll(state.items, action.payload);
      console.log(arr, i, price);
      return {
        ...state,
        items: arr,
        totalItems: i,
        totalPrice: state.totalPrice - price,
      };
    case 'DELETE_ALL_CART':
      return {
        ...state,
        items: [],
        totalItems: 0,
        totalPrice: 0,
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
