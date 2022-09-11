import React from 'react'
import img from './picture.png'
import {BsDownload} from 'react-icons/bs'
import {FcLike} from 'react-icons/fc'
import {CgArrowsExchange} from 'react-icons/cg'




const Body = () => {
  return (
    <div className='w-fullscreen'>
     <div className='flex justify-start pl-52'>
        <button 
        class="w-full tracking-wider px-6 py-2.5 mt-6 text-sm text-white transition-colors duration-300 transform bg-purple-600 rounded-md lg:w-auto hover:bg-purple-500 focus:outline-none focus:bg-purple-500">For Rent</button>
     </div >    
     <div className='flex justify-start pl-52 p-5'>
        <p className='font-bold text-lg'>2BHK Apartment for Sale in Newtown, Kolkata, West Bengal</p>
     </div>
     {/* image */}
     <div className='flex gap-4 px-52 sm::min-w-max'>
                <div className='w-1/2 hidden md:block '>
                    <img className='none w-full photo-shadow' src={img} alt="" />
                </div>
                <div className='sm:grid grid-cols-2 gap-3 md:w-1/2 '>
                    <div>
                        <img className='photo-shadow' src={img} alt="" />
                    </div>
                    <div>
                        <img className='photo-shadow' src={img} alt="" />
                    </div>
                    <div>
                        <img className='photo-shadow' src={img} alt="" />
                    </div>
                    <div>
                        <img className='photo-shadow' src={img} alt="" />
                    </div>
                </div>
            </div>
{/* price */}
<div>
<section class="text-gray-600 body-font ">
  <div class="container py-58  mx-auto flex items-center md:flex-row flex-col px-4 py-4">
  
      <h1 class="md:text-3xl text-2xl font-medium title-font text-purple-700">₹ 25,000</h1>
  
    <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4 justify-center">
      <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
       
         <BsDownload className='text-purple-700 justify-center'></BsDownload>
        
      </button>
      <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                 <span class="title-font font-medium"><FcLike className='text-purple-700'></FcLike></span>
        
      </button>
      <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                 <span class="title-font font-medium"><CgArrowsExchange className=''></CgArrowsExchange></span>
      
      </button>
      
    </div>
  </div>
</section>
</div>


     </div>

  )
}

export default Body