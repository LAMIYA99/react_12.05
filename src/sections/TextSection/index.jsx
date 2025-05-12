import React from 'react'

const TextSection = () => {
  return (
  <div>
    <section className=" container  my-28 mx-auto bg-white">
 
  <div className="grid grid-cols-2 divide-x divide-gray-300  font-inter mx-auto text-center">
    <div className="px-6">
      <h3 className=" text-[90px]  font-bold font-inter  text-gray-900">1.5k</h3>
      <p className="text-[24px] font-semibold  mt-1">Happy Customers</p>
      <p className="text-[16px] text-gray-500 mt-2">
      Ut sit amet aliquam libero. Vestibulum ut consectetur orci. Pellentesque nunc sem, consequat non blandit non dictum a mauris.
      </p>
    </div>
    <div className="px-6">
      <h3 className="text-[90px] font-bold text-gray-900">300k</h3>
      <p className="text-[24px] font-semibold  mt-2">Total Sales per Month</p>
      <p className="text-[16px] mt-2  text-gray-500">
        Vestibulum ut consectetur orci. Pellentesque nunc sem, consequat non blandit non dictum a mauris.
      </p>
    </div>
  </div>
</section>

  </div>
  )
}

export default TextSection