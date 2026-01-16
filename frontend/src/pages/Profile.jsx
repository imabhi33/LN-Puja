import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../components/AuthContext';

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">My Profile</h1>
          {user ? (
            <div>
              <p className="text-gray-600">Welcome, {user.name}!</p>
              <p className="text-gray-600">{user.email}</p>
            </div>
          ) : (
            <p className="text-gray-600">Please login to view your profile</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}