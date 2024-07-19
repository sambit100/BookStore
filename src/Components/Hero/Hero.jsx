import React, { useState } from 'react'
import bk1 from "../../assets/books/book2.jpg";
import bk2 from "../../assets/books/book1.jpg"
import bk3 from "../../assets/books/book3.jpg";
import vector from "../../assets/website/blue-pattern.png";
const Hero = () => {

    const [imgid,setImgid]=useState(bk1);
    const [title,setTitle] = useState("His Life Will forever be Changed ");
    const [desk,setDesk]= useState("Quam, libero sloe sodlwo gowr lagod lsote  thiso a'dfidoikap g ullam perferendis enim amet repellendus corporis quos officiis atque repellat harum maxime sint magni") ;
    const bgImg ={
        backgroundImage:`url(${vector})`,
        backgroundPostion:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        width:"100%"
    }
    const ImageList = [
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
    <div className='min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 'style={bgImg}>
        <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* for text */}
          <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
             <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold '>{title}

             <p className='bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary'>
               by Sambit Behera
             </p>
             </h1>
             <p className='text-sm'>
               {desk}
               </p>
               <div>

             <button className='rounded-full px-4 py-2 bg-gradient-to-b from-primary text-right text-lg to-secondary 
             hover:scale-105 duration-200
             '>
                OrderNow
             </button>
                 </div>
                 </div>

        {/* for image */}
            <div className='min-h-[450px] flex justify-center items-center relative order-1 sm:order-2'>
                <div className='h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center'>

                <img src={imgid} alt=""
                className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto'
                />
                </div>
                <div className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute
                -bottom-[40px] lg:-right-1 bg-white rounded-full
                '>
                    {
                        ImageList.map((data)=>(
                            <img src={data.img} 
                            className='max-w-[100px] h-[100px] object-contain inline-block hover:scale-110
                            duration-200'
                            onClick={()=>(
                                setImgid(data.id  ===1 ?bk1 :data.id===2 ?bk2 :bk3 ),
                                setTitle(data.title),
                                setDesk(data.desk)
                            )}
                            />
                        ))
                    }
                </div>
            </div>


            </div>
        </div>
    </div>
  )
}

export default Hero