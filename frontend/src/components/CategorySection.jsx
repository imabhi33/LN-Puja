import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: "God Idols",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
    link: "/category/idols",
    description: "Divine sculptures"
  },
  {
    id: 2,
    name: "Puja Items",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=300&h=300&fit=crop",
    link: "/category/puja-items",
    description: "Essential items"
  },
  {
    id: 3,
    name: "Decorations",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=300&h=300&fit=crop",
    link: "/category/decorations",
    description: "Beautiful decor"
  },
  {
    id: 4,
    name: "Incense",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
    link: "/category/incense",
    description: "Aromatic incense"
  },
  {
    id: 5,
    name: "Books",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=300&fit=crop",
    link: "/category/books",
    description: "Sacred texts"
  },
  {
    id: 6,
    name: "Jewelry",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop",
    link: "/category/jewelry",
    description: "Temple ornaments"
  }
];

export default function CategorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of spiritual and religious items
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="group text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 shadow-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}