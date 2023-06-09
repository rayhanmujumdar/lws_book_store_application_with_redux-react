import React, { useEffect, useState } from "react";
import { useEditBookMutation } from "../../feature/api/apiSlice";
import { useNavigate } from "react-router-dom";

export default function Form({ book }) {
  const { name : initialName, author:initialAuthor, thumbnail:initialThumbnail, price:initialPrice, rating:initialRating, featured:initialFeatured } = book;
  const [editBook, { isLoading, isSuccess, isError }] = useEditBookMutation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [featured, setFeature] = useState(false);
  useEffect(() => {
    if (book?.id) {
      setName(initialName);
      setAuthor(initialAuthor);
      setThumbnail(initialThumbnail);
      setPrice(initialPrice);
      setRating(initialRating);
      setFeature(initialFeatured);
    }
  }, []);
  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);
  const handleSubmit = (e) => {
    e.preventDefault()
    if (book?.id) {
      editBook({id: book.id, uBook: {
        name,
        author,
        thumbnail,
        price,
        rating,
        featured,
      }});
    }
  };
  return (
    <form onSubmit={handleSubmit} className="book-form">
      <div className="space-y-2">
        <label htmlFor="lws-bookName">Book Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
          className="text-input"
          type="text"
          id="lws-bookName"
          name="name"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="lws-author">Author</label>
        <input
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          required
          className="text-input"
          type="text"
          id="lws-author"
          name="author"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="lws-thumbnail">Image Url</label>
        <input
          onChange={(e) => setThumbnail(e.target.value)}
          value={thumbnail}
          required
          className="text-input"
          type="text"
          id="lws-thumbnail"
          name="thumbnail"
        />
      </div>

      <div className="grid grid-cols-2 gap-8 pb-4">
        <div className="space-y-2">
          <label htmlFor="lws-price">Price</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            required
            className="text-input"
            type="number"
            id="lws-price"
            name="price"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lws-rating">Rating</label>
          <input
            onChange={(e) => setRating(e.target.value)}
            value={rating}
            required
            className="text-input"
            type="number"
            id="lws-rating"
            name="rating"
            min="1"
            max="5"
          />
        </div>
      </div>

      <div className="flex items-center">
        <input
          onChange={(e) => setFeature(e.target.checked)}
          checked={Boolean(featured)}
          id="lws-featured"
          type="checkbox"
          name="featured"
          className="w-4 h-4"
        />
        <label htmlFor="lws-featured" className="ml-2 text-sm">
          {" "}
          This is a featured book{" "}
        </label>
      </div>

      <button
        disabled={isLoading}
        type="submit"
        className="submit bg-blue-600"
        id="lws-submit"
      >
        Edit Book
      </button>
      {isError && <Error message="There was an error"></Error>}
    </form>
  );
}
