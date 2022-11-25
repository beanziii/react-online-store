import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchItems from '../hooks/useFetchItems';

function Category() {
  const { currentCategory } = useParams();
  const { data, isLoading } = useFetchItems(currentCategory);

  return (
    <div className="flex flex-col gap-10">
      <p>You are viewing the {currentCategory} page!</p>

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

      <div className="div"></div>
    </div>
  );
}
export default Category;
