import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import LoginModal from './LoginModal';
import { useToast } from './ToastContext';

export default function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const { showToast } = useToast();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCategories, setShowCategories] = useState(false);

  const handleLogout = () => {
    logout();
    showToast('Logged out successfully', 'success');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
    }
  };

  const categories = [
    { name: "God Idols", link: "/category/idols" },
    { name: "Puja Items", link: "/category/puja-items" },
    { name: "Decorations", link: "/category/decorations" },
    { name: "Incense", link: "/category/incense" },
    { name: "Books", link: "/category/books" },
    { name: "Jewelry", link: "/category/jewelry" }
  ];

  return (
    <>
      <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Clean Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-xl text-white font-bold">LN</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Laxmi Nursinha</h1>
                <p className="text-sm text-gray-500">Puja Bhandar</p>
              </div>
            </Link>

            {/* Clean Search */}
            <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-3 pl-12 bg-gray-50 border border-gray-200 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </form>

            {/* Clean Actions */}
            <div className="flex items-center space-x-4">
              
              {/* Categories Button */}
              <div className="relative">
                <button
                  onClick={() => setShowCategories(!showCategories)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <span className="font-medium">Categories</span>
                </button>
                
                {/* Categories Dropdown */}
                {showCategories && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.link}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors"
                        onClick={() => setShowCategories(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* User Section */}
              {isAuthenticated ? (
                <div className="relative group">
                  <button className="flex items-center space-x-2 px-3 py-2 rounded-full hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-white">
                        {user?.name?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="font-medium text-gray-700 hidden md:block">{user?.name}</span>
                  </button>
                  
                  {/* User Dropdown */}
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                      My Profile
                    </Link>
                    <Link to="/orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                      My Orders
                    </Link>
                    <Link to="/wishlist" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                      Wishlist
                    </Link>
                    <hr className="my-2 border-gray-100" />
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition-colors"
                >
                  Login
                </button>
              )}

              {/* Cart */}
              <Link to="/cart" className="relative p-2 text-gray-700 hover:text-indigo-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">3</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Clean Info Bar */}
        <div className="bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-2">
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Free Shipping Above ₹500</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Authentic Products</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay for categories */}
      {showCategories && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowCategories(false)}
        ></div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
    </>
  );
}