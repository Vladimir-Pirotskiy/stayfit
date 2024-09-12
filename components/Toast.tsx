'use client'

import { useEffect, useState } from 'react'

type ToastProps = {
  errorMessage?: string
}

export default function Toast({ errorMessage }: ToastProps) {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    if (errorMessage) {
      console.log('Error message received:', errorMessage)
      setShowToast(true)
      const timer = setTimeout(() => {
        setShowToast(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [errorMessage])

  if (!showToast) return null

  return (
    <div
      className="fixed bottom-4 right-4 bg-gray-500 text-white border border-gray-400 shadow-lg shadow-gray-300/50 rounded-lg transition-opacity duration-300 opacity-100"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header flex justify-between items-center p-2 border-b border-gray-400">
        <strong className="text-white">Error</strong>
      </div>
      <div className="toast-body p-3 text-white">{errorMessage}</div>
    </div>
  )
}
