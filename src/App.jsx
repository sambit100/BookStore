
import './App.css'
import Banner from './Components/Banner/Banner'
import Bestbooks from './Components/BestBooks/Bestbooks'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Appstorebanner from './Components/AppstoreBan/Appstorebanner'
import Allbooks from './Components/Allbooks/Allbooks'
import Tesimonials from './Components/Testimonials/Tesimonials';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-300'>
      <Navbar/>
      <Hero/>
      <Bestbooks/>
      <Banner/>
      <Appstorebanner/>
      <Allbooks/>
      <Tesimonials/>
      <Footer/>
    </div>
    </>
  )
}

export default App
