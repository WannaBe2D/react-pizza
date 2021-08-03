import styles from './Category.module.scss';
import React from 'react';

const Category = React.memo(function Category({ items, onClickItem }) {
  const [currentIndex, setCurrentIndex] = React.useState(null);

  const onSelectItem = (index) => {
    setCurrentIndex(index);
    onClickItem(index);
  };

  return (
    <div className={styles.categories}>
      <div
        onClick={() => onSelectItem(null)}
        style={currentIndex === null ? { backgroundColor: '#000' } : { backgroundColor: '#f9f9f9' }}
        className={styles.category}>
        <span style={currentIndex === null ? { color: '#fff' } : { color: '#000' }}>Все</span>
      </div>
      {items.map((e, index) => (
        <div
          onClick={() => onSelectItem(index)}
          key={index}
          style={
            currentIndex === index ? { backgroundColor: '#000' } : { backgroundColor: '#f9f9f9' }
          }
          className={styles.category}>
          <span style={currentIndex === index ? { color: '#fff' } : { color: '#000' }}>{e}</span>
        </div>
      ))}
    </div>
  );
});

export default Category;
