import React from 'react'

const CustomerSection = () => {
    return (
        <section>

            <div className='container mx-auto my-36'>
                <div className='grid md:grid-cols-4 gap-6'>
                    <div className=''>
                        <ul className='flex gap-6 font-inter'>
                            <li><img src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/footer.png" alt="" className='w-[40px] h-[40px]' /></li>
                            <li className='text-[18px] font-semibold'>Customer service <br /> <span className='text-[14px] font-normal text-gray-500'>It’s not actually free we just price it into the <br /> products.</span></li>
                        </ul>
                    </div>
                    <div className=''>
                        <ul className='flex gap-6 font-inter'>
                            <li><img src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/footer2.png" alt="" className='w-[40px] h-[40px]' /></li>
                            <li className='text-[18px] font-semibold'> Fast Free Shipping <br /> <span className='text-[14px] font-normal text-gray-500'>It’s not actually free we just price it into the <br /> products.</span></li>
                        </ul>
                    </div>
                    <div className=''>
                        <ul className='flex gap-6 font-inter'>
                            <li><img src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/footer3.png" alt="" className='w-[40px] h-[40px]' /></li>
                            <li className='text-[18px] font-semibold'> Returns & Exchanges <br /> <span className='text-[14px] font-normal text-gray-500'>It’s not actually free we just price it into the <br /> products.</span></li>
                        </ul>
                    </div>
                    <div className=''>
                        <ul className='flex gap-6 font-inter'>
                            <li><img src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/footer4.png" alt="" className='w-[40px] h-[40px]' /></li>
                            <li className='text-[18px] font-semibold'>Secure payment <br /> <span className='text-[14px] font-normal text-gray-500'>It’s not actually free we just price it into the <br /> products.</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomerSection