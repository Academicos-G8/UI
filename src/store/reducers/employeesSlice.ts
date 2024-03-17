import { Employees, People } from '@/components/interface/people'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IEmployeesState {
  selectedEmployees: Employees | undefined
}

const initialState: IEmployeesState = {
  selectedEmployees: undefined,
}

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setSelectedEmployees(
      state: IEmployeesState,
      action: PayloadAction<Employees | undefined>
    ) {
      state.selectedEmployees = action.payload
    },
  },
})

export const { setSelectedEmployees } = employeesSlice.actions

export default employeesSlice
