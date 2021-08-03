import axios from 'axios';

export const fetchPizzas = () => (dispatch) => {
  axios.get('https://6108109dd73c6400170d37e1.mockapi.io/api/pizzas').then(({ data }) => {
    dispatch(setPizzas(data));
  });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
