import React from 'react';
import img from '../../assets/website/banner.jpg';
import img1 from '../../assets/website/app_store.png';
import img2 from '../../assets/website/play_store.png';
import { Link } from 'react-router-dom';
const Appstorebanner = () => {
    const bannerImg = {
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%"
    };

    return (
        <div className='bg-gray-100 dark:bg-gray-800 text-white py-10'
            style={bannerImg}>
            <div className="container mx-auto  ">
                <div className="space-y-6 max-w-xl mx-auto">
                    <h1 className='text-2xl sm:text-4xl font-semibold mb-6'>
                        Read Books at Your Fingertips
                    </h1>
                    <div className='flex flex-wrap justify-center items-center gap-4 '>
                        <Link>
                         <img src={img1} alt="" 
                         className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
                         />
                        </Link>
                        <Link>
                        <img src={img2} alt="" 
                         className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Appstorebanner;
