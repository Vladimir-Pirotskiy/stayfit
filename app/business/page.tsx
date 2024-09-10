import ActionButtons from '@/components/ActionButtons'
import Heading from '@/components/Heading'
import SearchInput from '@/components/SearchInput'

export default function Business() {
  return (
    <div className="flex justify-content-between  items-center">
      <Heading title={'Businesses'} />
      <div className="flex items-center justify-center gap-3">
        <SearchInput />
        <ActionButtons />
      </div>
    </div>
  )
}
