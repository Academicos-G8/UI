import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const store = configureStore({
  reducer: {
    // Adicione outros reducers aqui se necessário
  },
  // Importante: Adicionar o middleware do RTK Query
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
export type RootState = ReturnType<typeof store.getState>

export default store
