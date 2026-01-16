import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useToast } from '../components/ToastContext';
import { authService } from '../services/authService';

export default function Signup() {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { showToast } = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await authService.signup(form);
            showToast("Signup successful! Please login.", 'success');
            navigate('/login');
        } catch (err) {
            console.error('Signup error:', err);
            showToast(err.response?.data?.message || 'Signup failed. Please try again.', 'error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-4">
            <div className="w-full max-w-md">
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 transform transition-all duration-500 hover:scale-[1.02]">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
                            Create Account
                        </h2>
                        <p className="text-gray-600 font-medium">
                            Join our community and start your spiritual journey!
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 placeholder:text-gray-400 text-gray-700"
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 placeholder:text-gray-400 text-gray-700"
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    required
                                    placeholder="Enter your password (min 6 characters)"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 placeholder:text-gray-400 text-gray-700"
                                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3.5 px-4 rounded-xl font-semibold text-white transition-all duration-300 transform ${
                                loading 
                                    ? 'bg-gray-400 cursor-not-allowed' 
                                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]'
                            }`}
                        >
                            {loading ? 'Creating Account...' : 'Sign Up'}
                        </button>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Already have an account?{' '}
                                <Link 
                                    to="/login" 
                                    className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors"
                                >
                                    Sign in here
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}