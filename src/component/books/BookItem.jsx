import React from "react";
import BookCard from "./BookCard";
import { useGetBooksQuery } from "../../feature/api/apiSlice";
import FeaturedFilter from "../filter/FeaturedFilter";
import CardLoader from "../ui/loaders/CardLoader";
import Error from "../ui/Error";
import { useSelector } from "react-redux";

export default function BookItem() {
  const { data: books, isLoading, isError } = useGetBooksQuery();
  const { list, search } = useSelector((state) => state.filter);
  let content = null;
  if (isLoading) {
    content = <CardLoader></CardLoader>;
  }
  if (!isLoading && isError) {
    content = <Error message="There was an error"></Error>;
  }
  if (!isLoading && !isError && books?.length > 0) {
    content = books
      .filter((book) => list === "Featured" ? book.featured : true)
      .filter((book) => book.name.toLowerCase().includes(search.toLowerCase()))
      .map((book) => <BookCard key={book?.id} book={book}></BookCard>);
  }
  if (!isLoading && !isError && content?.length === 0) {
    content = <Error message="No book found"></Error>;
  }
  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <FeaturedFilter></FeaturedFilter>
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {content}
        </div>
      </div>
    </main>
  );
}
