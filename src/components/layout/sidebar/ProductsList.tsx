import { Virtuoso } from 'react-virtuoso'
import { type ProductItem } from '@/mocks/products'
import { memo } from 'react'

export default function ProductsList({ items }: { items: ProductItem[] }) {
  // Item contents are cached properly with React.memo
  const InnerItem = memo(({ data }: { index: number; data: ProductItem }) => {
    return (
      <button className='hover:bg-high mb-[2px] flex h-10 w-full items-center rounded px-6'>
        {data.PRODUTO} / {data.MATERIAL}
      </button>
    )
  })

  // The callback is executed often - don't inline complex components in here.
  const itemContent = (index: number, data: ProductItem) => {
    return <InnerItem index={index} data={data} />
  }

  return (
    <Virtuoso
      style={{ height: '100%' }}
      data={items}
      totalCount={(items && items.length) ?? 0}
      itemContent={(index, data) => itemContent(index, data)}
    />
  )
}
