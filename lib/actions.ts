import axios from 'axios'
import { API_BASE_URL, API_VIP_BASE_PATH } from './config'

export type Category = {
  id: string
  name: string
}

export type Store = {
  id: string
  name: string
  description?: string
}

export async function fetchCategories(): Promise<Category[]> {
  try {
    const response = await axios.get(
      `${API_BASE_URL}${API_VIP_BASE_PATH}/stores/categories/`
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
      `${API_BASE_URL}${API_VIP_BASE_PATH}/stores/categories/`,
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

export async function fetchStoresByCategory(
  storeCategoryId: string,
  page: number = 1,
  pageSize: number = 10
): Promise<Store[]> {
  try {
    const response = await axios.get(
      `${API_BASE_URL}${API_VIP_BASE_PATH}/stores/by_category/${storeCategoryId}`,
      {
        params: {
          page: page,
          page_size: pageSize,
        },
      }
    )
    return response.data[1]
  } catch (error) {
    console.error('Error fetching stores by category:', error)
    throw new Error('Failed to fetch stores')
  }
}
