import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
const apiSlice = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  keepUnusedDataFor: 600,
  tagTypes: ["books"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({
        url: "/books",
      }),
      providesTags: ["books"],
    }),
    getBook: builder.query({
      query: (id) => ({
        url: `/books/${id}`
      })
    }),
    addBook: builder.mutation({
      query: (book) => ({
        url: "/books",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["books"],
    }),
    editBook: builder.mutation({
      query: ({ id, uBook }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: uBook,
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: ({ id }) => ({
        url: `/books/${id}`,
        method: "DELETE",
        body: uBook,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export default apiSlice;
export const {
  useGetBooksQuery,
  useAddBookMutation,
  useEditBookMutation,
  useDeleteBookMutation,
  useGetBookQuery
} = apiSlice;
