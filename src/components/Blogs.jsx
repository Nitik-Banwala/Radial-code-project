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
    const handelClick = (card) => {
        navigate(`/blog/${card.title.toLowerCase().replaceAll(" ", "-")}`)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    const handelClick2 = (featuredCard) => {
        navigate(`/blog/${featuredCard.title2.toLowerCase().replaceAll(" ", "-")}`)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <section className="w-full lg:mt-30 md:mt-20 mt-10 bg-[url('/assets/images/webp/blogs_Background.webp')] bg-cover bg-center py-20 px-4 relative overflow-hidden">
            <div className="max-w-285 mx-auto relative z-10">
                <h2 className="text-white text-3xl sm:text-5xl font-semibold text-center mb-10 leading-120">
                    Our Latest Blogs
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {featuredCard && (
                        <div
                            onClick={() =>
                                handelClick2(featuredCard)
                            }
                            className="bg-white rounded-2xl transform transition duration-200 hover:-translate-y-2 lg:max-w-[560.1px] w-full p-5 overflow-hidden flex flex-col cursor-pointer group"
                        >
                            <div className="overflow-hidden min-h-60 min-[600px]:max-h-75.25">
                                <img
                                    src={featuredCard.img}
                                    alt={featuredCard.title}
                                    className="w-full h-full object-cover rounded-xl transition duration-500"
                                />
                            </div>
                            <div className=" flex flex-col flex-1">
                                <p className="text-purple leading-150 opacity-80 text-base mt-5 mb-3.5 font-medium ">
                                    {featuredCard.date}
                                </p>
                                <h3 className=" text-xl sm:text-custom-2xl font-semibold leading-120 mb-4">
                                    {featuredCard.title2}
                                </h3>
                                <p className="text-grey text-base font-normal inter leading-160 flex-1 max-w-128.5">
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
                            <div onClick={() => handelClick(card)}
                                key={index}
                                className="bg-white transform transition duration-200 hover:-translate-y-2 rounded-2xl overflow-hidden border border-[#0000001F] max-[556.1px] p-4 flex flex-col min-[600px]:flex-row cursor-pointer group">
                                <div className="overflow-hidden min-[600px]:w-[160.1px] max-w-127.5 max-h-60 shrink-0">
                                    <img
                                        src={card.img2}
                                        alt={card.title}
                                        className="w-full h-full object-cover rounded-xl transition duration-500"
                                    />
                                </div>
                                <div className=" min-[600px]:pl-4 flex flex-col flex-1">
                                    <p className="text-[#8C52FF] mt-2 min-[600px]:mt-0 text-sm font-normal leading-150">
                                        {card.date}
                                    </p>
                                    <h3 className="text-black sm:text-xl text-sm font-medium leading-120 mt-4.25 mb-4">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-500 sm:text-sm leading-150">
                                        {card.paragraph}
                                    </p>
                                    <button className="mt-4 self-start underline text-sm font-semibold text-black hover:text-[#8C52FF] transition flex items-center gap-2.5">
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