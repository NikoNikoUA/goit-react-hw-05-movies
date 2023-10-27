import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Loader from '../components/Loader';

const SharedLayout = () => {
  return (
    <section>
      <header>
        <nav>
          <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default SharedLayout;
