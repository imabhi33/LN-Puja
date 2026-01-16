import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Category() {
  const { category } = useParams();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 capitalize">
            {category?.replace('-', ' ')} Category
          </h1>
          <p className="text-gray-600">Products coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}