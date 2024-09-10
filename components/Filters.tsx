'use client'

import DropdownFilter from './DropdownFilter'

export default function Filters() {
  const filterOptions = ['Option 1', 'Option 2']

  return (
    <div className="flex gap-4 items-center">
      <DropdownFilter
        label="Category"
        dropdownKey="category"
        options={filterOptions}
      />
      <DropdownFilter
        label="Subcategory"
        dropdownKey="subcategory"
        options={filterOptions}
      />
      <DropdownFilter
        label="Status"
        dropdownKey="status"
        options={filterOptions}
      />
      <DropdownFilter
        label="Country"
        dropdownKey="country"
        options={filterOptions}
      />
      <DropdownFilter label="City" dropdownKey="city" options={filterOptions} />
      <DropdownFilter
        label="Date registered"
        dropdownKey="date-registered"
        options={filterOptions}
      />
      <button className="text-gray-300 hover:underline">Clear All</button>
    </div>
  )
}
