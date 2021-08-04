import React from 'react';
import styles from './Card.module.scss';

const Card = React.memo(function Card({
  id,
  image,
  name,
  types,
  sizes,
  price,
  handleAddPizzaToCart,
  countItemInCart,
}) {
  const availableTypes = ['тонкое', 'традиционное'];
  const availableSizes = [26, 30, 40];
  /*(activeType === index
                ? { backgroundColor: '#fff', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.04)' }
                : { backgroundColor: '#f3f3f3' })*/
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  const addToCart = () => {
    const obj = {
      id,
      name,
      image,
      price,
      type: availableTypes[activeType],
      size: availableSizes[activeSize],
    };
    handleAddPizzaToCart(obj);
  };

  return (
    <div className={styles.pizzaCard}>
      <img width={260} height={260} src={image} alt="pizza" />
      <h3>{name}</h3>
      <div className={styles.variant}>
        <ul className={styles.sizes}>
          {availableTypes.map((type, index) =>
            types[index] === undefined ? (
              <li
                key={type}
                onClick={() => onSelectType(index)}
                style={{ backgroundColor: '#f3f3f3', pointerEvents: 'none', color: '#CBCBCB' }}>
                {type}
              </li>
            ) : (
              <li
                key={type}
                onClick={() => onSelectType(index)}
                style={
                  activeType === index
                    ? { backgroundColor: '#fff', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.04)' }
                    : { backgroundColor: '#f3f3f3' }
                }>
                {type}
              </li>
            ),
          )}
        </ul>
        <ul className={styles.sizes} style={{ marginTop: '7px' }}>
          {availableSizes.map((size, index) =>
            sizes.includes(size) ? (
              <li
                key={index}
                onClick={() => onSelectSize(index)}
                style={
                  activeSize === index
                    ? { backgroundColor: '#fff', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.04)' }
                    : { backgroundColor: '#f3f3f3' }
                }>
                {size}
              </li>
            ) : (
              <li
                key={index}
                onClick={() => onSelectSize(index)}
                style={{ backgroundColor: '#f3f3f3', pointerEvents: 'none', color: '#CBCBCB' }}>
                {size}
              </li>
            ),
          )}
        </ul>
      </div>
      <div className={styles.buy}>
        <span>от {price} ₽</span>
        <div onClick={() => addToCart()} className={styles.buyBtn}>
          <svg
            className={styles.svgPlus}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="#EB5A1E"
            />
          </svg>
          <p>Добавить {countItemInCart > 0 && <div>{countItemInCart}</div>}</p>
        </div>
      </div>
    </div>
  );
});

export default Card;
