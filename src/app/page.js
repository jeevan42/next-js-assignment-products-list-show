// src/app/page.js

'use client';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  return (
    <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}
