import { Search, User, Bookmark, ShoppingCart, SlidersHorizontal } from "lucide-react"

const Header = () => {
  const categories = ["Bags", "Travel", "Accessories", "Gifting", "Jewelery"]

  const bagTypes = [
    {
      name: "All Bags",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <rect x="6" y="10" width="4" height="4" rx="1" />
        </svg>
      ),
    },
    {
      name: "Vanity Pouch",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 2v4l-6 6v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8l-6-6V2" />
          <path d="M8 6h8" />
        </svg>
      ),
    },
    {
      name: "Tote Bag",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="8" width="16" height="12" rx="2" />
          <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      ),
    },
    {
      name: "Duffle Bag",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="14" rx="8" ry="6" />
          <path d="M8 10h8" />
          <circle cx="12" cy="10" r="2" />
        </svg>
      ),
    },
    {
      name: "Laptop Sleeve",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="12" rx="2" />
          <path d="M2 18h20" />
        </svg>
      ),
    },
    {
      name: "Messenger Bags",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="8" width="18" height="10" rx="2" />
          <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
          <path d="M12 14h.01" />
        </svg>
      ),
    },
    {
      name: "Slings Bgs",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z" />
          <path d="M8 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      name: "Handbags",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
    },
    {
      name: "Bucket",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 7h14l-1 10H6L5 7z" />
          <path d="M5 7L3 2" />
          <path d="M19 7l2-5" />
        </svg>
      ),
    },
  ]

  return (
    <div className="bg-black text-white">
      {/* Main Header */}
      <div className="flex items-center justify-between px-8 py-6">
        {/* Logo */}
        <div className="text-xl font-light tracking-[0.3em]">TANN TRIM</div>

        {/* Navigation Menu */}
        <nav className="flex items-center space-x-12">
          {categories.map((category) => (
            <button
              key={category}
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-light"
            >
              {category}
            </button>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-6">
          <button className="hover:text-gray-300 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="hover:text-gray-300 transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="hover:text-gray-300 transition-colors">
            <Bookmark className="w-5 h-5" />
          </button>
          <button className="hover:text-gray-300 transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Category Filter Section */}
      <div className="px-8 py-8">
        <div className="flex items-center justify-between overflow-x-auto">
          <div className="flex items-center space-x-16">
            {bagTypes.map((bagType) => (
              <button key={bagType.name} className="flex flex-col items-center space-y-3 min-w-fit group">
                <div className="text-gray-400 group-hover:text-white transition-colors">{bagType.icon}</div>
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors whitespace-nowrap font-light">
                  {bagType.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Breadcrumb and Filter Section */}
      <div className="px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-white font-light">Bags</span>
          <span className="text-gray-500">•</span>
          <span className="text-white font-light">Backpacks</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-gray-400 text-sm font-light">13 products</span>
          <button className="text-gray-400 hover:text-white transition-colors">
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
