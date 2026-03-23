import { useParams } from "react-router-dom";
import { CARD_DATA } from "../utils/helper";
import Innovators from "../components/Innovators";
import PupiloTopic from "../components/PupiloTopic";
import { useEffect, useRef, useState } from "react";
import Button from "../components/common/Button";
import Icons from "../components/common/Icons";


const TableOfContents = ({ sections, activeId }) => {
  const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });
  const linksRef = useRef([]);

  useEffect(() => {
    const activeIndex = sections.findIndex((s) => s.id === activeId);
    if (activeIndex !== -1 && linksRef.current[activeIndex]) {
      const el = linksRef.current[activeIndex];
      setIndicatorStyle({
        top: el.offsetTop,
        height: el.offsetHeight,
      });
    }
  }, [activeId, sections]);

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg leading-150 font-semibold text-black">
        In this article
      </h2>
      <div className="relative flex flex-col gap-4">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full" />
        <div
          className="absolute left-0 w-0.5 bg-purple rounded-full transition-all duration-300 ease-in-out"
          style={{
            top: indicatorStyle.top,
            height: indicatorStyle.height,
          }}
        />

        {sections.map((section, index) => (
          <a
            href={"#" + section.id}
            key={index}
            ref={(el) => (linksRef.current[index] = el)}
            className={`pl-4 leading-150 transition duration-200 font-normal text-base lg:text-base ${activeId === section.id
              ? "text-purple font-semibold"
              : "text-light-grey hover:text-purple"
              }`}
          >
            {section.heading}
          </a>
        ))}
      </div>
    </div>
  );
};

const Pupilo = () => {
  const { slug } = useParams();
  const sectionRefs = useRef([]);

  const [activeId, setActiveId] = useState();

  const matchedBlog = CARD_DATA.find(
    (item) => item.blog.title.toLowerCase().replaceAll(" ", "-") === slug ||
      item.pupilo.title.toLowerCase().replaceAll(" ", "-") === slug
  )?.blog;

  if (!matchedBlog) return <p>Blog not found!</p>;

  const { sections, intro, img, title, date, blog } = matchedBlog;
  console.log(title);




  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((el, i) => {
        if (el) {
          const { top } = el.getBoundingClientRect();
          if (top >= 0 && top <= 300) {
            setActiveId(sections[i].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row max-w-285 w-full mx-auto mt-20 lg:gap-19.5 gap-6 px-4">
        {/* Mobile TOC */}
        <div className="p-4 border sm:hidden flex border-black/10 rounded-2xl shadow-xl">
          <TableOfContents sections={sections} activeId={activeId} />
        </div>

        {/* Main content */}
        <div className="flex flex-col max-w-182.5 w-full gap-15 xl:px-0">
          <div>
            <h1 className="xl:text-5xl lg:text-4xl text-2xl font-semibold leading-120">
              {slug.replaceAll("-", " ")}
            </h1>
            <p className="text-black mt-6 font-medium lg:text-base text-sm">
              {date}
            </p>
            <img
              src={img}
              alt={title}
              className="w-full rounded-2xl mt-[11.69px] max-h-110.5 object-cover"
            />
            <p className="leading-160 text-light-grey mt-5 lg:text-base text-sm">
              {intro}
            </p>
          </div>

          {sections.map((section, i) => (
            <div
              ref={(el) => (sectionRefs.current[i] = el)}
              id={section.id}
              key={i}
              className="flex scroll-mt-30 flex-col gap-5"
            >
              <h2 className="lg:text-custom-3xl text-xl leading-120 font-bold">
                {i + 1 + "."} {section.heading}
              </h2>
              <img
                src={section.img}
                alt={section.heading}
                className="w-full max-w-[730.1px] max-h-[442.1px] h-full rounded-xl"
              />
              <p className="text-black leading-160">{section.paragraph}</p>
              <ul className="flex flex-col gap-3 list-disc pl-5">
                {section.points.map((point, j) => (
                  <li
                    key={j}
                    className="text-grey leading-160 lg:text-base text-sm"
                  >
                    {point.label && (
                      <span className="">{point.label}: </span>
                    )}
                    {point.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p className="mt-10 leading-160 text-black">
            Coding is not just a career path — it's a mindset shift. It teaches
            you how to think, how to solve, how to create. Whether you're 10 or
            50, there's a space in the tech world waiting for you to step in. So
            start now. Be curious. Stay hungry. Build things that matter.
            <br />
            <span className="font-semibold leading-100">
              And remember: The future doesn't wait — neither should you.
            </span>
          </p>
        </div>

        <div className="sticky top-44 self-start hidden sm:block">
          <TableOfContents sections={sections} activeId={activeId} />
        </div>
      </div>

      <div className=" max-w-285 md:mt-40 mt-20 w-full mx-auto ">
        <div className="flex lg:-mb-45 -mb-25 md:flex-row flex-col items-center justify-between w-full px-4">
          <h2 className="font-semibold sm:text-5xl text-3xl leading-120 text-black">You May Also Like</h2>
          <Button className={`flex md:mt-0 mt-5 items-center py-3.5 px-8.75 text-nowrap text-base gap-[13.98px] bg-yellow max-w-40 rounded-[400px] hover:text-yellow hover:bg-black group`}
            text="See all"
            icon={
              <Icons
                icon={"btn_arrow"}
                pathClass={"group-hover:fill-yellow duration-200 ease-in fill-black"}
              />
            } />
        </div>
        <PupiloTopic className={"hidden"} />
      </div>
      <div className="">
        <Innovators
          text={"It's Not Just Learning. It's Leveling Up."}
          description={
            "Browse programs by level, or book a free placement session to find the perfect fit."
          }
        />
      </div>
    </div>
  );
};

export default Pupilo;