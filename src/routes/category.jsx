import { useParams } from 'react-router-dom';
import useFetchItems from '../hooks/useFetchItems';
import ProductCard from '../components/ProductCard';

function Category() {
  const { category } = useParams();
  const { data, isLoading } = useFetchItems(category);

  if (Array.isArray(data) && data.length === 0) {
    throw new Error('No page found');
  }

  return (
    <div className="flex flex-col gap-10">
      <h1>You are viewing the {category} page!</h1>

      {isLoading && <p>Loading items...</p>}

      {data && (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {data.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Category;
