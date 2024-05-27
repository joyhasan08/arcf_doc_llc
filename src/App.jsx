
import './App.css'
import CarouselMain from './component/Carusol/CarouselMain'
import Footer from './component/Flooter/Footer'
import Hero from './component/Hero/Hero'
import HeroMain from './component/Hero/HeroMain'
import NavbarMain from './component/Navbar/NavbarMain'



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
      <Footer />

    </>
  )
}

export default App
