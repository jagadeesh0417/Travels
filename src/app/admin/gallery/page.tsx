'use client';

import AdminPageTemplate from '@/components/admin/AdminPageTemplate';

const mockData = [
  { id: 'G001', image: 'Fleet 01', category: 'Fleet', uploaded: '2026-06-01', status: 'Published' },
  { id: 'G002', image: 'Destination 01', category: 'Destinations', uploaded: '2026-06-02', status: 'Published' },
  { id: 'G003', image: 'Fleet 02', category: 'Fleet', uploaded: '2026-06-03', status: 'Draft' },
  { id: 'G004', image: 'Destination 02', category: 'Destinations', uploaded: '2026-06-05', status: 'Published' },
];

export default function GalleryPage() {
  return (
    <AdminPageTemplate
      title="Gallery"
      description="Manage media and gallery images"
      columns={[
        { key: 'image', label: 'Image' },
        { key: 'category', label: 'Category' },
        { key: 'uploaded', label: 'Uploaded' },
        { key: 'status', label: 'Status', render: (val: string) => (
          <span className={`text-xs px-2 py-1 rounded-full ${val === 'Published' ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-600'}`}>
            {val}
          </span>
        )},
      ]}
      data={mockData}
    />
  );
}
