import Image from "next/legacy/image";

import {
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const Header = () => {
  return (
    <header>

      {/* TOP NAV*/}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          {" "}
          {/* logo*/}
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* SEARCH*/}
        <div className="hidden bg-yellow-400 hover:bg-yellow-500 sm:flex items-center cursor-pointer h-10 rounded-md flex-grow">
          <input
            type="text"
            className="h-full w-6 flex-grow p-2 flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <AiOutlineSearch size={24} className="mx-2" />
        </div>

        {/* RIGHT*/}
        <div className="flex items-center space-x-4 text-white text-sm mx-6 whitespace-nowrap">
          <div className=" link ">
            <p>Hello Pepe</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className=" link ">
          <p>Returns </p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="flex items-center gap-1 link  relative ">
            <span className="absolute -top-3   -right-3 md:right-10 h-5 w-5 text-center  rounded-full text-black font-bold bg-yellow-400">0</span>
          <AiOutlineShoppingCart size={25}/> 
            <p className="hidden md:inline font-extrabold mt-1 md:text-sm">Basket</p>
          </div>
        </div>
      </div>

      {/* BOTTOM NAV*/}
      <div className="flex items-center space-x-2 p-2 pl-6 text-[13px]  bg-amazon_blue-light text-white">
        <div className="flex items-center link">
            <AiOutlineMenu size={20} className="mr-1"/>
            <p>All</p>
        </div>
            <p className="link"> Prime Video </p>
            <p className="link">Amazon Business </p>
               <p className="link">Today´s Deals</p>
               <p className="link hidden md:inline"> Electronics </p>
               <p className="link hidden md:inline"> Food & Grocery </p>
               <p className="link hidden md:inline"> Prime </p>
               <p className="link hidden md:inline"> Shopper Toolkit </p>
               <p className="link hidden md:inline"> Health & Personal Care </p>

      </div>
    </header>
  );
};

export default Header;
