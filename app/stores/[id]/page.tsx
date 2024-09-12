import Filters from '@/components/Filters'
import Heading from '@/components/Heading'
import SearchInput from '@/components/SearchInput'
import StoreTable from '@/components/StoreTable'
import Toast from '@/components/Toast'
import { fetchStoresByCategory, Store } from '@/lib/actions'
import Link from 'next/link'

export default async function Stores({ params }: { params: { id: string } }) {
  const categoryId = params.id
  let stores: Store[] = []
  let total = 0
  let errorMessage: string | undefined = undefined

  try {
    const data = await fetchStoresByCategory(categoryId)
    stores = data.stores
    total = data.total
  } catch (error) {
    errorMessage = 'Failed to load stores. Please try again later.'
  }

  return (
    <>
      <section className="flex justify-between items-center">
        <Heading title={'Stores'} />
        <div className="flex items-center justify-center gap-3">
          <SearchInput />
          <Link
            href="/business"
            className="text-white btn !bg-secondary btn-ghost-dark"
          >
            Go back
          </Link>
        </div>
      </section>

      <section className="px-2 mt-6">
        <Filters />
      </section>

      <section className="px-2 mt-7">
        <StoreTable
          initialStores={stores}
          categoryId={categoryId}
          total={total}
        />
      </section>

      {errorMessage && <Toast errorMessage={errorMessage} />}
    </>
  )
}
