import React from "react";
import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../../feature/api/apiSlice";
import Error from "../ui/Error";
import Form from "./Form";

export default function EditBook() {
  const { bookId } = useParams();
  const { data: book, isLoading, isError, isSuccess } = useGetBookQuery(bookId);
  let content = null;
  if (isLoading) {
    content = <div>loading...</div>;
  }
  if (!isLoading && isError) {
    content = <Error message="There was an error"></Error>;
  }
  if (isSuccess && book.id) {
    content = <Form book={book}></Form>;
  }
  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
          {content}
        </div>
      </div>
    </main>
  );
}
