import styles from './SortPopUp.module.scss';
import React from 'react';

const SortPopUp = React.memo(function SortPopUp({ items }) {
  return (
    <div className={styles.sort}>
      <b>Сортировка по: </b>
      <select>
        {items.map((obj) => (
          <option key={obj.type} value={obj.tepe}>
            {obj.name}
          </option>
        ))}
      </select>
    </div>
  );
});

export default SortPopUp;
