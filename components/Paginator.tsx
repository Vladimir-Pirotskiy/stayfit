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

  const getPages = () => {
    const pages = []
    const maxVisiblePages = 5
    const halfRange = Math.floor(maxVisiblePages / 2)

    const startPage = Math.max(1, currentPage - halfRange)
    const endPage = Math.min(totalPages, currentPage + halfRange)

    if (startPage > 1) {
      pages.push(1)
      if (startPage > 2) pages.push('...')
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pages.push('...')
      pages.push(totalPages)
    }

    return pages
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
        of <span className="font-medium">{totalItems}</span> items
      </div>

      <div className="flex items-center space-x-2 ml-auto">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1 || totalItems === 0}
          className="p-2 disabled:opacity-50"
        >
          <IconChevronLeft className="!text-secondary" />
        </button>

        {getPages().map((page, index) =>
          typeof page === 'number' ? (
            <button
              key={index}
              onClick={() => onPageChange(page)}
              className={`px-2 py-1 ${page === currentPage ? '!bg-primary text-white ' : 'text-gray-500'}`}
            >
              {page}
            </button>
          ) : (
            <span key={index} className="px-3 py-1 text-gray-500">
              ...
            </span>
          )
        )}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages || totalItems === 0}
          className="p-2 disabled:opacity-50"
        >
          <IconChevronRight className="!text-secondary" />
        </button>
      </div>

      <div className="text-sm">
        <select
          value={localPageSize}
          onChange={handlePageSizeChange}
          className="p-1 bg-gray-800 text-gray-300 border border-gray-600 rounded"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
    </div>
  )
}
