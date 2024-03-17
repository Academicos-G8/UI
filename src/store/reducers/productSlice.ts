import { Feedback } from '@/components/interface/products'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IProductState {
  selectedProduct: Feedback | undefined
}

const initialState: IProductState = {
  selectedProduct: undefined,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSelectedProduct(
      state: IProductState,
      action: PayloadAction<Feedback | undefined>
    ) {
      state.selectedProduct = action.payload
    },
    clearSelectedProduct(state: IProductState, action: PayloadAction<undefined>) {
      state.selectedProduct = action.payload
    },
  },
})

export const { setSelectedProduct,clearSelectedProduct } = productSlice.actions

export default productSlice
