import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h1>Sorry! Page not found</h1>
      <Link to="/">Back to home page</Link>
    </div>
  );
}
export default NotFoundPage;
