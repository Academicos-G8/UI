import { useState } from 'react'
import Input from '@/components/ui/Input'
import {
  EmployeesProps,
  Employees as initialEmployees,
} from '@/mocks/employees'
import EmployeesList from './EmployeesList'
import { useAppDispatch } from '@/store'
import { setSelectedEmployees } from '@/store/reducers/employeesSlice'

export default function EmployeesContent() {
  const [employees, setEmployees] = useState<EmployeesProps[]>(initialEmployees)
  const dispatch = useAppDispatch()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value === '') {
      setEmployees(initialEmployees)
      return
    }

    // Filtro baseado na entrada do usuário
    const filteredEmployees = initialEmployees.filter((employee) => {
      const nameNormalized = employee.name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
      const searchNormalized = value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
      return nameNormalized.includes(searchNormalized)
    })

    setEmployees(filteredEmployees)
  }

  const handleProductClick = (productId: string) => {
    const employeeDetails =
      employees.find((employee) => employee.id === productId) || null

    dispatch(setSelectedEmployees(employeeDetails))
    console.log('Employee clicked:', employeeDetails)
  }

  return (
    <div className='flex h-full grow flex-col gap-4'>
      <div className='mx-4 flex items-center gap-2'>
        <Input
          type='text'
          placeholder='Search here...'
          onChange={handleSearch}
        />
      </div>
      <EmployeesList items={employees} onProductClick={handleProductClick} />
    </div>
  )
}
