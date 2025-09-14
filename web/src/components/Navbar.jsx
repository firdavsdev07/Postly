import { Link, useLocation } from "react-router";
import { Home, Search, PlusSquare, Heart } from "lucide-react";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-300 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            Postly
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:block flex-1 max-w-xs mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 pl-10 bg-gray-100 border-none rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Home */}
            <Link to="/" className="hover:scale-110 transition-transform">
              <Home
                className={`w-5 h-5 sm:w-6 sm:h-6 ${
                  isActive("/") ? "text-black fill-current" : "text-gray-600"
                }`}
                fill={isActive("/") ? "currentColor" : "none"}
              />
            </Link>

            {/* Explore */}
            <Link
              to="/explore"
              className="hover:scale-110 transition-transform"
            >
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 ${
                  isActive("/explore") ? "text-black" : "text-gray-600"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </Link>

            {/* Add Post */}
            <button className="hover:scale-110 transition-transform">
              <PlusSquare className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>

            {/* Activity - Hidden on mobile */}
            <button className="hover:scale-110 transition-transform hidden sm:block">
              <Heart className="w-6 h-6 text-gray-600" />
            </button>

            {/* Profile */}
            <Link
              to="/profile"
              className="hover:scale-110 transition-transform"
            >
              <div
                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border-2 ${
                  isActive("/profile") ? "border-black" : "border-gray-300"
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
