import React from 'react';
import Link from 'react-router-dom/Link';
import { Menu } from 'semantic-ui-react';

function TopMenu() {
  return (
    <Menu fixed="top" pointing secondary>
      <Menu.Item header>APP_TITLE</Menu.Item>
      <Menu.Item name="Home" as={Link} to="/" />
      <Menu.Item name="posts" as={Link} to="/posts">
        Posts
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item name="About" as={Link} to="/about" />
      </Menu.Menu>
    </Menu>
  );
}

export default TopMenu;
