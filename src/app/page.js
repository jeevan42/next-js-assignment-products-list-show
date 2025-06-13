// src/app/page.js

'use client';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-gray-900 p-6">
      {products.map((item, idx) => (
        <ProductCard key={idx} product={item} />
      ))}
    </div>
  );
}
