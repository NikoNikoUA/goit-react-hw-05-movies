import { Link } from 'react-router-dom';
import { GoBackBtn, Container } from './BackLink.styled';

const BackLink = ({ to, children }) => {
  return (
    <Container>
      <Link to={to}>
        <GoBackBtn>Go back</GoBackBtn>
        {children}
      </Link>
    </Container>
  );
};
export default BackLink;
