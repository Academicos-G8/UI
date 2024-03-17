import { useAppSelector } from '@/store'

export default function EmployeesDetails() {
  const { selectedEmployees } = useAppSelector((state) => state.employees)

  if (!selectedEmployees) {
    return null
  }

  return (
    <div className='flex flex-col gap-4 p-4'>
      <h2 className='text-2xl'>{selectedEmployees.msg}</h2>
      <p className='text-lg'>{selectedEmployees.msg}</p>
    </div>
  )
}
