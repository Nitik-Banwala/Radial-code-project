import { Link } from "react-router-dom";
import { FOOTER_LINKS, CONTACT_ICONS, SOCIAL_ICONS } from "../../utils/helper";
import Button from "./Button";
import Icons from "./Icons";

const Footer = () => {
  return (
    <footer className="w-full bg-white-grey px-4">
      <div className="max-w-285 w-full mx-auto">
        <div className="flex min-[1180px]:justify-between min-[1180px]:flex-row flex-col pt-12 lg:pt-20 pb-16">
          <div className="max-w-[338.1px]">
            <Link to="/">
              <img
                src="/assets/images/png/logo.png"
                alt="Radial Code Logo"
                className="w-[252.1px] h-7.25 mb-6"
              />
            </Link>
            <p className="font-normal text-base leading-150 tracking-normal text-black opacity-70 mb-6">
              Pupilo is Africa's most loved online coding platform for kids and
              teens—where every child can code, create, and thrive.
            </p>
            <h3 className="font-semibold text-base leading-100 h-6 mb-3">
              Subscribe to our Newsletter
            </h3>
            <div className="flex max-[400px]:flex-col flex-row max-[400px]:p-1.5 items-stretch sm:items-center bg-black/4 min-[400px]:rounded-[400px] rounded-2xl sm:rounded-full w-full max-w-[338.1px] gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-transparent px-5 py-2.5 sm:py-0 text-sm outline-none w-full"
              />
              <Button
                text={"Subscribe"}
                className="bg-yellow flex justify-center items-center min-[400px]:rounded-full rounded-2xl border border-yellow text-base font-semibold hover:bg-white max-[400px]:w-full min-[400px]:w-[146.1px] h-[52.1px]"
              />
            </div>
          </div>
          <div className=" min-[720px]:flex justify-between max-[1179px]:w-full max-[1180px]:mt-8 flex-row gap-[56.1px] grid grid-cols-2 max-[510px]:grid-cols-1 ">
            <div className="max-w-[102.1px]">
              <h3 className="font-semibold text-[13px] sm:text-[16px] mb-3">
                {FOOTER_LINKS[0].title}
              </h3>
              <ul className="space-y-3 text-gray-600">
                {FOOTER_LINKS[0].links.map((link, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:text-black transition text-[14px] sm:text-[16px]"
                  >
                    <a href="" className="li">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="max-w-[208.1px]">
              <h3 className="font-semibold text-[13px] sm:text-[16px] mb-3">
                {FOOTER_LINKS[1].title}
              </h3>
              <ul className="space-y-3 text-gray-600">
                {FOOTER_LINKS[1].links.map((link, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:text-black transition text-[14px] sm:text-[16px]"
                  >
                    <a href="" className="li">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" max-w-[212.1px]">
              <h3 className="font-semibold text-[13px] sm:text-[16px] mb-3">
                Contact Us
              </h3>
              <ul className="space-y-3 text-gray-600 mb-8">
                {CONTACT_ICONS.map((item, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-black flex items-center gap-2"
                  >
                    <a
                      target="_blank"
                      href={item.link}
                      className="flex items-center gap-2 li text-[14px] sm:text-[16px]"
                    >
                      <Icons icon={item.icon} />
                      <span>{item.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <h4 className="font-semibold text-[13px] sm:text-[16px] mb-2">
                Follow Us
              </h4>
              <div className="flex gap-2">
                {SOCIAL_ICONS.map((item, index) => (
                  <a target="_blank" key={index} href={item.link}>
                    <Icons icon={item.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-black/10 ">
        <div className="max-w-360 mx-auto px-6 lg:px-20 py-6 text-center font-normal opacity-80 leading-150 text-black text-base">
          Copyright © {new Date().getFullYear()} Pupilo. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
