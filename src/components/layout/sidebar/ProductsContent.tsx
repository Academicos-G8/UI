import Input from '@/components/ui/Input'
import ProductsList from './ProductsList'
import { PRODUCTS } from '@/mocks/products'
import { useState } from 'react'
import FilterDropdown from './FilterDropdown'

export default function ProductsContent() {
  const [products, setProducts] = useState(PRODUCTS)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value === '') {
      setProducts(PRODUCTS)
      return
    }

    const filtered = PRODUCTS.filter((product) => {
      return product.PRODUTO.toString()
        .toLowerCase()
        .includes(value.toLowerCase())
    })

    setProducts(filtered)
  }

  return (
    <div className='flex h-full grow flex-col gap-4'>
      <div className='mx-4 flex items-center gap-2'>
        <Input
          type='text'
          placeholder='Search here...'
          onChange={handleSearch}
        />

        <FilterDropdown items={PRODUCTS} />
      </div>

      <div className='h-full grow pl-4 pr-1'>
        <ProductsList items={products} />
      </div>
    </div>
  )
}
