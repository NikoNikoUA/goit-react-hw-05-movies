import { Link } from 'react-router-dom';
import { GoBackBtn } from './BackLink.styled';

const BackLink = ({ to, children }) => {
  return (
    <>
      <Link to={to}>
        <GoBackBtn>Go back</GoBackBtn>
        {children}
      </Link>
    </>
  );
};
export default BackLink;
