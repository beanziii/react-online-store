import useFetchItems from '../hooks/useFetchItems';

function Root() {
  const { data, loading } = useFetchItems('jewelery');

  return (
    <>
      <h1>React Online Store</h1>
    </>
  );
}

export default Root;
