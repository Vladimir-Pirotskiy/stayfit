import { create } from 'zustand'

type DropdownStore = {
  openDropdownKey: string | null
  setOpenDropdown: (key: string | null) => void
}

export const useDropdownStore = create<DropdownStore>((set) => ({
  openDropdownKey: null,
  setOpenDropdown: (key: string | null) => set({ openDropdownKey: key }),
}))
