import { Virtuoso } from 'react-virtuoso'
import { memo } from 'react'
import { ProductItem } from '@/mocks/products'

// Adiciona uma nova prop 'onProductClick' para o tipo de props do componente ProductsList
export default function ProductsList({
  items,
  onProductClick,
}: {
  items: ProductItem[]
  onProductClick: (productId: string) => void
}) {
  const InnerItem = memo(
    ({ data }: { index: number; data: ProductItem }) => {
       const handleClick = () => {
        if (onProductClick) {
          onProductClick(data.ID)
        }
      }

      return (
        <button
          className='mb-[2px] flex h-10 w-full items-center rounded px-6 hover:bg-high'
          onClick={handleClick} // Define o evento de clique para chamar o manipulador
        >
          {data.PRODUTO} / {data.MATERIAL}
        </button>
      )
    }
  )

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
