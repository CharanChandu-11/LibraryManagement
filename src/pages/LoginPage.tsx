import React, { useState } from 'react';

export function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log('User logged in with email:', email);
      setLoading(false);
      onLogin(); 
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-md space-y-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out"
              placeholder="Enter your password"
              required
              minLength={6}
            />
            <p className="text-sm text-gray-500 mt-1">Password must be at least 6 characters long.</p>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Don't have an account?{' '}
          <a href="#" className="text-indigo-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
