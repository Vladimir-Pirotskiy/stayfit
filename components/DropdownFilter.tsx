'use client'
import { useDropdownStore } from '@/store/useDropdownStore'
import { useEffect, useRef } from 'react'

type DropdownFilterProps = {
  label: string
  dropdownKey: string
  options: string[]
}

export default function DropdownFilter({
  label,
  dropdownKey,
  options,
}: DropdownFilterProps) {
  const openDropdownKey = useDropdownStore((state) => state.openDropdownKey)
  const setOpenDropdown = useDropdownStore((state) => state.setOpenDropdown)

  const isOpen = openDropdownKey === dropdownKey

  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleToggle = () => {
    setOpenDropdown(isOpen ? null : dropdownKey)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, setOpenDropdown])

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        className="btn dropdown-toggle bg-foreground hover:bg-gray-700 border border-gray-600 text-white rounded-full px-4 py-2"
        onClick={handleToggle}
      >
        {label}
      </button>
      {isOpen && (
        <div className="absolute mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10 w-48">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => setOpenDropdown(null)}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-600 hover:text-white"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
