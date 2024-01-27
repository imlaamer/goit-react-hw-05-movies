import css from './SharedLayout.module.css';
import { NavLink } from 'react-router-dom';

export function SharedLayout({ children }) {
  return (
    <div className={css.container}>
      <header>
        <div className={css.headerContainer}>
          {/* <nav> */}
          <NavLink
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ''}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ''}`
            }
            to="/movies"
          >
            Movies
          </NavLink>
          {/* </nav> */}
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
