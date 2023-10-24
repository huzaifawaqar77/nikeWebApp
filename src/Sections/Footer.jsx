import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants/index";
const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base text-white-400 leading-normal font-montserrat sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect size in store. Get rewards
          </p>
          <div className="mt-8 flex items-center gap-5">
            {socialMedia.map((icon) => (
              <div className="rounded-full flex justify-center items-center bg-white h-12 w-12">
                <img src={icon.src} alt={icon.alt} height={24} width={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div>
              <h4 className="text-white font-montserrat text-2xl">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 leading-normal font-montserrat text-base text-white-400 hover:text-slate-gray"
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            height={20}
            width={20}
          />
          <p>Copy right. All rights reserved</p>
        </div>
        <p className="font-montserrat text-base">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
