import { Search, User, Bookmark, ShoppingCart } from "lucide-react"

const Header = () => {
  const categories = ["Bags", "Travel", "Accessories", "Gifting", "Jewelery"]

  const bagTypes = [
    { name: "All Bags", icon: "🎒" },
    { name: "Vanity Pouch", icon: "👝" },
    { name: "Tote Bag", icon: "👜" },
    { name: "Duffle Bag", icon: "🎒" },
    { name: "Laptop Sleeve", icon: "💼" },
    { name: "Messenger Bags", icon: "👜" },
    { name: "Slings Bag", icon: "🎒" },
    { name: "Hand Bag", icon: "👜" },
  ]

  return (
    <div className="bg-gray-900 text-white">
      {/* Main Header */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-light tracking-widest">IANN IRIM</div>

        {/* Navigation Menu */}
        <nav className="flex items-center space-x-8">
          {categories.map((category) => (
            <button
              key={category}
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              {category}
            </button>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
            <Bookmark className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Category Filter Section */}
      <div className="border-t border-gray-800 px-6 py-4">
        <div className="flex items-center space-x-8 overflow-x-auto">
          {bagTypes.map((bagType) => (
            <button key={bagType.name} className="flex flex-col items-center space-y-2 min-w-fit group">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                <span className="text-xl">{bagType.icon}</span>
              </div>
              <span className="text-xs text-gray-400 group-hover:text-white transition-colors whitespace-nowrap">
                {bagType.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Breadcrumb Section */}
      <div className="border-t border-gray-800 px-6 py-3">
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-gray-400">Bags</span>
          <span className="text-gray-600">{">"}</span>
          <span className="text-white">Ba</span>
        </div>
      </div>
    </div>
  )
}

export default Header
