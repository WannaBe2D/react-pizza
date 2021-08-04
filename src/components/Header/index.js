import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">
        <div className={styles.logo}>
          <img width={38} height={38} src="imgAssets/logo.png" alt="logo" />
          <div className={styles.logoDescription}>
            <h1>REACT PIZZA</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
      </Link>
      <Link to="/cart">
        <div className={styles.cartBtn}>
          <span>520 ₽</span>
          <div></div>
          <span>
            <img src="imgAssets/cart.svg" alt="cart" /> 3
          </span>
        </div>
      </Link>
    </header>
  );
}

export default Header;
