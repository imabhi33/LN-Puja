import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from './ToastContext';

export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToast();

  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    showToast(`${product.name} added to cart!`, 'success');
    setIsLoading(false);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    showToast(
      isWishlisted ? 'Removed from wishlist' : 'Added to wishlist',
      'success'
    );
  };

  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="card-hover overflow-hidden group-hover:shadow-glow transition-all duration-500">
        {/* Image Container with enhanced effects */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          </div>
          
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Floating Badge */}
          {product.badge && (
            <div className="absolute top-4 left-4 animate-bounce-in">
              <div className="gradient-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-medium">
                {product.badge}
              </div>
            </div>
          )}
          
          {/* Discount Badge */}
          {discountPercentage > 0 && (
            <div className="absolute top-4 right-4 animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-medium animate-pulse">
                -{discountPercentage}%
              </div>
            </div>
          )}

          {/* Enhanced Action Buttons */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
            <button
              onClick={handleWishlist}
              className={`p-3 rounded-full shadow-medium backdrop-blur-md transition-all duration-300 hover:scale-110 ${
                isWishlisted 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white/90 text-gray-600 hover:bg-red-50 hover:text-red-500'
              }`}
              style={{ marginRight: discountPercentage > 0 ? '3rem' : '0' }}
            >
              <svg
                className="w-5 h-5"
                fill={isWishlisted ? 'currentColor' : 'none'}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            
            <button className="p-3 bg-white/90 rounded-full shadow-medium backdrop-blur-md text-gray-600 hover:bg-blue-50 hover:text-blue-500 transition-all duration-300 hover:scale-110">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>

          {/* Enhanced Quick Add to Cart */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <button
              onClick={handleAddToCart}
              disabled={isLoading}
              className={`w-full py-3 rounded-xl font-semibold shadow-medium backdrop-blur-md transition-all duration-300 hover:scale-105 ${
                isLoading
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'gradient-primary text-white hover:shadow-glow'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Adding...</span>
                </div>
              ) : (
                'Add to Cart'
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Product Info */}
        <div className="p-6">
          <h3 className="font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200 text-lg leading-tight">
            {product.name}
          </h3>
          
          {/* Enhanced Rating */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) 
                        ? 'text-yellow-400 fill-current' 
                        : i < product.rating 
                        ? 'text-yellow-400 fill-current opacity-50'
                        : 'text-gray-300'
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600">
                {product.rating}
              </span>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {product.reviews} reviews
            </span>
          </div>

          {/* Enhanced Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-gray-800">
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-gray-500 line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            {discountPercentage > 0 && (
              <div className="text-green-600 font-semibold text-sm">
                Save ₹{(product.originalPrice - product.price).toLocaleString()}
              </div>
            )}
          </div>

          {/* Delivery Info */}
          <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-green-600 font-medium">Free Delivery</span>
            </div>
            <span>2-3 days</span>
          </div>
        </div>
      </div>
    </Link>
  );
}