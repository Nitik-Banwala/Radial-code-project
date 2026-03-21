import { useNavigate } from "react-router-dom";
import { CARD_DATA } from "../utils/helper";
import Button from "./common/Button";
import Icons from "./common/Icons";

const Blogs = () => {
    const navigate = useNavigate();
    const featuredCard = CARD_DATA[0]?.pupilo;
    const sideCards = [
        CARD_DATA[1]?.blog,
        CARD_DATA[2]?.blog,
        CARD_DATA[3]?.blog,
    ].filter(Boolean);

    return (
        <section className="w-full lg:mt-30 md:mt-20 mt-10 bg-[url('/assets/images/webp/s-tow.webp')] bg-cover bg-center py-20 px-4 relative overflow-hidden">
            <div className="max-w-285 mx-auto relative z-10">
                <h2 className="text-white text-4xl sm:text-5xl font-semibold text-center mb-10 leading-120">
                    Our Latest Blogs
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {featuredCard && (
                        <div
                            onClick={() =>
                                navigate(featuredCard.title2.toLowerCase().replaceAll(" ", "-"))
                            }
                            className="bg-white rounded-2xl lg:max-w-[560.1px] w-full p-5 overflow-hidden flex flex-col cursor-pointer group"
                        >
                            <div className="overflow-hidden  max-h-75.25">
                                <img
                                    src={featuredCard.img}
                                    alt={featuredCard.title}
                                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition duration-500"
                                />
                            </div>
                            <div className=" flex flex-col flex-1">
                                <p className="text-purple leading-150 opacity-80 text-base mt-5 mb-3.5 font-medium ">
                                    {featuredCard.date}
                                </p>
                                <h3 className=" text-xl sm:text-custom-2xl font-semibold leading-120 mb-4">
                                    {featuredCard.title2}
                                </h3>
                                <p className="text-grey text-base font-normal inter leading-160 flex-1 max-w-[514px]">
                                    {featuredCard.paragraph2}
                                </p>
                                <Button
                                    className="mt-6.75 flex items-center py-3.5 px-8 bg-yellow max-w-38.5 rounded-[400px] hover:text-yellow hover:bg-black group"
                                    text="Learn More"
                                />
                            </div>
                        </div>
                    )}
                    <div className="flex flex-col gap-y-6">
                        {sideCards.map((card, index) => (
                            <div
                                onClick={() =>
                                    navigate(card.title.toLowerCase().replaceAll(" ", "-"))
                                }
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden border border-[#0000001F] max-[556.1px] p-4 flex flex-row cursor-pointer group"
                            >
                                <div className="overflow-hidden w-[130.1px] sm:w-[160.1px] shrink-0">
                                    <img
                                        src={card.img2}
                                        alt={card.title}
                                        className="w-full h-full object-cover rounded-[12px] group-hover:scale-105 transition duration-500"
                                    />
                                </div>
                                <div className="pl-4 flex flex-col  flex-1">
                                    <p className="text-[#8C52FF] text-sm font-normal leading-150">
                                        {card.date}
                                    </p>
                                    <h3 className="text-black sm:text-xl text-sm font-medium leading-120 mt-4.25 mb-4">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-500 sm:text-sm leading-150">
                                        {card.paragraph}
                                    </p>
                                    <button className="mt-4 self-start underline  text-sm font-semibold text-black hover:text-[#8C52FF] transition flex items-center gap-2.5">
                                        Learn More <Icons icon={"next_arrow"} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <Button
                        className=" flex items-center w-full h-[52.1px] justify-center bg-white max-w-45 rounded-[400px] hover:text-white hover:bg-black group"
                        text="View All"
                        icon={
                            <Icons
                                icon={"btn_arrow"}
                                pathClass={
                                    "group-hover:fill-white duration-200 ease-in fill-black"
                                }
                            />
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default Blogs;