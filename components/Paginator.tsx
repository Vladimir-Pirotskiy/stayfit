'use client'

import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { useState } from 'react'

type PaginatorProps = {
  currentPage: number
  totalPages: number
  pageSize: number
  totalItems: number
  onPageChange: (page: number) => void
  onPageSizeChange: (size: number) => void
}

export default function Paginator({
  currentPage,
  totalPages,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange,
}: PaginatorProps) {
  const [localPageSize, setLocalPageSize] = useState(pageSize)

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = Number(e.target.value)
    setLocalPageSize(newSize)
    onPageSizeChange(newSize)
  }

  return (
    <div className="flex justify-between items-center mt-4">
      <div className="text-sm text-gray-400">
        Showing{' '}
        <span className="font-medium">{(currentPage - 1) * pageSize + 1}</span>{' '}
        to{' '}
        <span className="font-medium">
          {Math.min(currentPage * pageSize, totalItems)}
        </span>{' '}
        of <span className="font-medium">{totalItems}</span> results
      </div>

      <div className="flex items-center">
        <nav aria-label="Pagination" className="inline-flex space-x-1">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-500 bg-gray-800 border border-gray-700 rounded-l-md hover:bg-gray-700 disabled:opacity-50"
          >
            <IconChevronLeft className="h-4 w-4" />
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => onPageChange(index + 1)}
              className={`inline-flex items-center px-3 py-1 text-sm font-medium ${
                currentPage === index + 1
                  ? '!bg-primary text-white'
                  : 'text-gray-400 bg-gray-800 hover:bg-gray-700'
              } border border-gray-700`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-500 bg-gray-800 border border-gray-700 rounded-r-md hover:bg-gray-700 disabled:opacity-50"
          >
            <IconChevronRight className="h-4 w-4" />
          </button>
        </nav>

        <div className="ml-4">
          <label
            htmlFor="pageSize"
            className="text-sm font-medium text-gray-400"
          >
            Items per page:
          </label>
          <select
            id="pageSize"
            value={localPageSize}
            onChange={handlePageSizeChange}
            className="ml-2 border border-gray-600 bg-gray-800 text-white py-2 px-3 text-sm leading-5 focus:border-primary focus:ring-primary rounded-md shadow-sm"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
      </div>
    </div>
  )
}
