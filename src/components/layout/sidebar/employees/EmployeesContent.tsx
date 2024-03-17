import { People } from '@/components/interface/people'
import Input from '@/components/ui/Input'

import { useAppDispatch } from '@/store'
import {
  clearSelectedEmployees,
  setSelectedEmployees,
} from '@/store/reducers/employeesSlice'
import {
  useGetPeopleQuery,
  useLazyGetPeopleIdQuery,
} from '@/store/services/operation-api'
import { useCallback, useEffect, useState } from 'react'
import EmployeesList from './EmployeesList'
import { clearSelectedProduct } from '@/store/reducers/productSlice'

export default function EmployeesContent() {
  const { data: employeesData = [], isFetching } = useGetPeopleQuery(
    undefined,
    {
      refetchOnMountOrArgChange: true,
    }
  )

  const [trigger, { isFetching: fetchingDetails }] = useLazyGetPeopleIdQuery()

  const [employees, setEmployees] = useState<People[]>([])
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (fetchingDetails) return
    setEmployees(employeesData)
  }, [employeesData, fetchingDetails])

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

  const handleProductClick = useCallback(
    async (productId: string) => {
      dispatch(clearSelectedProduct())
      dispatch(clearSelectedEmployees())
      await trigger(productId)
        .unwrap() // Garante que você lide com a promise retornada
        .then((productDetails) => {
          dispatch(setSelectedEmployees(productDetails)) // Atualiza o estado com os novos detalhes obtidos
        })
        .catch((error) =>
          console.error('Failed to fetch product details:', error)
        )
    },
    [dispatch, trigger]
  )

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
