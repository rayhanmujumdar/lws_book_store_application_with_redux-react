import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
const apiSlice = createApi({
    reducerPath: "bookApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000",
    }),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => ({
                url: "/books",
            })
        })
    })
})

export default apiSlice
export const {useGetBooksQuery} = apiSlice