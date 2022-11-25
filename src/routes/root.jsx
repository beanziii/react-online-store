import { Link } from 'react-router-dom';

// import useFetchItems from '../hooks/useFetchItems';

export const categories = [
  'electronics',
  'jewelery',
  "men's clothing",
  "women's clothing",
];

function Root() {
  // const { data, loading } = useFetchItems('jewelery');

  const categoryItems = categories.map((category) => (
    <li key={category} className="cursor-pointer text-2xl hover:underline">
      <Link to={`categories/${category}`}>{category}</Link>
    </li>
  ));

  return (
    <>
      <span className="absolute bottom-8 right-8 bg-slate-900 px-8 py-4 text-white shadow-sm">
        React Online Store
      </span>

      <div className="my-16">
        <ul className="flex list-none flex-col gap-4">{categoryItems}</ul>
      </div>
    </>
  );
}

export default Root;
