import { Bookmark, ShoppingCart } from "lucide-react"

const ProductCard = ({ product }) => {
  return (
    <div className="bg-black border border-gray-200 rounded-lg shadow-sm relative max-w-sm">
      {/* Bookmark Icon */}
      <button className="absolute top-3 right-3 z-10">
        <Bookmark className="w-5 h-5 text-gray-600 hover:text-gray-800" />
      </button>

      {/* Product Image */}
      <div className="relative">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-80 object-cover rounded-t-lg"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 pb-12">
        <h3 className="text-gray-800 font-medium text-base mb-2">{product.name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-gray-100 font-semibold text-lg">₹ {product.price}</span>
          <span className="text-gray-400 text-sm line-through">{product.price * 2}</span>
          <span className="text-green-600 text-sm font-medium">({product.discount || 50}% Off)</span>
        </div>
      </div>

      {/* Cart Icon */}
      <button className="absolute bottom-3 right-3">
        <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-gray-800" />
      </button>
    </div>
  )
}

export default ProductCard;