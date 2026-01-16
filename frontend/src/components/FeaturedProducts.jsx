import { useState } from 'react';
import ProductCard from './ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: "Brass Ganesha Idol",
    price: 2499,
    originalPrice: 3499,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 124,
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Complete Puja Thali Set",
    price: 1299,
    originalPrice: 1899,
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 89,
    badge: "New"
  },
  {
    id: 3,
    name: "Sandalwood Incense Sticks",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 256,
    badge: "Popular"
  },
  {
    id: 4,
    name: "Marble Krishna Idol",
    price: 4999,
    originalPrice: 6999,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 67,
    badge: "Premium"
  },
  {
    id: 5,
    name: "Diya Oil Lamps Set",
    price: 599,
    originalPrice: 799,
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 143,
    badge: "Festival Special"
  },
  {
    id: 6,
    name: "Rudraksha Mala",
    price: 899,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 98,
    badge: "Authentic"
  }
];

export default function FeaturedProducts() {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 4;
  const totalPages = Math.ceil(featuredProducts.length / productsPerPage);

  const getCurrentProducts = () => {
    const start = currentPage * productsPerPage;
    return featuredProducts.slice(start, start + productsPerPage);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-gray-600">Handpicked items for your spiritual journey</p>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-sm text-gray-600">
              {currentPage + 1} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getCurrentProducts().map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}