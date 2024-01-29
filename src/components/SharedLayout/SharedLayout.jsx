import { Suspense } from 'react';
import css from './SharedLayout.module.css';
import { NavLink, Outlet } from 'react-router-dom';

export function SharedLayout() {
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
      <main>
        <Suspense
          fallback={<div style={{ marginTop: 100 }}>Loading page...</div>}
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
