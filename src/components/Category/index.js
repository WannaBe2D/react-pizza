import styles from './Category.module.scss';
import React from 'react';

const Category = React.memo(function Category({ items, onClickItem, currentCategory }) {
  const onSelectItem = (index) => {
    onClickItem(index);
  };

  return (
    <div className={styles.categories}>
      <div
        onClick={() => onSelectItem(null)}
        style={
          currentCategory === null ? { backgroundColor: '#000' } : { backgroundColor: '#f9f9f9' }
        }
        className={styles.category}>
        <span style={currentCategory === null ? { color: '#fff' } : { color: '#000' }}>Все</span>
      </div>
      {items.map((e, index) => (
        <div
          onClick={() => onSelectItem(index)}
          key={index}
          style={
            currentCategory === index ? { backgroundColor: '#000' } : { backgroundColor: '#f9f9f9' }
          }
          className={styles.category}>
          <span style={currentCategory === index ? { color: '#fff' } : { color: '#000' }}>{e}</span>
        </div>
      ))}
    </div>
  );
});

export default Category;
