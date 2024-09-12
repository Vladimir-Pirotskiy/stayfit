import { Category } from '@/lib/actions'
import { create } from 'zustand'

type CategoriesState = {
  categories: Category[]
  isLoading: boolean
  setInitialCategories: (categories: Category[]) => void
  addCategory: (category: Category) => void
  setLoading: (loading: boolean) => void
}

export const useCategoriesStore = create<CategoriesState>((set) => ({
  categories: [],
  isLoading: false,
  setInitialCategories: (categories) => set({ categories }),

  addCategory: (category) =>
    set((state) => ({
      categories: [...state.categories, category],
    })),
  setLoading: (loading) => set({ isLoading: loading }),
}))
