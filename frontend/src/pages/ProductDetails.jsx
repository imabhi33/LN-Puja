import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Details</h1>
          <p className="text-gray-600">Product ID: {id}</p>
          <p className="text-gray-600 mt-2">Coming Soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}