'use client'

import { fetchStoresByCategory, Store } from '@/lib/actions'
import { useEffect, useState } from 'react'
import Paginator from './Paginator'

type StoreTableProps = {
  initialStores: Store[]
  categoryId: string
  total: number
}

export default function StoreTable({
  initialStores,
  categoryId,
  total: initialTotal,
}: StoreTableProps) {
  const [stores, setStores] = useState<Store[]>(initialStores)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [totalItems, setTotalItems] = useState<number>(initialTotal)

  useEffect(() => {
    const loadStores = async () => {
      try {
        const { stores, total } = await fetchStoresByCategory(
          categoryId,
          currentPage,
          pageSize
        )
        setStores(stores)
        setTotalItems(total)
      } catch (error) {
        console.error('Error fetching stores:', error)
      }
    }

    loadStores()
  }, [categoryId, currentPage, pageSize])

  const totalPages = Math.ceil(totalItems / pageSize)

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
          {stores.length > 0 ? (
            stores.map((store) => (
              <tr
                key={store.id}
                className="border-b border-gray-700 transition-colors duration-200 hover:bg-gray-800"
              >
                <td className="p-4 text-gray-300">{store.name}</td>
                <td className="p-4 text-gray-300">
                  {store.description || 'No description available'}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2} className="p-4 text-center text-gray-400">
                No stores available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        pageSize={pageSize}
        totalItems={totalItems}
        onPageChange={(page) => setCurrentPage(page)}
        onPageSizeChange={(size) => setPageSize(size)}
      />
    </div>
  )
}
