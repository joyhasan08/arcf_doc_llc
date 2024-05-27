
import './App.css'
import CarouselMain from './component/Carusol/CarouselMain'
import Footer from './component/Flooter/Footer'
import Hero from './component/Hero/Hero'
import HeroMain from './component/Hero/HeroMain'
import MainBoday from './component/Main/MainBoday'
import NavbarMain from './component/Navbar/NavbarMain'
import Services from './component/Servicess/Services'
import Testimonial from './component/Testimonial/Testimonial'



function App() {


  return (
    <>
      <NavbarMain />
      {/* <div className='flex flex-col md:flex-row-reverse  items-center md:mr-6'>
        <div className='w-1/2 hidden md:block'>
          
        </div>
        <div className='md:w-1/2 w-full'>
          <Hero />
        </div>
      </div> */}
      <CarouselMain />
      {/* <HeroMain /> */}
      <Services />
      {/* <MainBoday /> */}
      <Testimonial />
      <Footer />

    </>
  )
}

export default App
