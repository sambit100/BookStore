import React from 'react'
import { FaStar } from "react-icons/fa6";
import bk1 from "../../assets/books/book2.jpg";
import bk2 from "../../assets/books/book1.jpg"
import bk3 from "../../assets/books/book3.jpg";

const Allbooks = () => {
    const BookList = [
      {
        id: 1,
        img: bk1,
        title: "Who's there",
        rating: 5.0,
        author: "Someone",
      },
      {
        id: 2,
        img: bk2,
        title: "His Life",
        rating: 4.5,
        author: "John",
      },
      {
        id: 3,
        img: bk3,
        title: "Lost boys",
        rating: 4.7,
        author: "Lost Girl",
      },
      {
        id: 4,
        img: bk2,
        title: "His Life",
        rating: 4.4,
        author: "Someone",
      },
      {
        id: 5,
        img: bk1,
        title: "Who's There",
        rating: 4.5,
        author: "Someone",
      },
    ];

  return (
    <div className='py-10'>
        <div className="container placeholder-gray-100">
        <div className='text-center mb-20 max-w-[400px] mx-auto'>
                <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                    Top Books
                </p>
           <h1 className='text-3xl font-bold'>Best Books</h1>
           <p className='text-xs text-gray-400'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Quaerat, consequuntur. Reiciendis possimus facere tempore. 
            Nemo, minus? Quas asperiores rerum velit.
           </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
            place-items-center gap-5
            '>
                {
                    BookList.map((data)=>(
                      <div>
                          <img src={data.img} alt="" 
                          className='w-[150px] h-[220px] object-cover '
                          />
                          <h1 className='font-bold '>{data.title}</h1>
                        <p className='text-sm text-gray-600'>{data.author}</p>
                        <div className='flex items-center'>
                          <FaStar className='text-yellow-300'/>
                          <span>{data.rating}</span>
                          

                        </div>
                       
                       
                       
                        </div>
                        
                    ))
                }
            </div>

        <div className='flex  justify-center align-center mt-5'>
           <button className='bg-blue-600 text-lg rounded-lg p-2 text-white'>View All</button>
        </div>
        </div>
    </div>
  )
}

export default Allbooks;