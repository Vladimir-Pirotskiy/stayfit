import ActionButtons from '@/components/ActionButtons'
import BusinessTable from '@/components/BusinessTable'
import Filters from '@/components/Filters'
import Heading from '@/components/Heading'
import SearchInput from '@/components/SearchInput'
import { fetchCategories } from '@/lib/actions'

export default async function Business() {
  const categories = (await fetchCategories()) || []

  return (
    <>
      <section className="flex justify-between items-center">
        <Heading title={'Businesses'} />
        <div className="flex items-center justify-center gap-3">
          <SearchInput />
          <ActionButtons />
        </div>
      </section>

      <section className="px-2 mt-6">
        <Filters />
      </section>

      <section className="px-2 mt-7">
        <BusinessTable initialCategories={categories} />
      </section>
    </>
  )
}
