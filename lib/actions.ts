import axios from 'axios'
import { API_BASE_URL } from './config' // Импортируем URL из config

export type Category = {
  id: number
  name: string
}

export async function fetchCategories(): Promise<Category[]> {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/vip/api/stores/categories/`
    )

    return response.data
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw new Error('Failed to fetch categories')
  }
}

export async function addCategory(name: string): Promise<Category> {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/vip/api/stores/categories/`,
      {
        name: name,
      }
    )

    return response.data
  } catch (error) {
    console.error('Error adding category:', error)
    throw new Error('Failed to add category')
  }
}
