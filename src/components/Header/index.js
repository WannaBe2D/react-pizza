import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from './Logo';
import React from 'react';

const Header = React.memo(function Header() {
  const { totalItems, totalPrice } = useSelector(({ cart }) => cart);
  return (
    <header>
      <Logo />
      <Link to="/cart">
        <div className={styles.cartBtn}>
          <span>{totalPrice} ₽</span>
          <div></div>
          <span>
            <img src="imgAssets/cart.svg" alt="cart" /> {totalItems}
          </span>
        </div>
      </Link>
    </header>
  );
});

export default Header;
