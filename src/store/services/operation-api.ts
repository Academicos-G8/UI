import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Operation {
    produto: string;
    material: string;
}


export const operationApi = createApi({
    reducerPath: "operationApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.example.com" }),
    tagTypes: ["Operation"],
    endpoints: (build) => ({
        getOperation: build.query<Operation, string>({
        query: (id) => `operation/${id}`,
        providesTags: ["Operation"],
        }),
    }),
    });

export const { useGetOperationQuery } = operationApi;
