import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from './../../../public/34605.jpg'
import img2 from './../../../public/34661.jpg'
import Hero from "../Hero/Hero";
import HeroMain from "../Hero/HeroMain";
const CarouselMain = () => {
    return (
        <div className="text-center bg-base-200 max-h-[600px] overflow-hidden ">
            <Carousel
                autoPlay={'interval'}
                infiniteLoop='true'
                thumbWidth={50}
                showThumbs={false}
                width={false}
                stopOnHover='false'
                interval={3000}
            // className="w-fit mx-auto  "

            >
                <div className="  ">
                    <img className=" object-cover w-full" src={img1} />

                    <div className="text-4xl top-10 absolute text-white ">
                        <HeroMain />
                    </div>
                </div>
                <div>
                    <img src={img2} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
            </Carousel>
        </div>
    );
};

export default CarouselMain;