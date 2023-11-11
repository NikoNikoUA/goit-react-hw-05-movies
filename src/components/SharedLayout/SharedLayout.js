import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
import {
  Link,
  Header,
  ToggleContainer,
  Toggle,
  ToggleBtn,
} from './SharedLayout.styled';

const SharedLayout = () => {
  const [toggleActive, setToggleActive] = useState(false);
  const [bodyColor, setBodyColor] = useState('blueviolet');

  const handleToggleClick = () => {
    setToggleActive(!toggleActive);
    if (bodyColor === 'blueviolet') {
      setBodyColor('black');
    } else {
      setBodyColor('blueviolet');
    }
  };

  return (
    <section>
      <Header>
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </ul>
        </nav>
        <ToggleContainer title="Change theme">
          <Toggle
            className={toggleActive ? 'active' : ''}
            onClick={handleToggleClick}
          >
            <ToggleBtn className={toggleActive ? 'active' : ''}></ToggleBtn>
          </Toggle>
        </ToggleContainer>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <style>
        {`
          body {
            background-color: ${bodyColor};
          }
        `}
      </style>
    </section>
  );
};

export default SharedLayout;
