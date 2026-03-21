import { IMAGES } from "../utils/helper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const HeroSlider = () => {
    return (
        <div className="w-full m-auto bg-white-grey translate-y-10 md:translate-y-20 lg:translate-y-30">

            <div className="max-w-360 m-auto w-full pt-10 sm:pt-14 lg:pt-20 pb-10 sm:pb-14 lg:pb-18 px-4">

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={40}
                    loop={true}
                    autoplay={{
                        delay: 0, // continuous scroll effect
                        disableOnInteraction: false,
                    }}
                    speed={3000} // smooth slow motion
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                >
                    {IMAGES.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={img}
                                alt={`slider-${index}`}
                                className="w-24 sm:w-32 lg:w-37.5 h-auto mx-auto"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

        </div>
    );
};

export default HeroSlider;