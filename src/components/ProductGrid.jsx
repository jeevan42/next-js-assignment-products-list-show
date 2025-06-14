import ProductCard from "./ProductCard";
import productsData from "../data/products";

const ProductGrid = async () => {
  let products = [];

  try {
    const res = await fetch("https://your-api-url.com/products", {
      cache: "no-store", // SSR on every request
    });
    if (!res.ok) throw new Error("API failed");

    const data = await res.json();
    products = data.length > 0 ? data : productsData;
  } catch (err) {
    products = productsData;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-black p-6 min-h-screen">
      {products.map((item, idx) => (
        <ProductCard key={idx} product={item} />
      ))}
    </div>
  );
};

export default ProductGrid;
