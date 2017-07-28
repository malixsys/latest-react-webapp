import React from 'react';
import { Container } from 'semantic-ui-react';
import Logo from './Logo';
import TopMenu from './TopMenu';

import styles from './styles.scss';

function Header() {
  return (
    <Container className={styles.header}>
      <Logo />
      <h1>APP_TITLE</h1>
      <strong>
        A starter kit for universal react applications.
      </strong>
      <TopMenu />
    </Container>
  );
}

export default Header;
