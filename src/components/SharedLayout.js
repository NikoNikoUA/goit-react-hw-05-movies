import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../components/Loader';
import { Container, Link, Header } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <section>
      <Container>
        <Header>
          <nav>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/movies">Movies</Link>
            </ul>
          </nav>
        </Header>
      </Container>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default SharedLayout;
