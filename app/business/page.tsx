import ActionButtons from '@/components/ActionButtons'
import Filters from '@/components/Filters'
import Heading from '@/components/Heading'
import SearchInput from '@/components/SearchInput'

export default function Business() {
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
    </>
  )
}
