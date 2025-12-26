import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Lock } from 'lucide-react';

interface PasswordProtectionProps {
  children: React.ReactNode;
}

export function PasswordProtection({ children }: PasswordProtectionProps) {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  // Check if already authenticated in this session
  useEffect(() => {
    const auth = sessionStorage.getItem('portfolio_auth');
    if (auth === 'authenticated') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Password check - you can change this password
    const correctPassword = 'vishal2025'; // Change this to your desired password
    
    if (password === correctPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('portfolio_auth', 'authenticated');
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
              <Lock className="w-8 h-8 text-gray-600" />
            </div>
          </div>
          
          <h1 className="text-2xl text-center mb-2 text-gray-900">Password Protected</h1>
          <p className="text-center text-gray-600 mb-8">
            This content is password protected. Please enter the password to continue.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm mb-2 text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                placeholder="Enter password"
                autoFocus
              />
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 text-sm mt-2"
                >
                  {error}
                </motion.p>
              )}
            </div>

            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Access Content
            </motion.button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have the password? Please{' '}
            <a
              href="mailto:vishal@idyeah.studio"
              className="text-gray-900 hover:text-gray-600 underline transition-colors"
            >
              contact me
            </a>.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
