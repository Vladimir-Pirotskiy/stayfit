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
      {/*<div className="card bg-gray-700">*/}
      {/*  <div className="card-header">*/}
      {/*    <h3 className="card-title text-white text-xl">Categories</h3>*/}
      {/*  </div>*/}
      {/*  <div className="list-group list-group-flush">*/}
      {/*    {categories.map((category) => (*/}
      {/*      <Link*/}
      {/*        key={category.id}*/}
      {/*        href={`/stores/${category.id}`}*/}
      {/*        className="text-white list-group-item list-group-item-action"*/}
      {/*      >*/}
      {/*        {category.name}*/}
      {/*      </Link>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</div>*/}
      <table className="min-w-full table-auto border-collapse bg-background shadow-md relative">
        <thead>
          <tr className="bg-gray-800 text-left text-gray-300">
            {/*<th className="p-4 border-b border-gray-700">Company</th>*/}
            <th className="p-4 border-b border-gray-700 text-xl">Category</th>
            {/*<th className="p-4 border-b border-gray-700">Group</th>*/}
            {/*<th className="p-4 border-b border-gray-700">Subcategory</th>*/}
            {/*<th className="p-4 border-b border-gray-700">City/Country</th>*/}
            {/*<th className="p-4 border-b border-gray-700">Date Registered</th>*/}
            {/*<th className="p-4 w-1 border-b border-gray-700">Action</th>*/}
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr
              key={category.id}
              className="border-b border-gray-700 transition-colors duration-200 hover:bg-gray-800"
            >
              {/*<td className="p-4 text-gray-300">{'N/A'}</td>*/}

              <td
                className="p-4 text-gray-300 cursor-pointer hover:text-blue-400"
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.name ?? 'N/A'}
              </td>

              {/*<td className="p-4 text-gray-300">{'N/A'}</td>*/}
              {/*<td className="p-4 text-gray-300">{'N/A'}</td>*/}
              {/*<td className="p-4 text-gray-300">{'N/A'}</td>*/}
              {/*<td className="p-4 text-gray-300">{'N/A'}</td>*/}
              {/*<td className="p-4 text-right relative">*/}
              {/*  <IconDotsVertical*/}
              {/*    className="text-gray-500 hover:text-white transition-colors duration-200 cursor-pointer z-10" />*/}
              {/*</td>*/}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
