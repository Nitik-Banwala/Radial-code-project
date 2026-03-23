import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
import { MdOutlineArrowBackIos } from "react-icons/md";
import Heading from "../components/common/Heading";
import { FAMILIES_DATA_LIST } from "../utils/helper";
import Icons from "./common/Icons";
import "swiper/css";

const Families = () => {
  const swiperRef = useRef(null);
  return (
    <div className="max-w-330 w-full mx-auto flex flex-col md:gap-10 gap-5 items-center px-4 mb-10 md:mb-20 lg:mb-40">
      <Heading
        text={"Hear What Families Say About Pupilo"}
        className={"md:text-left text-center"}
      />
      <div className="max-w-312 w-full relative sm:px-14 ">
        <Swiper
          centeredSlides={true}
          loop={true}
          modules={[Keyboard]}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          spaceBetween={10}
          slidesPerGroup={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {FAMILIES_DATA_LIST.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="border  border-[#5D61801F] max-w-88 justify-between sm:h-67.75 md:h-68.5 lg:h-71.5 xl:h-58 h-full shadow-[0px_0px_32px_0px_rgba(0,0,0,0.06)] rounded-3xl p-5.75 flex flex-col gap-4 hover:border-purple duration-200 ease-in">
                <Icons icon={"rating"} />
                <p className="leading-150 md:text-base text-sm text-black/70">
                  {item.description}
                </p>
                <div className="flex gap-3 items-center">
                  <img
                    src={item.image || null}
                    alt={item.image}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <h4 className="md:text-xl leading-150">{item.name}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <>
          <div className="sm:flex hidden">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="sm:absolute -left-2 top-1/2 -translate-y-1/2 z-10 border border-black cursor-pointer h-12 w-12 rounded-full flex items-center justify-center duration-200 ease-in hover:text-white hover:border-transparent hover:bg-purple"
            >
              <MdOutlineArrowBackIos className="text-xl" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="sm:absolute -right-2 top-1/2 -translate-y-1/2 z-10 border border-black cursor-pointer h-12 w-12 rounded-full flex items-center justify-center duration-200 ease-in hover:text-white hover:border-transparent hover:bg-purple"
            >
              <MdOutlineArrowBackIos className="rotate-180 text-xl" />
            </button>
          </div>
        </>
      </div>
    </div>
  );
};

export default Families;
