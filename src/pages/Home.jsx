import React from 'react';

import Card from '../components/Card';
import LoadingCard from '../components/Card/LoadingCard';
import SortPopUp from '../components/SortPopUp';
import Category from '../components/Category';

import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas, setPizzas } from '../redux/actions/pizzas';
import { setCategory } from '../redux/actions/filters';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const sortItems = [
  { type: 'popular', name: 'популярности' },
  { type: 'price', name: 'цене' },
  { type: 'popalphabetular', name: 'алфавиту' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoadded = useSelector(({ pizzas }) => pizzas.isLoadded);

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  });

  return (
    <div className="content">
      <div className="navContent">
        <Category items={categoryNames} onClickItem={onSelectCategory} />
        <SortPopUp items={sortItems} />
      </div>
      <h2>Все пиццы</h2>
      <div className="pizzas">
        {isLoadded
          ? items.map((element) => (
              <Card
                key={element.id}
                image={element.imageUrl}
                name={element.name}
                price={element.price}
              />
            ))
          : [...Array(8)].map((e) => <LoadingCard />)}
      </div>
    </div>
  );
}

export default Home;
