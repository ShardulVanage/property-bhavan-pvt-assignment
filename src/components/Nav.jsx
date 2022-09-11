import React from 'react'
import {CgProfile} from 'react-icons/cg'
const Nav = () => {
  return (
    <div >
      <header class="text-gray-600 body-font ">
  <div class="container mx-auto flex flex-wrap p-5  flex-col md:flex-row items-center border-x-slate-900 ">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      
      <span class="ml-3 text-xl font-bold tracking-widest text">Property  bhavan</span>
    </a>
           
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900 cursor-pointer font-bold">Home</a>
      <a class="mr-5 hover:text-gray-900 cursor-pointer font-bold">List your Property</a>
      <a class="mr-5 hover:text-gray-900 cursor-pointer font-bold">Blog </a>
    </nav>
      <button class="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><CgProfile class="w-4 h-4 ml-1 text-purple-700"></CgProfile></button>
   
  </div>
</header>
<hr></hr>
    </div>
  )
}

export default Nav