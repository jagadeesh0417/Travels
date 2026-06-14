'use client';

import AdminPageTemplate from '@/components/admin/AdminPageTemplate';

const mockData = [
  { id: 'U001', name: 'Admin User', email: 'admin@bdl-travels.com', role: 'Admin', joined: '2026-01-01', status: 'Active' },
  { id: 'U002', name: 'Staff User 1', email: 'staff1@bdl-travels.com', role: 'Staff', joined: '2026-02-15', status: 'Active' },
  { id: 'U003', name: 'Staff User 2', email: 'staff2@bdl-travels.com', role: 'Staff', joined: '2026-03-10', status: 'Active' },
];

export default function UsersPage() {
  return (
    <AdminPageTemplate
      title="Users"
      description="Manage admin and staff accounts"
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Role', render: (val: string) => (
          <span className={`text-xs px-2 py-1 rounded-full ${val === 'Admin' ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'}`}>
            {val}
          </span>
        )},
        { key: 'joined', label: 'Joined' },
        { key: 'status', label: 'Status', render: (val: string) => (
          <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-600">{val}</span>
        )},
      ]}
      data={mockData}
    />
  );
}
