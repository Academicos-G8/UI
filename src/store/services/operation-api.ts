import { Employees, People } from '@/components/interface/people'
import { Feedback, Products } from '@/components/interface/products'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const operationApi = createApi({
  reducerPath: 'operationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
  tagTypes: ['Operation'],
  endpoints: (builder) => ({
    getProduct: builder.query<Products[], void>({
      query: () => `/produtos`,
      providesTags: ['Operation'],
    }),
    getProductId: builder.query<Feedback, string>({
      query: (id) => `/produtos/${id}`,
      providesTags: ['Operation'],
    }),
    getPeople: builder.query<People[], void>({
      query: () => `/pessoas`,
      providesTags: ['Operation'],
    }),
    getPeopleId: builder.query<Employees, string>({
      query: (id) => `/pessoas/${id}`,
      providesTags: ['Operation'],
    }),
  }),
})

export const {
  useGetPeopleIdQuery,
  useGetPeopleQuery,
  useGetProductQuery,
  useLazyGetProductIdQuery,
  useLazyGetPeopleIdQuery,
} = operationApi
