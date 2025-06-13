import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import productsData from "../data/products"; // fallback static data

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://your-api.com/products"); // replace with actual API
        const data = res.data;

        if (Array.isArray(data) && data.length > 0) {
          setProducts(data);
        } else {
          setProducts(productsData); // fallback if empty
        }
      } catch (error) {
        console.error("API fetch failed, using fallback data:", error.message);
        setProducts(productsData); // fallback if error
      }
    };

    fetchProducts();
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
