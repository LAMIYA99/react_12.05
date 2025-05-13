import React from 'react'
import {
    ChevronRight,
    Star,
    StarHalf,
    ShoppingCart,
    Heart,
    ArrowRightLeft,
    CircleHelp,
    Package,
    Facebook,
    Twitter,
    MessageCircleHeart,
    Linkedin,
    Phone

} from "lucide-react"

const DetailSection = () => {
    return (
        <section>
            <div className='container mx-auto my-14'>
                <div className=''>
                    <ul className='flex gap-2 '>
                        <li className='flex text-[12px] font-inter text-[#a1a1aa]'><a href="" className='flex justify-center items-center '>Home<ChevronRight /></a></li>
                        <li className='flex text-[12px] font-inter text-[#a1a1aa]'><a href="" className='flex justify-center items-center '>Earphones<ChevronRight /></a></li>
                        <li className='flex text-[12px] text-black justify-center items-center'><a href="">Soundcore P30i True Wireless ANC Earbud</a></li>
                    </ul>
                </div>
                <div className='grid md:grid-cols-12 gap-14 mt-5 '>
                    <div className='col-span-6'>
                        <div className='relative'>
                            <img src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/01-45.jpg" alt=""
                                className='w-full h-full object-cover ' />
                            <button className='absolute top-3.5 left-3.5 text-[14px] bg-black text-white p-1 px-3.5 rounded-[18px]'>45%</button>
                        </div>
                        <div className='flex gap-2.5 mt-4'>
                            <img src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/01-45.jpg" alt=""
                                className='w-[82px] h-[82px] object-cover border border-black p-[4px] cursor-pointer' />

                            <img src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/02-40.jpg" alt=""
                                className='w-[82px] h-[82px] object-cover border border-gray-300 p-[4px] cursor-pointer' />

                            <img src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/03-31.jpg" alt=""
                                className='w-[82px] h-[82px] object-cover border border-gray-300 p-[4px] cursor-pointer' />
                        </div>
                    </div>
                    <div className='col-span-6'>
                        <div className=''>
                            <h5 className='text-[#71717a] text-[13px] font-inter font-light'>Earphones</h5>
                            <h4 className='text-[40px] text-black font-medium my-1.5 leading-16 font-inter'>Soundcore P30i True Wireless ANC Earbud</h4>
                            <div className='flex gap-10'>
                                <div className='flex w-[66px] h-[13px]'>
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <StarHalf />
                                </div>
                                <div className='flex items-center'>
                                    <h3 className='text-[#71717a] text-[13px] font-inter'>SKU:</h3>
                                    <h4 className='text-[13px] text-black font-inter'>B3C4D5A6</h4>
                                </div>
                            </div>
                            <hr className='text-[#ccccce] h-0.5 mt-2.5' />
                        </div>

                        <div className='mt-10 flex justify-between items-center'>
                            <div className=' flex gap-2'>
                                <span className='text-[22px] font-light text-black font-inter '>$24.99</span>
                                <span className='text-[22px] font-light font-inter text-[#a1a1aa] line-through'>$47.99</span>
                            </div>
                            <div>
                                <h4 className='text-[14px] font-medium text-[#212529] font-inter'>In Stock</h4>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <p className='text-[14px] font-inter font-light text-[#52525b]'>Immerse yourself in premium sound with the Soundcore P30i, featuring advanced active noise <br />cancellation, crystal-clear audio, and ergonomic design for a comfortable listening experience.</p>
                        </div>
                        <div className='flex mt-7 w-[692px] h-[42px] bg-[#fff1e6] text-center font-inter items-center gap-4 rounded-[10px]'>
                            <ShoppingCart className='w-[19px] text-[#f36507] ml-5' />
                            <h4 className='text-[13px] text-[#f36507]'>This product has been added to <span className='font-bold'>3  people's</span> carts.</h4>
                        </div>
                        <div className="flex items-center mt-4.5 gap-4">
                            <div className="flex items-center border font-inter border-gray-300 rounded-3xl">
                                <button className="px-4 py-4 ">−</button>
                                <span className="px-3">1</span>
                                <button className="px-4 py-4">+</button>
                            </div>
                            <button className="bg-black font-inter text-white px-59 py-4 rounded-3xl hover:opacity-85 transition">
                                Add to cart
                            </button>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button className=" border mt-3.5 border-[#e4e4e7] py-4 px-62 rounded-3xl  bg-[#e4e4e7] text-black text-[15px] font-inter font-semibold hover:bg-gray-300 transition">
                                Buy Now
                            </button>
                            <p className='border border-[#d4d4d8] p-[15px] rounded-[50%]'><Heart className=' w-[21px]' /></p>
                            <p className='border border-[#d4d4d8] p-[15px] rounded-[50%]'><ArrowRightLeft className=' w-[21px]' /></p>
                        </div>
                        <div className='mt-12 flex justify-between'>
                            <div className='flex gap-6 text-[14px] font-inter text-[#212529]'>
                                <p className='flex gap-2'><CircleHelp className='w-[18px]' /><a href="">Ask a question</a></p>
                                <p className='flex gap-2'><Package className='w-[18px]' /><a href=""> Delivery Return </a></p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='flex gap-'>
                                    <p className='text-[#71717a] text-[14px] font-inter'>Share:</p>
                                </div>
                                <div className='flex gap-6 '>
                                    <Facebook className='w-[16px]' />
                                    <Twitter className='w-[16px]' />
                                    <MessageCircleHeart className='w-[16px]' />
                                    <Linkedin className='w-[16px]' />
                                    <Phone className='w-[16px]' />
                                </div>
                            </div>
                        </div>
                        <hr className='text-[#ccccce] h-0.5 mt-6' />

                        <div className=''>
                            <div className='flex flex-col gap-2 mt-[60px]'>
                                <h4 className="text-md font-semibold ">Product Highlights</h4>
                                <ul className="list-disc pl-4 flex flex-col gap-1 font-inter  text-[14px] text-[#212529] space-y-1">
                                    <li>Active Noise Cancellation: Blocks out background noise for focused listening.</li>
                                    <li>Rich Sound Quality: Delivers deep bass and clear highs for immersive audio.</li>
                                    <li>Long Battery Life: Up to 28 hours with the charging case.</li>
                                    <li>Ergonomic Fit: Lightweight and comfortable for all-day wear.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailSection