import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookName, author, image, tags, rating, category,bookId } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100  border rounded-xl p-6">
        <figure className="bg-gray-100 py-10 rounded-xl">
          <img className="h-[200px] " src={image} alt="{bookName}" />
        </figure>
        <div className="space-y-4">
          <div className="flex items-center gap-2 mt-5">
            {tags.map((tag) => (
              <button className="btn btn-xs font-bold bg-gray-100 hover:bg-gray-100 text-green-600 text-sm text-center">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title text-3xl font-bold">{bookName}</h2>
          <p className="font-bold"> By: {author}</p>
          <hr className="border-dashed"></hr>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">{category}</p>
            </div>
            <div>
              <p className="font-bold">
                {rating}
                <i class="fa-regular fa-star"></i>
                {/* <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
