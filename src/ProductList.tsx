import React, { useEffect, useState } from 'react';

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    setProducts(['Clothing', 'Household']);
  }, [category]);

  const filtered_products = [...products.filter((pr) => pr === category)];
  return (
    <div>
      <h1>ProductList</h1>{' '}
      <ul>
        {filtered_products.map((product) => (
          <li key={product + '_key'}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
