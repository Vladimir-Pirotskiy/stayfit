import Filters from '@/components/Filters'
import Heading from '@/components/Heading'
import SearchInput from '@/components/SearchInput'
import StoreTable from '@/components/StoreTable'
import { fetchStoresByCategory } from '@/lib/actions'
import Link from 'next/link'

export default async function Stores({ params }: { params: { id: string } }) {
  const categoryId = params.id
  const stores = await fetchStoresByCategory(categoryId)

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
        <StoreTable stores={stores} />
      </section>
    </>
  )
}
