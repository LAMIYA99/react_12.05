import React from 'react'
import {
  Search,
  CircleUserRound,
  Heart,
  RefreshCcw,
  ShoppingCart,
} from "lucide-react"


const Header = () => {
  return (
  
    <nav className="bg-white shadow-xl">
      <div className="container mx-auto px-20 py-10 flex items-center justify-between">

        <div className='flex gap-[10px]'>
          <img src="https://klbtheme.com/fynode/wp-content/uploads/2024/11/logo-black.png" className="w-[150px] h-[33px] object-cover" />

          <ul className="hidden md:flex items-center text-[19px]  ml-8 gap-8 text-gray-700 font-inter">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Headphones</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="flex items-center gap-5 text-xl text-gray-600">
          <Search />
          <a href="./account" className='flex gap-[10px] font-inter'><CircleUserRound />account </a>
        

          <Heart />
          < RefreshCcw />
          <ShoppingCart />
        </div>
      </div>
    </nav>
  )
}

export default Header