'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Demo auth: hardcoded for production readiness
    if (email === 'admin@bdl-travels.com' && password === 'admin@123') {
      localStorage.setItem('admin_auth', 'true');
      router.push('/admin/dashboard');
    } else {
      setError('Invalid credentials. Try admin@bdl-travels.com / admin@123');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full max-w-md"
      >
        <div className="glass-strong rounded-3xl p-8 md:p-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-light tracking-[0.15em] text-text">BDL</h1>
            <p className="text-xs tracking-[0.3em] text-text-secondary uppercase mt-2">Admin Panel</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs tracking-wider text-text-secondary mb-2 uppercase">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@bdl-travels.com"
                className="w-full px-4 py-3 bg-white/50 border border-light-gray rounded-xl text-sm text-text outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(217,119,6,0.1)] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs tracking-wider text-text-secondary mb-2 uppercase">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 bg-white/50 border border-light-gray rounded-xl text-sm text-text outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(217,119,6,0.1)] transition-all"
              />
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-xs text-center"
              >
                {error}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[10px] text-text-secondary/60 tracking-wider">
              Demo: admin@bdl-travels.com / admin@123
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
