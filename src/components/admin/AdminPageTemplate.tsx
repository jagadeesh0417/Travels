'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Column {
  key: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (value: any, row: any) => React.ReactNode;
}

interface AdminPageTemplateProps {
  title: string;
  description?: string;
  columns: Column[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  onAdd?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onEdit?: (item: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onDelete?: (item: any) => void;
}

export default function AdminPageTemplate({
  title,
  description,
  columns,
  data,
  onAdd,
  onEdit,
  onDelete,
}: AdminPageTemplateProps) {
  const [search, setSearch] = useState('');

  const filtered = data.filter((row) =>
    Object.values(row).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-light text-text">{title}</h1>
          {description && <p className="text-text-secondary text-sm mt-1">{description}</p>}
        </div>
        <div className="flex gap-3">
          <button
            onClick={onAdd}
            className="btn-primary text-sm py-2 px-5"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add New
          </button>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-4 md:p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-secondary border border-light-gray rounded-xl text-sm text-text outline-none focus:border-accent transition-all"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-3 py-2.5 bg-secondary border border-light-gray rounded-xl text-sm text-text outline-none focus:border-accent">
              <option>All Status</option>
              <option>Active</option>
              <option>Pending</option>
            </select>
            <button className="px-4 py-2.5 bg-secondary border border-light-gray rounded-xl text-sm text-text hover:bg-accent/5 transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-text-secondary text-xs uppercase tracking-wider border-b border-light-gray">
                <th className="pb-3 font-medium w-8">
                  <input type="checkbox" className="rounded border-light-gray" />
                </th>
                {columns.map((col) => (
                  <th key={col.key} className="pb-3 font-medium px-3">{col.label}</th>
                ))}
                <th className="pb-3 font-medium text-right px-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, i) => (
                <motion.tr
                  key={row.id || i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.02 }}
                  className="border-b border-light-gray/50 hover:bg-secondary/50 transition-colors"
                >
                  <td className="py-3">
                    <input type="checkbox" className="rounded border-light-gray" />
                  </td>
                  {columns.map((col) => (
                    <td key={col.key} className="py-3 px-3 text-text">
                      {col.render ? col.render(row[col.key], row) : String(row[col.key])}
                    </td>
                  ))}
                  <td className="py-3 px-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => onEdit?.(row)}
                        className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center text-text-secondary hover:text-accent transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => onDelete?.(row)}
                        className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center text-text-secondary hover:text-red-500 transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-text-secondary text-sm">No data found</div>
          )}
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-light-gray">
          <p className="text-xs text-text-secondary">{filtered.length} entries</p>
          <div className="flex gap-1">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`w-8 h-8 rounded-lg text-xs transition-colors ${
                  page === 1 ? 'bg-accent text-white' : 'bg-secondary text-text-secondary hover:bg-light-gray'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
