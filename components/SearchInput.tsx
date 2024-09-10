'use client'

import { IconSearch, IconXboxXFilled } from '@tabler/icons-react'
import { useDeferredValue, useState } from 'react'

export default function SearchInput() {
  const [searchValue, setSearchValue] = useState('')
  const deferredSearchValue = useDeferredValue(searchValue)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const clearInput = () => {
    setSearchValue('')
  }

  console.log('Debounced value:', deferredSearchValue)

  return (
    <div className="relative border-neutralGray flex items-center">
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        className="form-control form-control bg-neutralGray text-neutral-500 pr-10"
        placeholder="ID / Keyword"
      />
      {searchValue ? (
        <button
          type="button"
          onClick={clearInput}
          className="absolute right-2 text-neutral-500 hover:text-neutral-700"
        >
          <IconXboxXFilled />
        </button>
      ) : (
        <span className="absolute right-2 text-neutral-500">
          <IconSearch />
        </span>
      )}
    </div>
  )
}
