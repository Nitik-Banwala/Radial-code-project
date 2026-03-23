import { IMAGES } from "../utils/helper";

const HeroSlider = () => {
    const imageElements = [];
    // using for loop
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < IMAGES.length; j++) {
            imageElements.push(
                <img
                    key={`${i}-${j}`}
                    src={IMAGES[j]}
                    alt=""
                    className="w-24 sm:w-32 lg:w-37.5 h-auto"
                />,
            );
        }
    }

    return (
        <div className="w-full m-auto bg-white-grey translate-y-10 md:translate-y-20 lg:translate-y-30 overflow-hidden">
            <div className="max-w-360 m-auto w-full pt-10 sm:pt-14 lg:pt-20 pb-10 sm:pb-14 lg:pb-18 px-4">
                <div className="flex max-w-360 items-center gap-10 sm:gap-16 lg:gap-32.5 animate-scroll">
                    {imageElements}
                </div>
            </div>
        </div>
    );
};

export default HeroSlider;
