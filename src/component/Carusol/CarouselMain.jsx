import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from '/banner/Business Consultancy.png'
import img2 from '/34661.jpg'

import HeroMain from "../Hero/HeroMain";
const CarouselMain = () => {
    return (
        <div className="text-center bg-base-200 max-h-[700px] overflow-hidden ">
            <Carousel
                autoPlay={'interval'}
                infiniteLoop='true'
                thumbWidth={50}
                showThumbs={false}
                width={false}
                stopOnHover='false'
                interval={5000}
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