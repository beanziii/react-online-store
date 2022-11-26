import { NavLink } from 'react-router-dom';

function Header({ links }) {
  const activeClassName = 'font-semibold underline';

  return (
    <header className="mb-10 flex items-center justify-between py-2">
      <p className="text-xl font-bold">React Online Store</p>

      <nav>
        <ul className="flex items-center justify-between gap-2">
          {links.map((link) => (
            <li key={link}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClassName : 'font-semibold'
                }
                to={link.replaceAll(' ', '%20')}
              >
                {link.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
