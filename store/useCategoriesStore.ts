import { Category } from '@/lib/actions'
import { create } from 'zustand'

type CategoriesState = {
  categories: Category[]
  setInitialCategories: (categories: Category[]) => void
  addCategory: (category: Category) => void
}

export const useCategoriesStore = create<CategoriesState>((set) => ({
  categories: [],

  setInitialCategories: (categories) => set({ categories }),

  addCategory: (category) =>
    set((state) => ({
      categories: [...state.categories, category],
    })),
}))
