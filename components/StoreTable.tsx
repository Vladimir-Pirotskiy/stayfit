'use client'

import { Store } from '@/lib/actions'

export default function StoreTable({ stores }: { stores: Store[] }) {
  return (
    <div className="table-responsive relative">
      <table className="min-w-full table-auto border-collapse bg-background shadow-md relative">
        <thead>
          <tr className="bg-gray-800 text-left text-gray-300">
            <th className="p-4 border-b border-gray-700">Store Name</th>
            <th className="p-4 border-b border-gray-700">Description</th>
          </tr>
        </thead>
        <tbody>
          {stores.map((store) => (
            <tr
              key={store.id}
              className="border-b border-gray-700 transition-colors duration-200 hover:bg-gray-800"
            >
              <td className="p-4 text-gray-300">{store.name}</td>
              <td className="p-4 text-gray-300">
                {store.description || 'No description available'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
