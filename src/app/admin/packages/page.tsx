'use client';

import AdminPageTemplate from '@/components/admin/AdminPageTemplate';

const mockData = [
  { id: 'P001', title: 'Tirupati Divine Journey', price: '₹1,299', duration: '2 Days', destinations: 'Hyderabad → Tirupati', status: 'Active' },
  { id: 'P002', title: 'Goa Beach Escape', price: '₹1,599', duration: '3 Days', destinations: 'Hyderabad → Goa', status: 'Active' },
  { id: 'P003', title: 'Bangalore Business Trip', price: '₹999', duration: '1 Day', destinations: 'Hyderabad → Bangalore', status: 'Active' },
  { id: 'P004', title: 'South India Explorer', price: '₹3,999', duration: '7 Days', destinations: 'Hyderabad → Bangalore → Goa', status: 'Draft' },
];

export default function PackagesPage() {
  return (
    <AdminPageTemplate
      title="Packages"
      description="Manage tour packages and pricing"
      columns={[
        { key: 'title', label: 'Package' },
        { key: 'price', label: 'Price' },
        { key: 'duration', label: 'Duration' },
        { key: 'destinations', label: 'Route' },
        { key: 'status', label: 'Status', render: (val: string) => (
          <span className={`text-xs px-2 py-1 rounded-full ${val === 'Active' ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-600'}`}>
            {val}
          </span>
        )},
      ]}
      data={mockData}
    />
  );
}
