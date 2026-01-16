import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import FeaturedProducts from '../components/FeaturedProducts';
import SpecialOffers from '../components/SpecialOffers';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
        <SpecialOffers />
      </main>
      <Footer />
    </div>
  );
}
