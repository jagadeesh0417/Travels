'use client';

import { motion } from 'framer-motion';

const statsCards = [
  { label: 'Total Bookings', value: '2,847', change: '+12.5%', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4', color: 'text-accent' },
  { label: 'Active Users', value: '1,423', change: '+8.2%', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', color: 'text-blue-500' },
  { label: 'Tours Completed', value: '1,892', change: '+15.3%', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', color: 'text-green-500' },
  { label: 'Revenue', value: '₹84.2L', change: '+22.1%', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'text-emerald-500' },
];

const recentBookings = [
  { id: 'B001', name: 'Ravi Kumar', destination: 'Tirupati', date: '2026-06-15', status: 'confirmed', amount: '₹1,299' },
  { id: 'B002', name: 'Sneha Reddy', destination: 'Goa', date: '2026-06-18', status: 'pending', amount: '₹1,599' },
  { id: 'B003', name: 'Arun Sharma', destination: 'Bangalore', date: '2026-06-20', status: 'confirmed', amount: '₹999' },
  { id: 'B004', name: 'Priya Patel', destination: 'Tirupati', date: '2026-06-22', status: 'completed', amount: '₹1,299' },
];

export default function DashboardContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-light text-text">Dashboard</h1>
        <p className="text-text-secondary text-sm mt-1">Welcome back, Admin</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {statsCards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <svg className={`w-5 h-5 ${card.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={card.icon} />
                </svg>
              </div>
              <span className="text-xs text-green-500 font-medium">{card.change}</span>
            </div>
            <p className="text-2xl md:text-3xl font-light text-text">{card.value}</p>
            <p className="text-xs text-text-secondary mt-1">{card.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card rounded-2xl p-6"
        >
          <h2 className="text-lg font-medium text-text mb-4">Recent Bookings</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-text-secondary text-xs uppercase tracking-wider">
                  <th className="pb-3 font-medium">ID</th>
                  <th className="pb-3 font-medium">Name</th>
                  <th className="pb-3 font-medium">Destination</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((b) => (
                  <tr key={b.id} className="border-t border-light-gray/50">
                    <td className="py-3 text-text font-medium">{b.id}</td>
                    <td className="py-3 text-text">{b.name}</td>
                    <td className="py-3 text-text-secondary">{b.destination}</td>
                    <td className="py-3">
                      <span className={`text-xs px-2.5 py-1 rounded-full ${
                        b.status === 'confirmed' ? 'bg-green-50 text-green-600' :
                        b.status === 'pending' ? 'bg-yellow-50 text-yellow-600' :
                        'bg-blue-50 text-blue-600'
                      }`}>
                        {b.status}
                      </span>
                    </td>
                    <td className="py-3 text-text text-right">{b.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card rounded-2xl p-6"
        >
          <h2 className="text-lg font-medium text-text mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Add Package', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6', color: 'text-accent bg-accent/5' },
              { label: 'View Messages', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', color: 'text-blue-500 bg-blue-50' },
              { label: 'Manage Users', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197', color: 'text-green-500 bg-green-50' },
              { label: 'Export Data', icon: 'M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', color: 'text-purple-500 bg-purple-50' },
            ].map((action) => (
              <button key={action.label} className="glass-card rounded-xl p-4 text-left hover:bg-accent/5 transition-all">
                <div className={`w-8 h-8 rounded-lg ${action.color} flex items-center justify-center mb-3`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={action.icon} />
                  </svg>
                </div>
                <p className="text-sm font-medium text-text">{action.label}</p>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
