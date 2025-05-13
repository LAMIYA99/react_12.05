import React from 'react'

import { Eye,Check } from 'lucide-react';

import {
  Link,
} from "react-router";

const ProductSection = () => {
  return (
    <section>
      <div className='container mx-auto my-28'>
        <div className='flex'>
          <ul className='flex justify-center items-center gap-4'>
            <li className='text-[40px] font-medium font-inter'>Most sold this week</li>
            <li className='text-[#a1a1aa] text-[22px] font-inter'>Earphones</li>
            <li>Microphones</li>
            <li>Smartwatches</li>
            <li>Speakers</li>
          </ul>
        </div>
        <div className='grid md:grid-cols-3 gap-2.5 mt-10'>
          <div className="box rounded-2xl overflow-hidden relative group">
            <div className="hoverIcon absolute top-2.5 left-3.5 flex justify-between w-[95%] z-10">
              <button className='bg-[#000] text-[#fff] p-2 rounded-2xl'>%40</button>
              <button className='bg-[#fff] p-2 rounded-2xl'>4.3</button>
            </div>
            <Link to={"/shop"}>
              <div className="boxImg relative">
                <img
                  src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/01-45.jpg"
                  alt=""
                  className="w-full" />
                <div className="hoverImg absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/02-40.jpg"
                    alt=""
                    className="w-full"
                  />
                  <div className='absolute top-[14px] flex flex-col gap-3  right-[14px]'>
                    <p className=' bg-white  p-[14px] rounded-[50%]'><Eye className=' w-[18px] ' /></p>
                    <p className=' bg-white  p-[14px] rounded-[50%]'><Check className='w-[18px]' /></p>
                  </div>
                </div>
              </div>
            </Link>
            <div className="boxBody bg-[#F5F5F5] p-9">
              <h2 className="font-semibold text-lg">Earphones</h2>
              <h3 className="text-gray-600 mb-3">Soundcore P30i True Wireless ANC Earbud</h3>
              <div className="price flex gap-2 items-center">
                <span className='line-through text-gray-400'>$80</span>
                <span className='text-black font-bold'>$60</span>
              </div>
            </div>
          </div>
          <div className="box rounded-2xl overflow-hidden relative group">
            <div className="hoverIcon absolute top-2.5 left-3.5 flex justify-between w-[95%] z-10">
              <button className='bg-[#000] text-[#fff] p-2 rounded-2xl'>%40</button>
              <button className='bg-[#fff] p-2 rounded-2xl'>4.3</button>
            </div>
            <Link to={"/shop"}>
              <div className="boxImg relative">
                <img
                  src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/01-45.jpg"
                  alt=""
                  className="w-full" />
                <div className="hoverImg absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/02-40.jpg"
                    alt=""
                    className="w-full"
                  />
                  <div className='absolute top-[14px] flex flex-col gap-3  right-[14px]'>
                    <p className=' bg-white  p-[14px] rounded-[50%]'><Eye className=' w-[18px] ' /></p>
                    <p className=' bg-white  p-[14px] rounded-[50%]'><Check className='w-[18px]' /></p>
                  </div>
                </div>
              </div>
            </Link>
            <div className="boxBody bg-[#F5F5F5] p-9">
              <h2 className="font-semibold text-lg">Earphones</h2>
              <h3 className="text-gray-600 mb-3">Soundcore P30i True Wireless ANC Earbud</h3>
              <div className="price flex gap-2 items-center">
                <span className='line-through text-gray-400'>$80</span>
                <span className='text-black font-bold'>$60</span>
              </div>
            </div>
          </div>
          <div className="box rounded-2xl overflow-hidden relative group">
            <div className="hoverIcon absolute top-2.5 left-3.5 flex justify-between w-[95%] z-10">
              <button className='bg-[#000] text-[#fff] p-2 rounded-2xl'>%40</button>
              <button className='bg-[#fff] p-2 rounded-2xl'>4.3</button>
            </div>
            <Link to={"/shop"}>
              <div className="boxImg relative">
                <img
                  src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/01-45.jpg"
                  alt=""
                  className="w-full" />
                <div className="hoverImg absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/02-40.jpg"
                    alt=""
                    className="w-full"
                  />
                  <div className='absolute top-[14px] flex flex-col gap-3  right-[14px]'>
                    <p className=' bg-white  p-[14px] rounded-[50%]'><Eye className=' w-[18px] ' /></p>
                    <p className=' bg-white  p-[14px] rounded-[50%]'><Check className='w-[18px]' /></p>
                  </div>
                </div>
              </div>
            </Link>
            <div className="boxBody bg-[#F5F5F5] p-9">
              <h2 className="font-semibold text-lg">Earphones</h2>
              <h3 className="text-gray-600 mb-3">Soundcore P30i True Wireless ANC Earbud</h3>
              <div className="price flex gap-2 items-center">
                <span className='line-through text-gray-400'>$80</span>
                <span className='text-black font-bold'>$60</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default ProductSection