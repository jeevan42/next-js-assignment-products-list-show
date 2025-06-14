import { Search, User, Bookmark, ShoppingCart, SlidersHorizontal } from "lucide-react"

const Header = () => {
    const categories = ["Bags", "Travel", "Accessories", "Gifting", "Jewelery"]

    const bagTypes = [
        {
            name: "All Bags",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
                    <path d="M13.1742 31.0675V25.14C13.2563 24.3224 14.0114 22.6873 16.3753 22.6873C18.7391 22.6873 27.0454 22.6873 30.9031 22.6873C31.888 22.6191 33.8579 23.0143 33.8579 25.14C33.8579 27.2657 33.8579 29.9774 33.8579 31.0675" stroke="#E5DFD9" stroke-width="0.9" />
                    <path d="M19.5763 47.5954H27.702M7.75708 30.8293H39.5212C41.7373 30.8293 42.476 31.8075 42.9685 33.7896C43.3967 35.5131 44.2818 67.7499 44.9384 83.6199C45.0205 84.6067 45.4308 86.5802 42.2298 86.5802C40.6539 86.5802 17.3602 86.5802 5.04851 86.5802C2.33994 86.5802 2.33994 85.7908 2.33994 83.6199C2.33994 81.4491 3.48903 49.4952 4.06357 33.7896C4.06357 32.5476 4.55604 30.8293 7.75708 30.8293Z" stroke="#E5DFD9" stroke-width="0.9" />
                    <path d="M8.24954 86.5802L9.23448 58.2114C9.23448 56.2294 10.4164 55.4978 12.1893 55.4978C13.9622 55.4978 28.0303 55.4978 34.8428 55.4978C35.9098 55.4978 38.0438 56.0406 38.0438 58.2114C38.0438 60.3822 38.8646 78.0284 39.275 86.5802" stroke="#E5DFD9" stroke-width="0.9" />
                    <path d="M15.3903 55.7445V86.3335" stroke="#E5DFD9" stroke-width="0.9" />
                    <path d="M32.3804 55.4978V86.3335" stroke="#E5DFD9" stroke-width="0.9" />
                    <path d="M3.81732 41.6835C4.14563 42.5058 4.30979 44.1503 7.75706 44.1503C10.1209 44.1503 29.2615 44.1503 38.5363 44.1503C42.7223 44.1503 43.2147 42.415 43.461 41.4282" stroke="#E5DFD9" stroke-width="0.9" />
                    <path d="M41.9401 60.4801L45.9001 57.0601L46.3501 87.7501H42.9301L40.0501 85.5001L39.6001 80.5501V73.1701L40.5901 65.7901L41.9401 60.4801Z" fill="#0C0C0C" />
                    <path d="M82.0232 58.8172C72.2559 57.7294 56.56 57.8254 47.6245 58.8171C44.0263 59.2165 44.0263 59.7549 43.342 61.9163C41.3563 70.7178 40.8599 76.1723 40.8599 81.2549C40.8599 85.9418 44.602 86.0581 47.6245 86.3759C52.3405 86.8717 77.9673 86.3375 82.4351 86.0896C86.9029 85.8417 88.0199 84.5358 88.0199 81.2549C88.0199 77.2704 86.8243 64.9633 85.9092 61.9163C85.3009 59.8908 85.1896 59.1698 82.0232 58.8172Z" stroke="#E5DFD9" stroke-width="0.9" />
                    <path d="M58.419 58.0187V54.5423C58.467 54.0628 58.9084 53.1038 60.2901 53.1038C61.6718 53.1038 66.527 53.1038 68.7818 53.1038C69.3575 53.0638 70.509 53.2956 70.509 54.5423C70.509 55.789 70.509 57.3794 70.509 58.0187" stroke="#E5DFD9" stroke-width="0.9" />
                    <path d="M61.0097 62.7931H68.2061" stroke="#E5DFD9" stroke-width="0.9" />
                    <path d="M51.2227 75.0909L51.2227 86.3759" stroke="#E5DFD9" stroke-width="0.9" />
                    <path d="M77.4175 75.0909L77.4175 86.3759" stroke="#E5DFD9" stroke-width="0.9" />
                    <path d="M64.6081 70.0433C68.8882 70.0434 72.362 73.532 72.362 77.8401C72.3618 82.1481 68.888 85.6369 64.6081 85.637C60.3281 85.637 56.8544 82.1482 56.8542 77.8401C56.8542 73.5319 60.328 70.0433 64.6081 70.0433Z" stroke="#E5DFD9" stroke-width="0.9" />
                </svg>
            ),
        },
        {
            name: "Vanity Pouch",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="86" height="62" viewBox="0 0 86 62" fill="none">
                    <path d="M84.4001 25.8789C59.7116 13.9039 15.0911 20.0044 2.86011 25.8789C4.67211 34.2388 15.5441 59.3184 18.7151 59.3184C25.0571 61.3519 63.3356 61.1259 69.9041 59.3184C72.8033 59.3184 82.3616 35.5944 84.4001 25.8789Z" stroke="#E5DFD9" stroke-width="1.5" />
                    <path d="M36.88 25.6597H50.2" stroke="#E5DFD9" stroke-width="1.5" />
                    <path d="M30.3549 7.41039C35.1707 5.02258 38.2899 3.32893 40.3502 2.38035C41.3692 1.9112 42.0316 1.67395 42.4543 1.60957C42.4529 1.61117 42.4519 1.61319 42.4504 1.6148C42.1454 1.94864 41.6382 2.39225 40.9406 2.92912C39.5544 3.99586 37.5262 5.34988 35.1605 6.81854C30.4335 9.75305 24.4265 13.1031 19.6751 15.459C14.8544 17.8492 10.607 20.6739 7.51006 22.6995C6.19958 23.5567 5.11551 24.2551 4.27536 24.7296C4.64399 24.3872 5.09174 23.9956 5.61349 23.5636C7.39509 22.0885 9.94697 20.1926 12.8302 18.1858C18.6009 14.1692 25.6298 9.75319 30.3549 7.41039Z" stroke="#E5DFD9" stroke-width="1.5" />
                </svg>
            ),
        },
        {
            name: "Tote Bag",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="66" height="90" viewBox="0 0 66 90" fill="none">
                    <path d="M64.2865 30.854H1.51529V79.53C1.25483 87.0787 4.38036 88.3802 6.46406 88.3802H58.5563C63.3488 88.3802 64.547 83.4345 64.2865 79.53V30.854Z" fill="#E5DFD9" stroke="#E5DFD9" stroke-width="1.5" />
                    <path d="M18.1696 30.5937V17.7002C18.1696 -1.3442 47.3412 -2.44292 47.3412 17.7002V30.5937" stroke="#E5DFD9" stroke-width="1.5" />
                    <path d="M16.6068 30.5935V17.7735C16.6068 -3.38975 48.904 -4.61071 48.904 17.7735V30.5935" stroke="#E5DFD9" stroke-width="1.5" />
                    <path d="M57.4992 81.0918H45.7784" stroke="#0C0C0C" stroke-width="1.5" />
                </svg>
            ),
        },
        {
            name: "Duffle Bag",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="96" height="68" viewBox="0 0 96 68" fill="none">
                    <path d="M82.6476 12.5899C63.4014 10.4564 32.4729 10.6448 14.8655 12.5899C7.77536 13.3732 7.77536 14.429 6.42696 18.6682C2.5142 35.9306 1.53601 46.6285 1.53601 56.5969C1.53601 65.7893 8.90979 66.0173 14.8655 66.6406C24.1583 67.6131 74.6557 66.5654 83.4594 66.0791C92.2631 65.5928 94.464 63.0317 94.464 56.5969C94.464 48.7821 92.1083 24.6443 90.305 18.6682C89.1063 14.6956 88.887 13.2816 82.6476 12.5899Z" stroke="#E5DFD9" stroke-width="1.5" />
                    <path d="M36.136 11.0238V4.20551C36.2306 3.26505 37.1003 1.38414 39.8229 1.38414C42.5456 1.38414 52.1126 1.38414 56.5557 1.38414C57.6902 1.30577 59.959 1.76033 59.959 4.20551C59.959 6.65069 59.959 9.76986 59.959 11.0238" stroke="#E5DFD9" stroke-width="1.5" />
                    <path d="M41.241 20.3878H55.4213" stroke="#E5DFD9" stroke-width="1.5" />
                    <path d="M21.9557 44.5074L21.9557 66.6406" stroke="#E5DFD9" stroke-width="1.5" />
                    <path d="M73.5722 44.5074L73.5722 66.6406" stroke="#E5DFD9" stroke-width="1.5" />
                    <path d="M48.3315 34.4747C56.8446 34.4749 63.7464 41.3799 63.7466 49.8985C63.7466 58.4173 56.8448 65.3231 48.3315 65.3233C39.8181 65.3233 32.9155 58.4174 32.9155 49.8985C32.9157 41.3797 39.8183 34.4747 48.3315 34.4747Z" stroke="#E5DFD9" stroke-width="1.5" />
                </svg>
            ),
        },
        {
            name: "Laptop Sleeve",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
                    <g clip-path="url(#clip0_2_670)">
                        <path d="M86.4001 29.6201H3.29809L3.07349 84.1527C3.07349 86.7228 3.29809 87.8403 5.88099 87.8403H84.2664C86.4001 87.8403 86.3252 85.3819 86.4001 84.1527V29.6201Z" stroke="#E5DFD9" stroke-width="1.5" />
                        <path d="M82.5817 32.3018H7.09562L6.8916 81.9149C6.8916 84.2532 7.09562 85.2699 9.44181 85.2699H80.6436C82.5817 85.2699 82.5137 83.0332 82.5817 81.9149V32.3018Z" stroke="#E5DFD9" stroke-width="1.5" />
                        <rect x="28.5294" y="73.2808" width="32.19" height="4.75781" stroke="#E5DFD9" stroke-width="1.5" />
                        <path d="M38.7848 75.6597H50.5763" stroke="#E5DFD9" stroke-width="1.5" />
                        <path d="M8.64103 20.8804C2.95303 21.9604 1.53105 27.7204 3.60103 31.3204C2.98132 25.8304 6.12103 22.3204 9.09103 22.3204L8.64103 20.8804Z" fill="#E5DFD9" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2_670">
                            <rect width="90" height="90" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
        },
        {
            name: "Messenger Bags",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="96" height="70" viewBox="0 0 96 70" fill="none">
                    <path d="M1.72803 38.3198C1.91537 40.1469 3.86377 44.0752 9.0345 44.0752C14.2052 44.0752 63.6457 44.0752 87.7196 44.0752C89.5931 44.1665 93.1151 42.9241 94.464 38.3198" stroke="#E5DFD9" stroke-width="1.5" />
                    <path d="M53.376 20.4638L42.816 20.4638" stroke="#E5DFD9" stroke-width="1.5" />
                    <path d="M34.7521 13.744C37.8554 2.29381 38.7018 1.45599 41.523 1.45599H56.4755C60.1431 1.45599 59.5789 2.2938 62.4001 13.744" stroke="#E5DFD9" stroke-width="1.5" />
                    <path d="M94.464 13.744H1.72803V63.0354C1.72803 66.6407 4.81923 69.232 7.91043 69.232H88.8437C93.34 69.232 94.464 64.5376 94.464 62.1904V13.744Z" stroke="#E5DFD9" stroke-width="1.5" />
                    <rect x="26.8979" y="59.6498" width="4.06801" height="14.436" transform="rotate(-180 26.8979 59.6498)" stroke="#E5DFD9" stroke-width="1.5" />
                    <rect x="70.6381" y="33.31" width="4.068" height="9.636" stroke="#E5DFD9" stroke-width="1.5" />
                    <rect x="22.8301" y="33.31" width="4.068" height="9.636" stroke="#E5DFD9" stroke-width="1.5" />
                    <rect x="74.7061" y="59.6498" width="4.06801" height="14.436" transform="rotate(-180 74.7061 59.6498)" stroke="#E5DFD9" stroke-width="1.5" />
                </svg>
            ),
        },
        {
            name: "Slings Bgs",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
                    <g clip-path="url(#clip0_2_693)">
                        <path d="M22.5493 44.9998C31.5713 -11.3986 58.0736 -17.7701 69.0692 44.9998" stroke="#E5DFD9" stroke-width="1.5" />
                        <path d="M69.0486 45H22.5631C20.0305 51.5027 14.8019 75.7418 45.6833 74.8796C78.1169 73.9742 70.274 49.6918 69.0486 45Z" stroke="#E5DFD9" stroke-width="1.5" />
                        <path d="M20.8958 59.7339C20.1878 64.755 18.4863 75.8672 18.617 77.1843C18.8621 88.0496 26.1331 88.2965 35.5282 89.0373C44.3515 89.7331 59.6288 88.741 60.9359 88.5435C68.7788 87.885 72.6185 85.7448 72.6185 77.1843C72.2014 71.9985 72.038 70.8462 70.4041 59.7339" stroke="#E5DFD9" stroke-width="1.5" />
                        <path d="M23.8416 45.0002C34.02 -13.6798 57.87 -11.8798 67.777 45.0002" stroke="#E5DFD9" stroke-width="1.5" />
                        <path d="M57.2239 83.7002H65.8387" stroke="#E5DFD9" stroke-width="1.5" />
                        <path d="M42.2256 74.8933V76.3671C42.2256 77.4717 43.121 78.3671 44.2256 78.3671H46.9957C48.1002 78.3671 48.9957 77.4717 48.9957 76.3671V74.7104" stroke="#E5DFD9" stroke-width="1.5" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2_693">
                            <rect width="90" height="90" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
        },
        {
            name: "Handbags",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                    <path d="M75.6215 43.3317H19.741C9.75362 43.3317 8.10968 48.0002 7.48148 53.0264C6.34106 62.1507 4.35403 82.8593 3.77512 86.6724C3.19621 90.4854 4.62173 94.6562 7.48148 94.6562C30.9551 94.6562 82.3983 93.8095 86.7319 93.8095C91.0655 93.8095 93.0042 89.9152 92.1576 86.6724C91.2072 78.0233 89.0784 59.1853 88.1661 53.0264C87.2538 46.8674 84.451 43.3317 75.6215 43.3317Z" stroke="#E5DFD9" stroke-width="1.5" />
                    <path d="M38.5492 86.6726H58.2214" stroke="#E5DFD9" stroke-width="1.5" />
                    <path d="M23.1536 43.1529C32.8471 -12.1635 61.9278 -13.0189 72.7618 43.1529" stroke="#E5DFD9" stroke-width="1.5" />
                    <path d="M27.7152 43.3316C35.626 -7.97554 59.3586 -8.76897 68.2001 43.3316" stroke="#E5DFD9" stroke-width="1.5" />
                </svg>
            ),
        }
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
                    <div className="flex items-center space-x-24">
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
