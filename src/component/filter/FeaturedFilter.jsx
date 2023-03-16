import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterList } from "../../feature/filter/filterSlice";

export default function FeaturedFilter() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.filter);
  const activeAll = list === "All" ? `active-filter` : false;
  const activeFeatured = list === "Featured" ? `active-filter` : false;
  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => dispatch(filterList("All"))}
          className={`lws-filter-btn ${activeAll}`}
        >
          All
        </button>
        <button
          onClick={() => dispatch(filterList("Featured"))}
          className={`lws-filter-btn ${activeFeatured}`}
        >
          Featured
        </button>
      </div>
    </div>
  );
}
