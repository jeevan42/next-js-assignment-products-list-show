import { Bookmark, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-black text-white p-2 rounded-md relative">
      {/* Bookmark Icon */}
      <button className="absolute top-2 right-2">
        <Bookmark className="w-5 h-5 text-white" />
      </button>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded"
      />

      {/* Product Info */}
      <div className="mt-2">
        <p className="text-sm">{product.name}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-white font-semibold">₹{product.price}</span>
          <span className="text-gray-400 text-sm line-through">₹{product.originalPrice}</span>
          <span className="text-green-500 text-sm">({product.discount}% Off)</span>
        </div>
      </div>

      {/* Cart Icon */}
      <button className="absolute bottom-2 right-2">
        <ShoppingCart className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};

export default ProductCard;