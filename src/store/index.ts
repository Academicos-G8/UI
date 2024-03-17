import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import productSlice from './reducers/productSlice'
import employeesSlice from './reducers/employeesSlice'

const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    employees: employeesSlice.reducer,
  },
  // Importante: Adicionar o middleware do RTK Query
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
