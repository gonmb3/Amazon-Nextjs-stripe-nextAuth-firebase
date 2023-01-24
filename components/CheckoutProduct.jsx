import { useState } from 'react';
import Image from "next/image";
import ReactStars from "react-stars";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
import toast from 'react-hot-toast';

const CheckoutProduct = ({ item }) => {
  const { title, id, price, description, category, image,rating } = item;

  const max_rating = 5;
  const min_rating = 2;

  // rating stars state
  const [ratingStars] = useState(
    Math.floor(Math.random() * (max_rating - min_rating + 1) + min_rating)
  );

  // add & remove from basket
  const dispatch = useDispatch();
    //add to cart 
    const addItemToBasket = () => {
        const product = {
          title,
          id,
          price,
          description,
          category,
          image,
        };
        dispatch(addToBasket(product))
        toast.success(`${title} added to the basket`)
      };
        //remove from cart 
      const removeItemFromBasket = () => {
                dispatch(removeFromBasket({id}))
      }
 
  return (
    <div className="grid grid-cols-5">
      <Image
        src={image}
        alt="img"
        height={200}
        width={200}
        objectFit="contain"
      />
      <div className="col-span-3 mx-5">

        <p>{title}</p>
        <div>
        <ReactStars count={ratingStars} size={20} color1={"#ffd700"} />
        </div>
        <p className="text-xs my-2 line-clamp-3">{description} </p>

        <p className="font-bold">${price}</p>

      <div className="flex items-center space-x-2 mt-5">
        <img
            loading='lazy'
          className="w-12"
          src="https://links.papareact.com/fdw"
          alt="prime img"
        />
        <p className="text-xs text-gray-400">Free Next-day Delivery</p>
      </div>
      
      </div>

    { /* button add and remove */}
     <div className="flex flex-col space-y-2 my-auto justify-self-end">
     <button
     onClick={addItemToBasket}
     className="button ">
        Add to Basket
      </button>
      <button 
       onClick={removeItemFromBasket}
      className="button ">
        Remove 
      </button>
     </div>
    </div>
  );
};

export default CheckoutProduct;
