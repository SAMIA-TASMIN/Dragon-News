import React from "react";
import { FaStar, FaEye, FaShareAlt, FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, image_url, details } = news;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl overflow-hidden mb-4">
      
      <div className="card-body lg:w-2/3">
        {/* Author */}
        <div className="flex justify-between items-center p-2 bg-base-200">
            <div className="flex items-center gap-3 mb-2">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">{author.name}</p>
            <p className="text-xs text-accent">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <button className="flex gap-4">
            <FaRegBookmark size={20}></FaRegBookmark>
            <FaShareAlt size={20}></FaShareAlt></button>
        </div>

        {/* Title */}
        <h2 className="card-title text-lg font-bold">{title}</h2>
        <figure className="lg:w-full">
        <img src={image_url} alt={title} className="object-cover w-full h-full" />
      </figure>

        {/* Details */}
        <p className="text-gray-700 line-clamp-3">{details.length>230?(
            <>
            {details.slice(0,230)}...  
            <span className="font-bold text-orange-400">Read More</span>
            </>
        ):(details)
        }</p>

        {/* Stats */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1 text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={i < rating.number ? "text-yellow-400" : "text-gray-300"}
              />
            ))}
            <span className="ml-2 text-gray-700">{rating.number.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewsCard;