import { Link } from "react-router-dom";
import { routes } from "../utils/constants/route";
import { INavigationProps, INavigations } from "../utils/interface/navigation";

const FooterNav: React.FC<INavigationProps> = ({ navigation }) => {
  const { path, title } = navigation;
  return (
    <p className="cursor-pointer">
      <Link to={path}>{title}</Link>
    </p>
  );
};

const Footer = () => {
  return (
    <footer className="px-12 pt-8 pb-2 bg-mocha font-lato text-chocolate text-opacity-75">
      <div className="flex flex-col gap-4 sm:flex-row items-center justify-between pb-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">cafechaa</h1>
          <div className="flex items-center bg-transparent border border-chocolate rounded-full py-1 pl-4 pr-1">
            <input
              type="email"
              className="border-none outline-none flex-1 bg-transparent text-chocolate text-xs"
              placeholder="Enter your email"
            />
            <button className="bg-chocolate rounded-full text-mocha px-1 text-sm">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5 text-xs">
          {routes.map((route: INavigations, indx: number) => (
            <FooterNav navigation={route} key={indx} />
          ))}
        </div>
        <div className="flex w-40">
          <p className="text-xs">
            Random Address 123 St., Davao City, Philippines, 8000
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between text-xs">
        <h1>cafechaa is a static website made with love.</h1>

        <div className="flex items-center gap-4">
          <p className="cursor-pointer">
            <a
              href="http://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </p>
          <p className="cursor-pointer">
            <a
              href="http://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tiktok
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
