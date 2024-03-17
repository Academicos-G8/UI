import { EmployeesProps } from '@/mocks/employees'
import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

interface IEmployeesState {
  selectedEmployees: EmployeesProps | null
}

const initialState: IEmployeesState = {
  selectedEmployees: null,
}

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setSelectedEmployees(
      state: IEmployeesState,
      action: PayloadAction<EmployeesProps | null>
    ) {
      state.selectedEmployees = action.payload
    },
  },
})

export const { setSelectedEmployees } = employeesSlice.actions

export default employeesSlice
