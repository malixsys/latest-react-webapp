import React from 'react';
import Helmet from 'react-helmet';

import styles from './styles.scss';

function AboutRoute() {
  return (
    <div classNames={styles.aboutWrapper}>
      <Helmet>
        <title>About</title>
      </Helmet>

      <p>Produced with ❤️</p>

    </div>
  );
}

export default AboutRoute;
