import styles from './SortPopUp.module.scss';
import React from 'react';

const SortPopUp = React.memo(function SortPopUp({ items, onSelectBySort, currentSortBy }) {
  return (
    <div className={styles.sort}>
      <b>Сортировка по: </b>
      <select value={currentSortBy} onChange={(event) => onSelectBySort(event.target.value)}>
        {items.map((obj) => (
          <option key={obj.type} value={obj.type}>
            {obj.name}
          </option>
        ))}
      </select>
    </div>
  );
});

export default SortPopUp;
