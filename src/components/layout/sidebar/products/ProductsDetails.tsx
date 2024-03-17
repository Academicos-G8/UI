import { useAppSelector } from '@/store'

export default function ProductDetails() {
  const { selectedProduct } = useAppSelector((state) => state.product)

  if (!selectedProduct) {
    return null
  }

  return (
    <div className='flex flex-col gap-4 p-4'>
      <h2 className='text-2xl'>{selectedProduct.msg}</h2>
      <p className='text-lg'>{selectedProduct.msg}</p>
    </div>
  )
}
