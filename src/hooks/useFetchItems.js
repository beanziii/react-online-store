import { useEffect, useState } from 'react';

function useFetchItems(category) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getItems = async () => {
      setIsLoading(true);

      console.log(category);

      const res = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      if (!res.ok) {
        setIsLoading(false);
        throw new Error('Could not fetch products 😭');
      }
      const data = await res.json();

      setData(data);
      setIsLoading(false);
    };

    try {
      getItems();
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  }, [category]);

  return { data, isLoading };
}

export default useFetchItems;
