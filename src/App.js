import Header from './components/Header';

import React from 'react';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';

import { setPizzas } from './redux/actions/pizzas';

import Home from './pages/Home';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('https://6108109dd73c6400170d37e1.mockapi.io/api/pizzas');

      dispatch(setPizzas(data));
    }

    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <Header />

      <Home />
    </div>
  );
}

export default App;
