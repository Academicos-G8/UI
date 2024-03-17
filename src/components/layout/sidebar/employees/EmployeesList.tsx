import { People } from '@/components/interface/people'
import { memo } from 'react'
import { Virtuoso } from 'react-virtuoso'

// Adiciona uma nova prop 'onProductClick' para o tipo de props do componente ProductsList
export default function EmployeesList({
  items,
  onProductClick,
}: {
  items: People[]
  onProductClick: (productId: string) => void
}) {
  const InnerItem = memo(
    ({ data }: { index: number; data: People }) => {
      const handleClick = () => {
        if (onProductClick) {
          onProductClick(data.name)
        }
      }

      return (
        <button
          className='mb-[2px] flex h-10 w-full items-center rounded px-6 hover:bg-high'
          onClick={handleClick}
        >
          {data.name}
        </button>
      )
    }
  )

  const itemContent = (index: number, data: People) => {
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
