import { useAppSelector } from '@/store'

export default function ProductDetails() {
  const { selectedProduct } = useAppSelector((state) => state.product)

  if (!selectedProduct) {
    return null
  }


  const details = selectedProduct.msg.map((item, index) => {
    return {
      message: item,
      products: selectedProduct.feedback[index]
    }
  })

  const title = selectedProduct.feedback[0].Produto

  return (
    <div className='flex flex-col gap-4 p-4'>
      <h1 className='text-2xl font-bold'>
        Produto: <b className='text-text-secondary'>{title}</b>
      </h1>

      {details.map((item) => (
        <div className='border-b border-secondary py-3'>
          <h3 className='text-xl'>{item.message}</h3>
          <ul>
            <li>Bom: {item.products.Bom}</li>
            <li>Ruim: {item.products.Ruim}</li>
            <li>Indiferente: {item.products.Indiferente}</li>
          </ul>
        </div>
      ))}
    </div>
  )
}
