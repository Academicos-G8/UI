import { ProductItem } from '@/mocks/products'
import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

interface IProductState {
  selectedProduct: ProductItem | null
}

const initialState: IProductState = {
  selectedProduct: null,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSelectedProduct(
      state: IProductState,
      action: PayloadAction<ProductItem | null>
    ) {
      state.selectedProduct = action.payload
    },
  },
})

export const { setSelectedProduct } = productSlice.actions

export default productSlice
