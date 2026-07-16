import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import FooterColumn from "./FooterColumn";

const footerColumns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Templates", "Integrations"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Press"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Help Center", "Community", "Contact"],
  },
];

const socialIcons = [FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub];

const Footer = () => {
  return (
    <footer className="bg-[#101727] px-6 py-16 text-slate-400 lg:px-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div>
            <h2 className="text-3xl font-extrabold text-white">DigiTools</h2>
            <p className="mt-5 max-w-[320px] text-sm leading-6">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {footerColumns.map((column) => (
            <FooterColumn key={column.title} {...column} />
          ))}

          <div>
            <h3 className="text-base font-bold text-white">Social Links</h3>
            <div className="mt-5 flex gap-3">
              {socialIcons.map((Icon, index) => (
                <a
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#101727] hover:bg-[#b20cff] hover:text-white"
                  href="#"
                  key={index}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm md:flex-row md:items-center md:justify-between">
          <p>(c) 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-white">Privacy Policy</a>
            <a className="hover:text-white">Terms of Service</a>
            <a className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
