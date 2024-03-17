import Input from '@/components/ui/Input'
import { PRODUCTS, ProductItem } from '@/mocks/products'
import { useAppDispatch, } from '@/store'
import { setSelectedProduct } from '@/store/reducers/productSlice'
import { useState } from 'react'
import FilterDropdown from '../FilterDropdown'
import ProductsList from './ProductsList'

export default function ProductsContent() {
  const sortedProducts = [...PRODUCTS].sort((a, b) =>
    a.MATERIAL.toString().localeCompare(b.MATERIAL.toString())
  )

  const dispatch = useAppDispatch()

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
  const handleProductClick = (productId: string) => {
    const productDetails =
      products.find((product) => product.ID === productId) || null
    dispatch(setSelectedProduct(productDetails))

    console.log('Product clicked:', productDetails)
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
        <ProductsList items={products} onProductClick={handleProductClick} />
      </div>
    </div>
  )
}
