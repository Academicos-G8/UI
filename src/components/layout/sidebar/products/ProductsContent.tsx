import { Products } from '@/components/interface/products'
import Input from '@/components/ui/Input'
import { useAppDispatch } from '@/store'
import { setSelectedProduct } from '@/store/reducers/productSlice'
import {
  useGetProductQuery,
  useLazyGetProductIdQuery,
} from '@/store/services/operation-api'
import { useState } from 'react'
import FilterDropdown from '../FilterDropdown'
import ProductsList from './ProductsList'

export default function ProductsContent() {
  const { data: product = [], isFetching } = useGetProductQuery(undefined)

  const dispatch = useAppDispatch()

  const [products, setProducts] = useState<Products[]>(product)
  const [trigger, { data:productDetails }] = useLazyGetProductIdQuery()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value === '') {
      setProducts(product)
      return
    }

    const filtered = product.filter((product) => {
      const materialNormalized = product.produto
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
      const searchNormalized = value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
      return materialNormalized.includes(searchNormalized)
    })
    setProducts(filtered)
  }
  const handleProductClick = (productId: string) => {

    dispatch(setSelectedProduct(productDetails))
    // dispatch(setSelectedEmployees(undefined))
    trigger(productId)
  }
   return (
    <div className='flex h-full grow flex-col gap-4'>
      <div className='mx-4 flex items-center gap-2'>
        <Input
          type='text'
          placeholder='Search here...'
          onChange={handleSearch}
        />

        <FilterDropdown items={products} />
      </div>

      <div className='h-full grow pl-4 pr-1'>
        {isFetching && <div>Carregando...</div>}
        {!isFetching && (
          <ProductsList items={products} onProductClick={handleProductClick} />
        )}
      </div>
    </div>
  )
}
