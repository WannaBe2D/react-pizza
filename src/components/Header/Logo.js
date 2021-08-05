import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

import React from 'react';

const Logo = React.memo(function Logo() {
  return (
    <Link to="/">
      <div className={styles.logo}>
        <img width={38} height={38} src="imgAssets/logo.png" alt="logo" />
        <div className={styles.logoDescription}>
          <h1>REACT PIZZA</h1>
          <p>самая вкусная пицца во вселенной</p>
        </div>
      </div>
    </Link>
  );
});

export default Logo;
