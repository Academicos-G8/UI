import { Employees } from '@/components/interface/people'
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
    clearSelectedEmployees(
      state: IEmployeesState,
      action: PayloadAction<undefined>
    ) {
      state.selectedEmployees = action.payload
    },
  },
})

export const { setSelectedEmployees,clearSelectedEmployees } = employeesSlice.actions

export default employeesSlice
