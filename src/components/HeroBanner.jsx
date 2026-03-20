import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { FAMILIES_DATA_LIST } from "../utils/helper";

const HeroBanner = () => {
    return (
        <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade" 
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="w-full h-[500.1px]"
        >
            {FAMILIES_DATA_LIST.map((slide, index) => (
                <SwiperSlide key={index}>
                    {/* Background Image */}
                    <div
                        className="w-full h-full relative"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: "cover",
                        }}
                    >
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent" />

                        {/* Text Content */}
                        <div className="absolute bottom-16 left-10 text-white">
                            <h1 className="text-4xl font-bold">{slide.title}</h1>
                            <p className="text-lg mt-2">{slide.description}</p>
                            <button className="mt-4 px-6 py-2 bg-purple rounded-full">
                                Watch Now
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HeroBanner;
