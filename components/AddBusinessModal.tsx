'use client'

type AddBusinessModalProps = {
  isOpen: boolean
  toggleModal: () => void
}

export default function AddBusinessModal({
  isOpen,
  toggleModal,
}: AddBusinessModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-gradient-to-r from-gray-800 via-gray-700a to-gray-800 w-full max-w-lg rounded-lg shadow-lg">
        <div className="modal-header p-4 border-b border-gray-700">
          <h5 className="text-xl font-bold text-gray-100">Add New Category</h5>
        </div>
        <form className="p-4">
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
              className="w-full px-4 py-2 border border-gray-600 bg-gray-900 text-gray-100 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter business category"
            />
          </div>

          <div className="modal-footer flex justify-end mt-4">
            <button
              type="button"
              className="btn btn-danger px-4 py-2 bg-red-500 text-white rounded mr-2"
              onClick={toggleModal}
            >
              Close
            </button>
            <button
              type="submit"
              className="btn btn-primary px-4 py-2 !bg-secondary text-white rounded"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
