import { useParams } from 'react-router-dom';
import useFetchItems from '../hooks/useFetchItems';

function Category() {
  const { category } = useParams();
  const { data, isLoading } = useFetchItems(category);

  if (!data) throw new Error('No page found for that!');

  return (
    <div className="flex flex-col gap-10">
      <h1>You are viewing the {category} page!</h1>

      {isLoading && <p>Loading items...</p>}

      {data && (
        <div>
          {data.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Category;
