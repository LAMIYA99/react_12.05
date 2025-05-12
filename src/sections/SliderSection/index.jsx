import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.scss"

const SliderSection = () => {
  return (
    <Swiper className="mySwiper">
      <SwiperSlide>
        <div className='container mx-auto'>
          <div className=' text-center flex justify-center flex-col gap-4'>
            <h3 className='text-[36px] font-medium text-[#212529] font-inter leading-relaxed '>"The design is spectacular, the fit is precise, the ANC <br /> is industry-leading, the battery life is fantastic, and <br />the audio is clear and powerful."</h3>
            <h4 className='text-[14px] font-inter text-gray-500 '>Jessica Lindström</h4>    
           <h5>salammmm svg olmadi deye bunu yazdim</h5>  
          </div>
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='container mx-auto my-28'>
          <div className=' text-center flex justify-center flex-col gap-4'>
            <h3 className='text-[36px] font-medium text-[#212529] font-inter leading-relaxed '>"The design is spectacular, the fit is precise, the ANC <br /> is industry-leading, the battery life is fantastic, and <br />the audio is clear and powerful."</h3>
            <h4 className='text-[14px] font-inter text-gray-500 '>Jessica Lindström</h4> 
                    
          </div>
        </div>
      </SwiperSlide>
  
      <SwiperSlide>
      <div className='container mx-auto my-28'>
          <div className=' text-center flex justify-center flex-col gap-4'>
            <h3 className='text-[36px] font-medium text-[#212529] font-inter leading-relaxed '>"The design is spectacular, the fit is precise, the ANC <br /> is industry-leading, the battery life is fantastic, and <br />the audio is clear and powerful."</h3>
            <h4 className='text-[14px] font-inter text-gray-500 '>Jessica Lindström</h4>         
          </div>
        </div>
      </SwiperSlide>



    </Swiper>
  )
}

export default SliderSection