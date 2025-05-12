import React from 'react'

const CardsSection = () => {
    return (
        <section>
            {/* <div className='container mx-auto my-28'>
                <div className='grid md:grid-cols-4'>
                    <div className='flex flex-col bg-[#f1f1f3] rounded-2xl shadow-xl'>
                        <h4 className='text-[24px] font-semibold font-inter mt-5 px-10 ' >Earphones</h4>
                        <h5 className='mt-5 px-10 text-[13px]'>10 Products</h5>
                        <img src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/category-earphones.png" alt="" 
                        className='w-full h-full object-cover'/>
                        <button className='bg-white w-fit my-5 p-[16px]'>View Products</button>
                    </div>
                </div>
            </div> */}



            <div className='container mx-auto '>
                <div className='grid md:grid-cols-4'>
                    <div class="w-[345px] h-[480px] bg-gray-100 rounded-2xl shadow p-6 flex flex-col">

                        <div class="mb-4">
                            <h2 class="text-[24px] font-semibold font-inter text-gray-900">Earphones</h2>
                            <p class="text-sm text-gray-500">10 Products</p>
                        </div>

                        <div class="flex justify-center mb-4">
                            <img src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/category-earphones.png" alt="Headphones" class="" />
                        </div>

                        <div className='my-3'>
                            <a href="#" class="bg-white text-[14px]  my-12 px-5 py-4 rounded-full shadow">
                                View Products
                            </a>
                        </div>
                    </div>
                    <div class="w-[345px] h-[480px] bg-gray-100 rounded-2xl shadow p-6 flex flex-col">

                        <div class="mb-4">
                            <h2 class="text-[24px] font-semibold font-inter text-gray-900">Headphones</h2>
                            <p class="text-sm text-gray-500">8 Products</p>
                        </div>

                        <div class="flex justify-center mb-4">
                            <img src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/category-headphones.png" alt="Headphones" class="" />
                        </div>

                        <div className='my-3'>
                            <a href="#" class="bg-white text-[14px]  my-12 px-5 py-4 rounded-full shadow">
                                View Products
                            </a>
                        </div>
                    </div>
                    <div class="w-[345px] h-[480px] bg-gray-100 rounded-2xl shadow p-6 flex flex-col">

                        <div class="mb-4">
                            <h2 class="text-[24px] font-semibold font-inter text-gray-900">Microphones</h2>
                            <p class="text-sm text-gray-500">8 Products</p>
                        </div>

                        <div class="flex justify-center mb-4">
                            <img src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/category-microphone.png" alt="Headphones" class="" />
                        </div>

                        <div className='my-3'>
                            <a href="#" class="bg-white text-[14px]  my-12 px-5 py-4 rounded-full shadow">
                                View Products
                            </a>
                        </div>
                    </div>
                    <div class="w-[345px] h-[480px] bg-gray-100 rounded-2xl shadow p-6 flex flex-col">

                        <div class="mb-4">
                            <h2 class="text-[24px] font-semibold font-inter text-gray-900">Smartwatches</h2>
                            <p class="text-sm text-gray-500">7 Products</p>
                        </div>

                        <div class="flex justify-center mb-4">
                            <img src="https://klbtheme.com/fynode/wp-content/uploads/2024/11/smartwatch.svg" alt="Headphones" class="" />
                        </div>

                        <div className='my-3 '>
                            <a href="#" class="bg-white text-[14px]  px-5 py-4 rounded-full shadow">
                                View Products
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default CardsSection