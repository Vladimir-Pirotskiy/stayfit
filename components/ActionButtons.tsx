'use client'

import AddBusinessModal from '@/components/AddBusinessModal'
import { useState } from 'react'

export default function ActionButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className="flex gap-3">
      <button className="!text-primary bg-neutralGray btn btn-ghost-light !border-primary">
        Bulk upload
      </button>
      <button
        className="text-white btn !bg-secondary btn-ghost-dark"
        onClick={toggleModal}
      >
        Add business
      </button>

      {isModalOpen && (
        <AddBusinessModal isOpen={isModalOpen} toggleModal={toggleModal} />
      )}
    </div>
  )
}
