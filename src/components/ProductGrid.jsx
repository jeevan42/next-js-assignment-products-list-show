import ProductCard from "./ProductCard";
import productsData from "../data/products";

// Server-side fetch (simulated with try-catch)
const ProductGrid = async () => {
  let products = [];

  try {
    const res = await fetch("https://your-api-url.com/products", {
      // force dynamic so fetch runs at request time (for dynamic server component)
      cache: "no-store",
    });

    if (!res.ok) throw new Error("API Failed");

    const data = await res.json();

    products = data.length > 0 ? data : productsData;
  } catch (err) {
    products = productsData;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-gray-900 p-6 min-h-screen">
      {products.map((item, idx) => (
        <ProductCard key={idx} product={item} />
      ))}
    </div>
  );
};

export default ProductGrid;
