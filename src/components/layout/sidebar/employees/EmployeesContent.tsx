import { People } from '@/components/interface/people'
import Input from '@/components/ui/Input'

import { useAppDispatch } from '@/store'
import { setSelectedEmployees } from '@/store/reducers/employeesSlice'
import { setSelectedProduct } from '@/store/reducers/productSlice'
import { useGetPeopleQuery, useLazyGetPeopleIdQuery } from '@/store/services/operation-api'
import { useState } from 'react'
import EmployeesList from './EmployeesList'

export default function EmployeesContent() {


  const { data: employeesData = [], isFetching } = useGetPeopleQuery(
    undefined,
    {
      refetchOnMountOrArgChange: true,
    }
  )

  const [trigger, { data: employeeDetails }] = useLazyGetPeopleIdQuery()


  const [employees, setEmployees] = useState<People[]>(employeesData)
  const dispatch = useAppDispatch()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value === '') {
      setEmployees(employeesData)
      return
    }

    // Filtro baseado na entrada do usuário
    const filteredEmployees = employeesData.filter((employee) => {
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

    dispatch(setSelectedEmployees(employeeDetails))
    trigger(productId)
    // dispatch(setSelectedProduct(undefined))
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
      {isFetching && <div>Carregando...</div>}
      {!isFetching && (
        <EmployeesList items={employees} onProductClick={handleProductClick} />
      )}
    </div>
  )
}
