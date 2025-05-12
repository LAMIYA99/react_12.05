import React from 'react'
import {
  MoveRight
} from "lucide-react"

const BannerSection = () => {
  return (
    <section className='container mx-auto m-16'>
      <div className='grid md:grid-cols-2 gap-5' >
        <div className='relative overflow-hidden rounded-3xl shadow-2xl '>
          <img src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/banner-06.jpg"
            alt=""
            className='w-full h-full object-cover' />
          <div className='absolute  inset-0  p-10 '>
            <h3 className='text-[18px] font-normal font-inter'> Elite Quality</h3>
            <h2 className='text-[46px] font-inter font-bold'>Where Excellence Meets <br /> Deep Resonance</h2>
            <p className='font-extralight font-inter text-[18px]'>Fynode: Redefining Modern Tech</p>
            <button className='px-8 py-3 flex gap-1 m-4 bg-white rounded-3xl'>Shop Now <MoveRight /></button>
          </div>
        </div>
        <div className='relative rounded-3xl overflow-hidden shadow-2xl'>
          <img src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/banner-05.jpg"
            alt=""
            className='w-full h-full object-cover' />
            <div className='absolute inset-0 p-10 mt-100'>
            <h3 className='text-[18px] font-normal font-inter text-white'> Elite Quality</h3>
            <h2 className='text-[46px] font-inter font-bold text-white'>Where Excellence Meets <br /> Deep Resonance</h2>
            <p className='font-extralight font-inter text-[18px] text-white'>Fynode: Redefining Modern Tech</p>
            <button className='px-8 py-3 flex gap-1 m-4 bg-white rounded-3xl'>Shop Now <MoveRight /></button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default BannerSection