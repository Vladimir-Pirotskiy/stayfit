'use client'

import { addCategory as addCategoryAPI } from '@/lib/actions'
import { useCategoriesStore } from '@/store/useCategoriesStore'
import { gsap } from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

type AddBusinessModalProps = {
  isOpen: boolean
  toggleModal: () => void
}

type FormData = {
  category: string
}

export default function AddBusinessModal({
  isOpen,
  toggleModal,
}: AddBusinessModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const [isVisible, setIsVisible] = useState(false)

  const { addCategory, isLoading, setLoading } = useCategoriesStore(
    (state) => ({
      addCategory: state.addCategory,
      isLoading: state.isLoading,
      setLoading: state.setLoading,
    })
  )
  const onSubmit = async (data: FormData) => {
    setLoading(true)
    try {
      const newCategory = await addCategoryAPI(data.category)
      addCategory(newCategory)
      toggleModal()
    } catch (error) {
      console.error('Error adding category:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' }
      )
    } else if (!isOpen && isVisible) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: 'power3.in',
        onComplete: () => setIsVisible(false),
      })
    }
  }, [isOpen, isVisible])

  return (
    isVisible && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
        <div
          ref={modalRef}
          className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 w-full max-w-lg rounded-lg shadow-lg"
        >
          <div className="modal-header p-4 border-b border-gray-700">
            <h5 className="text-xl font-bold text-gray-100">
              Add New Category
            </h5>
          </div>

          <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-gray-300 font-bold mb-2"
                htmlFor="category"
              >
                Category name
              </label>
              <input
                type="text"
                id="category"
                {...register('category', { required: true })}
                className={`w-full px-4 py-2 border border-gray-600 bg-gray-900 text-gray-100 rounded-lg focus:outline-none focus:border-blue-500 ${
                  errors.category ? 'border-red-500' : ''
                }`}
                placeholder="Enter business category"
              />
              {errors.category && (
                <span className="text-red-500 text-sm">
                  Category name is required
                </span>
              )}
            </div>

            <div className="modal-footer flex justify-end mt-4">
              <button
                type="button"
                className="btn btn-danger px-4 py-2 bg-red-500 text-white rounded mr-2"
                onClick={toggleModal}
                disabled={isLoading}
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary px-4 py-2 !bg-secondary text-white rounded flex items-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    ></span>
                    Saving...
                  </>
                ) : (
                  'Save changes'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  )
}
