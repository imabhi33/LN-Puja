import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Shopping Cart</h1>
          <p className="text-gray-600">Your cart is empty</p>
          <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors">
            Continue Shopping
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}