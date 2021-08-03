import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Card.module.scss';

function LoadingCard() {
  return (
    <ContentLoader
      className={styles.pizzaCard}
      speed={2}
      width={280}
      height={459}
      viewBox="0 0 280 459"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="130" cy="130" r="130" />
      <rect x="35" y="271" rx="15" ry="15" width="200" height="37" />
      <rect x="0" y="317" rx="10" ry="10" width="280" height="85" />
      <rect x="0" y="423" rx="10" ry="10" width="100" height="33" />
      <rect x="125" y="419" rx="10" ry="10" width="155" height="40" />
    </ContentLoader>
  );
}

export default LoadingCard;
