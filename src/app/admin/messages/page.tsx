'use client';

import AdminPageTemplate from '@/components/admin/AdminPageTemplate';

const mockData = [
  { id: 'M001', name: 'Ravi Kumar', email: 'ravi@example.com', message: 'Need bus details for Tirupati trip...', received: '2026-06-10', read: 'No' },
  { id: 'M002', name: 'Sneha Reddy', email: 'sneha@example.com', message: 'Looking for corporate travel package...', received: '2026-06-11', read: 'Yes' },
  { id: 'M003', name: 'Arun', email: 'arun@example.com', message: 'Cab booking for airport pickup...', received: '2026-06-12', read: 'No' },
];

export default function MessagesPage() {
  return (
    <AdminPageTemplate
      title="Messages"
      description="View customer inquiries"
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'message', label: 'Message' },
        { key: 'received', label: 'Received' },
        { key: 'read', label: 'Read', render: (val: string) => (
          <span className={`text-xs px-2 py-1 rounded-full ${val === 'No' ? 'bg-yellow-50 text-yellow-600' : 'bg-green-50 text-green-600'}`}>
            {val}
          </span>
        )},
      ]}
      data={mockData}
    />
  );
}
