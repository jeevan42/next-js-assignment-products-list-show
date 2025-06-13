import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import productsData from '../data/products';


const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulated API call
    setTimeout(() => {
      try {
        // Simulate fetched data (you can toggle empty array to simulate failure)
        const fetchedData = [];

        if (fetchedData.length > 0) {
          setProducts(fetchedData);
        } else {
          setProducts(productsData);
        }
      } catch (error) {
        setProducts(productsData);
      }
    }, 1000);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-gray-900 p-6 min-h-screen">
      {products.map((item, idx) => (
        <ProductCard key={idx} product={item} />
      ))}
    </div>
  );
};

export default ProductGrid;
