'use client';

import AdminPageTemplate from '@/components/admin/AdminPageTemplate';

const mockData = [
  { id: 'B001', name: 'Ravi Kumar', phone: '+91 9876543210', destination: 'Tirupati', date: '2026-06-15', passengers: 3, status: 'Confirmed', amount: '₹1,299' },
  { id: 'B002', name: 'Sneha Reddy', phone: '+91 9876543211', destination: 'Goa', date: '2026-06-18', passengers: 2, status: 'Pending', amount: '₹1,599' },
  { id: 'B003', name: 'Arun Sharma', phone: '+91 9876543212', destination: 'Bangalore', date: '2026-06-20', passengers: 1, status: 'Confirmed', amount: '₹999' },
  { id: 'B004', name: 'Priya Patel', phone: '+91 9876543213', destination: 'Tirupati', date: '2026-06-22', passengers: 4, status: 'Completed', amount: '₹2,598' },
  { id: 'B005', name: 'Vikram Singh', phone: '+91 9876543214', destination: 'Goa', date: '2026-06-25', passengers: 5, status: 'Cancelled', amount: '₹7,995' },
];

export default function BookingsPage() {
  return (
    <AdminPageTemplate
      title="Bookings"
      description="Manage all customer bookings"
      columns={[
        { key: 'id', label: 'Booking ID' },
        { key: 'name', label: 'Name' },
        { key: 'phone', label: 'Phone' },
        { key: 'destination', label: 'Destination' },
        { key: 'date', label: 'Date' },
        { key: 'passengers', label: 'Pax' },
        {
          key: 'status',
          label: 'Status',
          render: (val: string) => (
            <span className={`text-xs px-2 py-1 rounded-full ${
              val === 'Confirmed' ? 'bg-green-50 text-green-600' :
              val === 'Pending' ? 'bg-yellow-50 text-yellow-600' :
              val === 'Completed' ? 'bg-blue-50 text-blue-600' :
              'bg-red-50 text-red-600'
            }`}>
              {val}
            </span>
          ),
        },
        { key: 'amount', label: 'Amount' },
      ]}
      data={mockData}
    />
  );
}
