'use client';

import { motion } from 'framer-motion';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Filler } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Filler);

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const lineData = {
  labels: months,
  datasets: [
    {
      label: 'Bookings',
      data: [45, 62, 58, 78, 95, 112, 85, 105, 128, 145, 168, 192],
      borderColor: '#d97706',
      backgroundColor: 'rgba(217, 119, 6, 0.05)',
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#d97706',
      pointRadius: 3,
      borderWidth: 2,
    },
  ],
};

const barData = {
  labels: months,
  datasets: [
    {
      label: 'Revenue (₹L)',
      data: [12, 18, 15, 22, 28, 32, 25, 30, 38, 42, 48, 55],
      backgroundColor: 'rgba(217, 119, 6, 0.6)',
      borderRadius: 4,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: 'rgba(255,255,255,0.9)',
      titleColor: '#111827',
      bodyColor: '#6b7280',
      borderColor: '#e5e7eb',
      borderWidth: 1,
      padding: 12,
      cornerRadius: 8,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: '#9ca3af', font: { size: 11 } },
    },
    y: {
      grid: { color: 'rgba(0,0,0,0.03)' },
      ticks: { color: '#9ca3af', font: { size: 11 } },
    },
  },
};

const topRoutes = [
  { route: 'Hyderabad → Tirupati', bookings: 845, revenue: '₹10.9L' },
  { route: 'Hyderabad → Goa', bookings: 623, revenue: '₹9.9L' },
  { route: 'Hyderabad → Bangalore', bookings: 521, revenue: '₹5.2L' },
  { route: 'Hyderabad → Vizag', bookings: 312, revenue: '₹4.1L' },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-light text-text">Analytics</h1>
        <p className="text-text-secondary text-sm mt-1">Performance metrics and insights</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl p-6"
        >
          <h2 className="text-sm font-medium text-text mb-6">Monthly Bookings</h2>
          <div className="h-[250px]">
            <Line data={lineData} options={chartOptions} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-2xl p-6"
        >
          <h2 className="text-sm font-medium text-text mb-6">Revenue Trend (₹L)</h2>
          <div className="h-[250px]">
            <Bar data={barData} options={chartOptions} />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card rounded-2xl p-6"
      >
        <h2 className="text-sm font-medium text-text mb-6">Top Routes</h2>
        <div className="space-y-4">
          {topRoutes.map((route, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-light-gray/50 last:border-0">
              <div className="flex items-center gap-3">
                <span className="text-xs text-text-secondary w-5">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm text-text font-medium">{route.route}</span>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <span className="text-text-secondary">{route.bookings} bookings</span>
                <span className="text-accent font-medium">{route.revenue}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
