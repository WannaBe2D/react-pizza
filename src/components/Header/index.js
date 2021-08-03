import styles from './Header.module.scss';

function Header() {
  return (
    <header>
      <div className={styles.logo}>
        <img width={38} height={38} src="imgAssets/logo.png" alt="logo" />
        <div className={styles.logoDescription}>
          <h1>REACT PIZZA</h1>
          <p>самая вкусная пицца во вселенной</p>
        </div>
      </div>
      <div className={styles.cartBtn}>
        <span>520 ₽</span>
        <div></div>
        <span>
          <img src="imgAssets/cart.svg" alt="cart" /> 3
        </span>
      </div>
    </header>
  );
}

export default Header;
