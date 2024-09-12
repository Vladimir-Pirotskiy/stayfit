'use client'

import { Category } from '@/lib/actions'
import { useCategoriesStore } from '@/store/useCategoriesStore'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function BusinessTable({
  initialCategories,
}: {
  initialCategories: Category[]
}) {
  const { categories, isLoading, setInitialCategories, setLoading } =
    useCategoriesStore((state) => ({
      categories: state.categories,
      isLoading: state.isLoading,
      setInitialCategories: state.setInitialCategories,
      setLoading: state.setLoading,
    }))

  const router = useRouter()

  useEffect(() => {
    setLoading(true)
    setInitialCategories(initialCategories)
    setLoading(false)
  }, [initialCategories, setInitialCategories, setLoading])

  const handleCategoryClick = (categoryId: string) => {
    router.push(`/stores/${categoryId}`)
  }

  return (
    <div className="table-responsive relative h-full">
      <table className="min-w-full table-auto border-collapse bg-background shadow-md relative">
        <thead>
          <tr className="bg-gray-800 text-left text-gray-300">
            <th className="p-4 border-b border-gray-700 text-xl">Category</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={1} className="p-4 text-center">
                <div className="spinner-border !text-secondary" />
              </td>
            </tr>
          ) : categories.length > 0 ? (
            categories.map((category) => (
              <tr
                key={category.id}
                className="border-b border-gray-700 transition-colors duration-200 hover:bg-gray-800"
              >
                <td
                  className="p-4 text-gray-300 cursor-pointer hover:text-blue-400"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  {category.name ?? 'N/A'}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={1} className="p-4 text-center text-gray-400">
                No categories available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
