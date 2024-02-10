import TicketLogo from "../assets/whiteLogo.svg";
const Footer = () => {
  return (
    <>
      <div className="bg-[#000000] p">
        <div className="  text-white px-20 py-8">
          <img src={TicketLogo} className="h-8 mt-20" alt="" />
        </div>
        <hr className="h-px my-8 bg-[#3C3F44] border-0 dark:bg[#3C3F44] mb-2" />
        <div className="flex text-[#ADB1B8] ml-14 p-5   ">
          <p className="mr-2">Made with ❤️</p>
          <p className="mr-2">•</p>
          <p className="mr-2">Privacy policy</p>
          <p className="mr-2">•</p>
          <p className="mr-2">Terms of usage</p>
          <p className="mr-2">•</p>
          <p className="mr-2">Cancellation policy</p>
          <p className="mr-2">•</p>
          <p className="mr-2">Sitemap</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
