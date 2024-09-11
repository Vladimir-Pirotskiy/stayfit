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
  const { categories, setInitialCategories } = useCategoriesStore((state) => ({
    categories: state.categories,
    setInitialCategories: state.setInitialCategories,
  }))

  const router = useRouter()

  useEffect(() => {
    setInitialCategories(initialCategories)
  }, [initialCategories, setInitialCategories])

  const handleCategoryClick = (categoryId: string) => {
    router.push(`/stores/${categoryId}`)
  }

  return (
    <div className="table-responsive relative">
      <table className="min-w-full table-auto border-collapse bg-background shadow-md relative">
        <thead>
          <tr className="bg-gray-800 text-left text-gray-300">
            <th className="p-4 border-b border-gray-700 text-xl">Category</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
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
          ))}
        </tbody>
      </table>
    </div>
  )
}
