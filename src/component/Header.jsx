import Ticketelogo from "../assets/Logo.svg";
import LinkLogo from "../assets/Link.svg";
import HelpLogo from "../assets/Frame.svg";
import HeaderTimer from "./headerTimer.jsx";

const Header = () => {
  return (
    <>
      <div className="container mx-auto ">
        <div className="md:container md:mx-auto   px-12 flex justify-between py-4  ">
          <div className="logo mt-1">
            <img src={Ticketelogo} alt="tickete-logo" />
          </div>
          <div className="link mt-3">
            <img src={LinkLogo} alt="" />
          </div>
          <div className="help">
            <img src={HelpLogo} alt="" />
          </div>
        </div>
      </div>
      <HeaderTimer />
    </>
  );
};

export default Header;
