import React from 'react';

import Card from '../components/Card';
import SortPopUp from '../components/SortPopUp';
import Category from '../components/Category';

import { useSelector, useDispatch } from 'react-redux';

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

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="content">
      <div className="navContent">
        <Category items={categoryNames} onClickItem={onSelectCategory} />
        <SortPopUp items={sortItems} />
      </div>
      <h2>Все пиццы</h2>
      <div className="pizzas">
        {items.map((element) => (
          <Card
            key={element.id}
            image={element.imageUrl}
            name={element.name}
            price={element.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
