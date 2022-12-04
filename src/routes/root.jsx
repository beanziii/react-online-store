import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
// import useFetchItems from '../hooks/useFetchItems';

function Root({ categories }) {
  return (
    <>
      <Header links={categories} />
      <Outlet />
    </>
  );
}

export default Root;
