import { useState } from 'react'
import Input from '@/components/ui/Input'
import ProductsList from './ProductsList'
import FilterDropdown from './FilterDropdown'
import { PRODUCTS, ProductItem } from '@/mocks/products'

export default function ProductsContent() {
   const sortedProducts = [...PRODUCTS].sort((a, b) =>
    a.MATERIAL.toString().localeCompare(b.MATERIAL.toString())
  )

  const [products, setProducts] = useState<ProductItem[]>(sortedProducts)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value === '') {
      setProducts(sortedProducts)
      return
    }

    const filtered = sortedProducts.filter((product) => {
      const materialNormalized = product.MATERIAL.toString()
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

  return (
    <div className='flex h-full grow flex-col gap-4'>
      <div className='mx-4 flex items-center gap-2'>
        <Input
          type='text'
          placeholder='Search here...'
          onChange={handleSearch}
        />

        <FilterDropdown items={sortedProducts} />
      </div>

      <div className='h-full grow pl-4 pr-1'>
        <ProductsList items={products} />
      </div>
    </div>
  )
}
