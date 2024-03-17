import { useAppSelector } from '@/store'

export default function EmployeesDetails() {
  const { selectedEmployees } = useAppSelector((state) => state.employees)

  if (!selectedEmployees) {
    return null
  }

  const details = selectedEmployees.msg.map((item, index) => {
    return {
      message: item,
      products: selectedEmployees.produtos[index]
    }
  })

  return (
    <div className='flex flex-col gap-2 p-4 overflow-auto'>
      {details.map((item) => (
        <div className='border-b border-secondary py-3'>
          <h2 className='text-xl'>{item.message}</h2>
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
