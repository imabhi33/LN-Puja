export default function SpecialOffers() {
  const offers = [
    {
      id: 1,
      title: "Festival Special",
      subtitle: "Up to 50% OFF on all decorations",
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=600&h=300&fit=crop",
      cta: "Shop Now",
      bgColor: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Free Shipping",
      subtitle: "On orders above ₹500",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop",
      cta: "Explore",
      bgColor: "from-blue-600 to-indigo-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Special Offers</h2>
          <p className="text-gray-600">Don't miss out on these amazing deals</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div
                className="h-64 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${offer.image})` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${offer.bgColor} opacity-80`}></div>
                <div className="relative z-10 h-full flex items-center justify-center text-center text-white p-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{offer.title}</h3>
                    <p className="text-xl mb-6 opacity-90">{offer.subtitle}</p>
                    <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
                      {offer.cta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Our Latest Offers</h3>
          <p className="mb-6 opacity-90">Subscribe to our newsletter and never miss a deal</p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-orange-500 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}