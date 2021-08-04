import React from 'react';

import Card from '../components/Card';
import LoadingCard from '../components/Card/LoadingCard';
import SortPopUp from '../components/SortPopUp';
import Category from '../components/Category';

import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas, setPizzas } from '../redux/actions/pizzas';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { setCartItem } from '../redux/actions/cart';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const sortItems = [
  { type: 'popular', name: 'популярности' },
  { type: 'price', name: 'цене' },
  { type: 'name', name: 'алфавиту' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  const isLoadded = useSelector(({ pizzas }) => pizzas.isLoadded);
  const cartItems = useSelector(({ cart }) => cart.items);

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  });

  const onSelectBySort = React.useCallback((value) => {
    dispatch(setSortBy(value));
  });

  const handleAddPizzaToCart = (obj) => {
    dispatch(setCartItem(obj));
  };

  return (
    <div className="content">
      <div className="navContent">
        <Category items={categoryNames} onClickItem={onSelectCategory} currentCategory={category} />
        <SortPopUp items={sortItems} onSelectBySort={onSelectBySort} currentSortBy={sortBy} />
      </div>
      <h2>Все пиццы</h2>
      <div className="pizzas">
        {isLoadded
          ? items.map((element) => (
              <Card
                key={element.id}
                id={element.id}
                image={element.imageUrl}
                name={element.name}
                price={element.price}
                types={element.types}
                sizes={element.sizes}
                handleAddPizzaToCart={handleAddPizzaToCart}
                countItemInCart={cartItems.filter((x) => x.id === element.id).length}
              />
            ))
          : [...Array(8)].map((e, index) => <LoadingCard key={index} />)}
      </div>
    </div>
  );
}

export default Home;
