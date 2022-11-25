import { useRouteError, Link } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-w-screen flex min-h-screen flex-col items-center justify-center gap-5">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <span className=" bg-slate-900 px-8 py-4 text-white shadow-sm">
        <Link to="/" className="">
          Go back home
        </Link>
      </span>
    </div>
  );
}
export default Error;
