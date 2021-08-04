import Header from './components/Header';

import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <Route path="/" component={Home} exact />
      <Route path="/cart" component={Cart} exact />
    </div>
  );
}

export default App;
