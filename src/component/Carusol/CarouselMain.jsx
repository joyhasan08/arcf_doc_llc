import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from '/banner/boy.png'
import img2 from '/banner/mye.png'
import img3 from '/banner/front.png'

import HeroMain from "../Hero/HeroMain";
const CarouselMain = () => {
    return (
        <div className="text-center bg-base-200 md:max-h-[700px] h-full overflow-hidden ">
            <Carousel
                autoPlay={'interval'}
                infiniteLoop='true'

                showThumbs={false}
                width={false}
                stopOnHover={false}
                interval={3000}
            // className="w-fit mx-auto  "

            >
                <div className="  ">
                    <img className=" object-cover w-full" src={img3} />

                    <div className="text-4xl top-10 absolute text-white ">
                        <HeroMain />
                    </div>
                </div>
                <div>
                    <img src={img2} />
                    <div className="text-4xl top-10 absolute text-white ">
                        <HeroMain />
                    </div>
                </div>
                <div>
                    <img src={img1} />
                    <div className="text-4xl top-10 absolute text-white ">
                        <HeroMain />
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default CarouselMain;