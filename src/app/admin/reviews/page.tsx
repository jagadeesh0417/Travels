'use client';

import AdminPageTemplate from '@/components/admin/AdminPageTemplate';

const mockData = [
  { id: 'R001', name: 'Arun Sharma', rating: '★★★★★', content: 'Excellent service! Highly recommend...', date: '2026-06-10', approved: 'Yes' },
  { id: 'R002', name: 'Priya Patel', rating: '★★★★★', content: 'Best travel agency, seamless booking...', date: '2026-06-11', approved: 'Yes' },
  { id: 'R003', name: 'Rahul Verma', rating: '★★★★☆', content: 'Great trip, very comfortable...', date: '2026-06-12', approved: 'No' },
];

export default function ReviewsPage() {
  return (
    <AdminPageTemplate
      title="Reviews"
      description="Manage customer reviews"
      columns={[
        { key: 'name', label: 'Customer' },
        { key: 'rating', label: 'Rating' },
        { key: 'content', label: 'Review' },
        { key: 'date', label: 'Date' },
        { key: 'approved', label: 'Approved', render: (val: string) => (
          <span className={`text-xs px-2 py-1 rounded-full ${val === 'Yes' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'}`}>
            {val}
          </span>
        )},
      ]}
      data={mockData}
    />
  );
}
