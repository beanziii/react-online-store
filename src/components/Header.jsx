import { NavLink } from 'react-router-dom';

function Header({ links }) {
  return (
    <header>
      <p>React Online Store</p>

      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <NavLink to={link}>{link}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
