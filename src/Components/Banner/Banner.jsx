import React from 'react'
import img from "../../assets/website/library.jpg";
import {GrSecure } from "react-icons/gr";
const Banner = () => {
  return (
    <div className='py-10'>

    <div className='container'>
         <div className="grid grid-cols-1 sm:grid-cols-2 items-center">

              <div>
                <img src={img} alt="" 
                className='max-w-[400px] block mx-auto h-[350px] w-full drop-shadow-sm object-cover '
                />
              </div>

              <div className='flex flex-col justify-center gap-6 sm:pt-0 '>
                <h1 className='text-3xl sm:text-4xl justify-center gap-6 sm:pt-0'>Library ar your finger tip</h1>
                <p className='text-sm text-gray-500 tracking-wide leading-5 '>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Error deserunt deleniti, sit provident odio molestias
                   corporis voluptatibus. Excepturi itaque quis, quas 
                   earum blanditiis repudiandae necessitatibus odit, 
                   impedit dolore voluptatibus, odio rerum explicabo
                    placeat quae quos? Quod quibusdam omnis ratione debitis.
                </p>
                <div className="flex flex-col gap-4">
                   <div className='flex items-center gap-4 '>   
                    <GrSecure
                    className=' text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400'
                    />    
                     <p>Quality Books</p>
                   </div>

                   <div className='flex items-center gap-4 '>   
                    <GrSecure
                    className=' text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400'
                    />    
                     <p>Fast Delivery</p>
                   </div>
                   <div className='flex items-center gap-4 '>   
                    <GrSecure
                    className=' text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400'
                    />    
                     <p>Easy payment method </p>
                   </div>
                   <div className='flex items-center gap-4 '>   
                    <GrSecure
                    className=' text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-blue-100 dark:bg-blue-400'
                    />    
                     <p>Get Offers on Books</p>
                   </div>
                </div>
              </div>



         </div>
    </div>
                </div>
  )
}

export default Banner;