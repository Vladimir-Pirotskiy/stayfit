import { create } from 'zustand'

type CategoriesState = {
  isLoading: boolean
  shouldUpdate: boolean // Флаг для обновления
  setLoading: (loading: boolean) => void
  toggleUpdate: () => void // Функция для инверсии флага
}

export const useCategoriesStore = create<CategoriesState>((set) => ({
  isLoading: false,
  shouldUpdate: false,
  setLoading: (loading: boolean) => set({ isLoading: loading }),
  toggleUpdate: () => set((state) => ({ shouldUpdate: !state.shouldUpdate })), // Инвертируем флаг
}))
