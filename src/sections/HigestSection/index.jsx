import React from 'react'
import {
    MoveRight
} from "lucide-react"

const HigestSection = () => {
    return (
        <section>
            <div className='container mx-auto my-40'>
                <div className='relative overflow-hidden rounded-3xl'>
                    <img src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/banner-02.jpg"
                        alt=""
                        className='w-full h-full object-cover rounded-3xl' />

                    <div className="absolute inset-0 font-inter flex flex-col justify-center px-16 text-white bg-black/50">
                        <p className="text-[18px] text-white font-light mb-2">Highest Qualitys</p>
                        <h2 className="text-[56px] font-bold leading-snug
                         text-transparent bg-clip-text 
                        bg-gradient-to-r from-white via-[#252322] ">
                            Elevate Your Audio <br /> Experience with Sony <br /> Headphones
                        </h2>
                        <p className="text-[20px] my-[20px] font-extralight text-[#c2bfbf]">
                            Quisque venenatis malesuada ipsum sollicitudin tristique.
                        </p>
                        <button className="bg-white flex gap-1 text-black px-6 py-3 rounded-full font-medium my-6 w-fit">
                            Shop Now < MoveRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HigestSection