import React from "react";
import SearchInput from "../filter/SearchInput";
import logoImage from "../../assets/images/logo.svg"
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <img src={logoImage} width="150px" className="object-contain" />

        <ul className="hidden md:flex items-center space-x-6">
          <Link
            className="font-semibold cursor-pointer"
            to="/"
            id="lws-bookStore"
          >
            <li>Book Store</li>
          </Link>
          <Link to='/book/add' className="cursor-pointer" id="lws-addBook">
            <li>Add Book</li>
          </Link>
        </ul>
        <SearchInput></SearchInput>
      </div>
    </nav>
  );
}
