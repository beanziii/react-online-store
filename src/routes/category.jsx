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
    <div>
      <h1>You are viewing the {category} page!</h1>

      {isLoading && <p>Loading items...</p>}

      {data && (
        <div>
          {data.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Category;
