import { useParams } from "react-router-dom";
import { CARD_DATA } from "../utils/helper";
import Innovators from "../components/Innovators";
import PupiloTopic from "../components/PupiloTopic";

const Pupilo = () => {
    const { slug } = useParams();

    const matchedBlog = CARD_DATA.find(
        (item) => item.blog.title.toLowerCase().replaceAll(" ", "-") === slug,
    )?.blog;

    if (!matchedBlog) return <p>Blog not found!</p>;

    const { sections, intro, img, title, date } = matchedBlog;

    return (
        <div>
            <div className="flex max-w-285 w-full mx-auto mt-20 gap-19.5">
                <div className="flex flex-col max-w-182.5 w-full gap-15">
                    <div>
                        <h1 className="text-5xl font-semibold leading-120">{title}</h1>
                        <p className="text-gray-400 text-sm mt-6">{date}</p>
                        <img
                            src={img}
                            alt={title}
                            className="w-full rounded-2xl mt-[11.69px] max-h-110.5 object-cover"
                        />
                        <p className="leading-160 text-gray-600 mt-5">{intro}</p>
                    </div>

                    {sections.map((section, i) => (
                        <div id={section.id} key={i} className="flex flex-col gap-5">
                            <h2 className="text-custom-3xl leading-120 font-bold">
                                {i + 1 + "."} {section.heading}
                            </h2>
                            <img
                                src={section.img}
                                alt={section.heading}
                                className="w-full max-w-[730.1px] max-h-[442.1px] h-full rounded-xl"
                            />
                            <p className="text-gray-600 leading-160">{section.paragraph}</p>
                            <ul className="flex flex-col gap-3 list-disc pl-5">
                                {section.points.map((point, j) => (
                                    <span key={j} className="text-gray-600 leading-160">
                                        {point.label && (
                                            <span className="font-semibold">{point.label}: </span>
                                        )}
                                        {point.text}
                                    </span>
                                ))}
                            </ul>
                            {section.outro && (
                                <p className="font-semibold leading-160 mt-10">
                                    {section.outro}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
                <div className="sticky top-44 flex flex-col gap-3 self-start">
                    <h2 className="text-lg leading-150 font-semibold">In this article</h2>
                    <div className="flex flex-col gap-4">
                        {sections.map((section, index) => (
                            <a href={"#" + section.id} key={index}>
                                {section.heading}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-between max-w-285 w-full mx-auto ">
                <PupiloTopic text={"You May Also Like"} />
            </div>
            <div className="">
                <Innovators
                    text={"It’s Not Just Learning. It’s Leveling Up."}
                    description={
                        "Browse programs by level, or book a free placement session to find the perfect fit."
                    }
                />
            </div>
        </div>
    );
};

export default Pupilo;