import React from 'react'

const Footer = () => {
  return (
 <footer className='bg-black text-white px-6 md:px-20 py-10' >
   <div >
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">

  
        <div className='flex flex-col text-[#A1A1AA] text-[14px]'>
          <img src="https://klbtheme.com/fynode/wp-content/uploads/2024/11/logo-light.png" alt="" className='w-[150px] h-8'/>
          <p className='mt-5'><span class="font-semibold">Address:</span> 1234 Fashion Street, Suite 567, New York, NY</p>
          <p class="mt-2"><span class="font-semibold">Phone:</span> +123 456 7890</p>
          <p><span class="font-semibold">Email:</span> info@example.com</p>
        </div>

   
        <div className=''>
          <h3 class="text-lg font-semibold mb-4">Let Us Help You</h3>
          <ul class="flex flex-col gap-1 text-sm text-[#A1A1AA] text">
            <li><a href="#">Accessibility Statement</a></li>
            <li><a href="#">Your Orders</a></li>
            <li><a href="#">Returns & Replacements</a></li>
            <li><a href="#">Shipping Rates & Policies</a></li>
            <li><a href="#">Refund and Returns Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Cookie Settings</a></li>
            <li><a href="#">Help Center</a></li>
          </ul>
        </div>


        <div>
          <h3 class="text-lg font-semibold mb-4">Get to Know Us</h3>
          <ul class="flex flex-col gap-1 text-sm text-[#A1A1AA]">
            <li><a href="#">Careers for Fynode</a></li>
            <li><a href="#">About Fynode</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Fynode Devices</a></li>
            <li><a href="#">Customer reviews</a></li>
            <li><a href="#">Social Responsibility</a></li>
            <li><a href="#">Store Locations</a></li>
          </ul>
        </div>


        <div>
          <h3 class="text-lg font-semibold mb-4">Sign Up for Email</h3>
          <p class="text-sm text-gray-300 mb-4">Get first dibs on new arrivals, sales, exclusive content, and more!</p>
          <div class="flex items-center bg-gray-800 rounded-full overflow-hidden mb-2">
            <input type="email" placeholder="Enter your email address" className="bg-neutral-900 text-sm px-6 py-4 w-full focus:outline-none" />
            <button className="bg-black text-white text-sm font-semibold px-4 rounded-2xl py-2">SEND</button>
          </div>
          <p class="text-xs text-[#A1A1AA] leading-5">
            By subscribing you agree to our <span className='text-white'>Terms & Conditions and Privacy & Cookies Policy.</span>
          </p>
        </div>
      </div>
    </div>
 </footer>

  )
}

export default Footer