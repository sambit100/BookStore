import React from 'react'
import { FaStar } from "react-icons/fa6";
import bk1 from "../../assets/books/book2.jpg";
import bk2 from "../../assets/books/book1.jpg"
import bk3 from "../../assets/books/book3.jpg";
const Bestbooks = () => {

    const BookList = [
        {
          id: 1,
          img: bk1,
          title: "His Life will forever be Changed",
          desk:
            "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 2,
          img: bk2,
          title: "Who's there",
          desk:
            "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 3,
          img: bk3,
          title: "Lost Boy",
          desk:
            "Lost Boy, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ];







  return (
    <div className='py-10'>
        <div className='container'>
            <div className='text-center mb-20 max-w-[400px] mx-auto'>
                <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                    Trending Books
                </p>
           <h1 className='text-3xl font-bold'>Best Books</h1>
           <p className='text-xs text-gray-400'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, consequuntur. Reiciendis possimus facere tempore. Nemo, minus? Quas asperiores rerum velit.
           </p>
            </div>

 {/* card section */}
 <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center'>
    {
     BookList.map((book)=>(
        <div className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]'>
            <div className='h-[100px]'> <img src={book.img} alt="" 
            className='max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md '
            
            />
            </div>
            <div className='p-4 text-center'>

            <div className='flex w-full items-center justify-center'>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
            </div>
               <h1 className='text-xl font-bold'
               >{book.title}</h1>
               <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{book.desk}</p>
               <button className='rounded-full px-4 py-2 mt-4 bg-gradient-to-b from-green-500 text-right text-lg to-green-600
             hover:scale-105 duration-200
             '>
                OrderNow
             </button>

            </div>
            </div>
    
     ))
    }
  

 </div>


        </div>
    </div>
  )
}

export default Bestbooks