// src/components/ProductCard.jsx

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-2" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-500 text-sm">{product.category}</p>
      <p className="text-green-600 font-bold">${product.price}</p>
      <p className="text-yellow-600 text-sm">⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
    </div>
  );
}
