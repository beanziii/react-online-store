import { useRouteError, Link } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <span>
        <Link to="/" className="">
          Go back home
        </Link>
      </span>
    </div>
  );
}
export default Error;
