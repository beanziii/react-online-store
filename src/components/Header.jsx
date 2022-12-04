import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar } from '@nextui-org/react';

function Header({ links }) {
  const [variant, setVariant] = useState('default');
  const activeClassName = 'font-semibold underline';

  return (
    <Navbar variant="floating">
      <Navbar.Brand>
        <Link to="/">React Online Store</Link>
      </Navbar.Brand>

      <Navbar.Content>
        {links.map((link) => (
          <Navbar.Item key={link}>
            <NavLink to={link.replaceAll(' ', '%20')}>
              {link.toUpperCase()}
            </NavLink>
          </Navbar.Item>
        ))}
      </Navbar.Content>
    </Navbar>
  );
}
export default Header;
