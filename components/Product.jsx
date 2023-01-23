import { useState } from "react";
import Image from "next/legacy/image";
import ReactStars from "react-stars";



const Product = ({ products }) => {

  const { title, id, price, description, category, image } = products;

  const max_rating = 5;
  const min_rating = 2;

  // rating stars state
  const [ratingStars] = useState(
    Math.floor(Math.random() * (max_rating - min_rating + 1) + min_rating)
  );

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 ">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400 capitalize">
        {category}
      </p>
      <Image
        src={image}
        width={200}
        height={200}
        objectFit="contain"
        className="cursor-pointer"
      />

      <h4 className="my-3 line-clamp-1">{title}</h4>
      {/*rating stars*/}
      <ReactStars count={ratingStars} size={24} color1={"#ffd700"} />

      <p className="text-xs my-2 line-clamp-2">{description} </p>

      <div className="mb-5">
        <p>${price}</p>
      </div>

      <div className="flex items-center space-x-2 -mt-5">
        <img
          className="w-12"
          src="https://links.papareact.com/fdw"
          alt="prime img"
        />
        <p className="text-xs text-gray-400">Free Next-day Delivery</p>
      </div>

      <button className="button">Add to Basket</button>
    </div>
  );
};

export default Product;