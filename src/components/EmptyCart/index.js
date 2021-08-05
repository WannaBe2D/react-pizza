import React from 'react';
import styles from './EmptyCart.module.scss';
import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className={styles.emptyCart}>
      <h3>Корзина пустая</h3>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на
        главную страницу.
      </p>
      <img src="imgAssets/emptyCart.svg" alt="emptyCart" />
      <Link to="/">
        <div className={styles.emptyCartBtn}>
          <span>Вернуться назад</span>
        </div>
      </Link>
    </div>
  );
}

export default EmptyCart;
