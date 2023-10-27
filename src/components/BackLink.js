import { Link } from 'react-router-dom';

const BackLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <button>Go back</button>
      {children}
    </Link>
  );
};
export default BackLink;
