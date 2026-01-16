import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: "Divine Collection",
    subtitle: "Handcrafted spiritual items for your sacred space",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop",
    cta: "Explore Now"
  },
  {
    id: 2,
    title: "Puja Essentials",
    subtitle: "Everything you need for your spiritual journey",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&h=600&fit=crop",
    cta: "Shop Now"
  },
  {
    id: 3,
    title: "Festival Collection",
    subtitle: "Make your celebrations more meaningful",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=1200&h=600&fit=crop",
    cta: "Discover"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[500px] overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-6 text-white">
                <div className="max-w-2xl">
                  <h1 className="text-5xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl mb-8 text-gray-200">
                    {slide.subtitle}
                  </p>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Simple Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}