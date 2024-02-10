import "../assets/styles/App.css";
import InfoLogo from "../assets/Info.svg";
import CardLogo from "../assets/card.svg";
import RadioLogo from "../assets/Radio.svg";
import VisaLogo from "../assets/visa.svg";
import VectorLogo from "../assets/vector.svg";
import MasterCardLogo from "../assets/mastercard.svg";
import PiggyLogo from "../assets/piggy.svg";
import LockButtonLogo from "../assets/lockbutton.svg";
import AppleLogo from "../assets/apple.svg";
import GpayLogo from "../assets/gpay.svg";
import BlackInfoLogo from "../assets/VectorBlack.svg";
import CardCarousel from "./CardCarousel";
import Star from "../assets/star.svg";
import ClockLogo from "../assets/Clock.svg";
import TicketLogo from "../assets/Ticket.svg";
import InputAddLogo from "../assets/InputAddon.svg";
import UserLogo from "../assets/user.svg";
import PlusLogo from "../assets/plus.svg";
import PiggyGreenLogo from "../assets/piggyLogo.svg";
import Igray from "../assets/igray.svg";
import GlobeLogo from "../assets/earth.svg";

const PaymentSection = () => {
  return (
    <section className="grid w-full  gap-2 sm:grid-cols-2 md:grid-cols-3      ">
      {/* confirm and pay div */}
      <div className="first-div col-span-2">
        <p className="font-serif font-medium text-[57px]">Confirm & pay</p>
        <div className="fee-cancellation border rounded-xl mt-8 px-3 py-3 ">
          <div className="flex justify-between">
            <p className="font-sans text-[14px] ">Free cancellation</p>
            <img src={InfoLogo} alt="" />
          </div>
          <p className="font-thin text-sm">
            Tickets can be cancelled by 13th December, 2022.
          </p>
        </div>
        {/* Enter your details div */}
        <div className="details mt-4 ">
          <p className="font-sans font-semibold text-[24px] mb-6 ">
            Enter your details
          </p>
          <p className="font-sans font-thin text-[14px] mb-10">
            We'll be sending your tickets to the details below. Booking for a
            friend? Add their details.
          </p>
          <div className="input-container w-full grid  gap-4  ">
            <input
              type="text"
              className="input-1 border rounded-xl p-3 w-full "
              placeholder="Full name "
            />
            <div className="grid grid-cols-2 gap-4">
              <select
                id="countries"
                class=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              >
                <option>+91</option>
              </select>
              <input
                placeholder="Phone number"
                type="text"
                className="input-3 border rounded-xl p-3 "
              />
              <input
                placeholder="Email"
                type="text"
                className="input-4 border rounded-xl p-3 "
              />
              <input
                placeholder="Confirm email"
                type="text"
                className="input-5 border rounded-xl p-3 "
              />
            </div>
          </div>
        </div>
        {/* Additional information div */}
        <div className="information mt-8">
          <p className="font-sans font-semibold text-[24px] mb-6 ">
            Additional information
          </p>
          <p className="font-sans font-thin text-[14px] mb-10">
            We need a few more details to complete your reservation.
          </p>
          <div className="input-container w-full grid  gap-4  ">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                className="input-2 border rounded-xl p-3  "
                placeholder="Input label"
              />
              <select
                id="countries"
                class=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              >
                <option>Select</option>
              </select>
            </div>
            <select
              id="countries"
              class=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            >
              <option>Multiselect</option>
            </select>
          </div>
        </div>
        {/* Select Payment div */}
        <div className="payment mt-8">
          <p className="font-sans font-semibold text-[24px] mb-6 ">
            Select your mode of payment
          </p>
          <p className="font-sans font-thin text-[14px] mb-10">
            Payments with Tickete are secure and encrypted.
          </p>
          {/* logo and radio */}
          <div className="w-full grid border rounded-lg p-10 border-[#1C2024]">
            <div className="credit-logo-container flex justify-between">
              <div className="card-logo flex p-2 mb-4">
                <img src={CardLogo} className="border rounded-md px-2" alt="" />
                <p className="font-sans text-[16px] ml-3">
                  Credit & debit card
                </p>
              </div>
              <div className="circle-logo">
                <img src={RadioLogo} alt="" />
              </div>
            </div>
            {/* logos */}
            <div className="logos grid grid-cols-3 p-2  w-40 mb-4">
              <img src={VisaLogo} alt="" className="" />
              <img src={MasterCardLogo} alt="" className="" />
              <img src={VectorLogo} alt="" className="" />
            </div>
            <div className="input-container grid grid-cols-2 gap-4">
              <input
                type="text"
                className="input-2 border rounded-xl p-3  "
                placeholder="Name on card"
              />
              <input
                placeholder="Card number"
                type="text"
                className="input-3 border rounded-xl p-3 "
              />
              <input
                placeholder="Expiry date"
                type="text"
                className="input-3 border rounded-xl p-3 "
              />
              <input
                placeholder="<CVV/CVC>"
                type="text"
                className="input-3 border rounded-xl p-3 "
              />
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300 mb-2" />
            <p className="mb-3 font-sans text-[18px] font-extrabold ">
              Total payable: $XXX
            </p>
            <div className="grid grid-cols-2  gap-2">
              <div className="grid grid-flow-col font-sans font-thin text-[10px]">
                <p>You will be charged in AED</p>
                <img src={InfoLogo} alt="" />
              </div>
              <div className=" border flex rounded-xl flex-end w-40 ml-40   p-1 text-white bg-[#299764]">
                <img src={PiggyLogo} className="mr-0 ml-2" alt="" />
                <p className="text-[12px]  ml-2 font-sans">
                  You save {"<price>"}
                </p>
              </div>
              <p className=" text-[12px]  font-normal">
                By clicking “confirm & pay”, you agree{" "}
                <span className="text-[#3A5CCC]">
                  to Tickete’s general terms and conditions
                </span>{" "}
                and <span>cancellation policy.</span>
              </p>
            </div>
            {/* button */}
            <div className="flex p-2  text-center   text-white border rounded-xl mt-3 bg-[#000000] w-52 ">
              <button className="flex p-2  ">
                <img src={LockButtonLogo} alt="" />
                <p className="ml-5">Confirm & pay</p>
              </button>
            </div>
          </div>
          {/* coming soon options */}
          <div className="flex border payment-option border-gray-400 bg-[#F9F9FB] rounded-xl justify-between mt-3 p-3">
            <div className="flex text-center cursor-auto  w-52 ">
              <img src={AppleLogo} alt="appleLogo" />
              <p className="ml-2 ">Coming soon</p>
            </div>
            <div class="flex">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </div>
          <div className="flex border payment-option border-gray-400 bg-[#F9F9FB] rounded-xl justify-between mt-3 p-3">
            <div className="flex text-center  w-52 ">
              <img src={GpayLogo} alt="appleLogo" />
              <p className="ml-2 ">Coming soon</p>
            </div>
            <div class="flex">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300 mb-16" />
        <div className="">
          <p className="mb-3 font-sans text-[18px] font-extrabold ">
            Total payable: $XXX
          </p>
        </div>
        <div className="flex total-pay border rounded-xl p-3">
          <div className="w-5 mt-1 mr-5">
            <img src={BlackInfoLogo} alt="" />
          </div>
          <div className="font-sans ">
            <p className="font-[600] text-[14px]">You will be charged in AED</p>
            <p className=" font-[100] text-[12px]">
              The price shown here is in US Dollar (USD) as per the current
              conversion rate. You will be charged in United Arab Emirates
              Dirham (AED).
            </p>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="second div border rounded-2xl bg-[#FFFFFF]">
        <CardCarousel />
        <div className="p-5">
          <div className="flex ">
            <img src={Star} alt="star" />
            <p>
              4.9{" "}
              <span className="text-[12px] font-thin">
                {"(4.5k) . category"}
              </span>
            </p>
          </div>
          <p>
            Amsterdam open boat canal cruise - Live Guiye - from Anne Frank
            Housef
          </p>
          <div className="mt-5 ">
            <div className="flex mb-5">
              <img src={TicketLogo} alt="" />
              <p className="text-[14px] font-normal ml-4 ">
                {"<ticket type - variant>"}
              </p>
            </div>
            <div className="flex mb-5">
              <img src={InputAddLogo} alt="" />
              <div className="ml-4  mt-1 ">
                <p className="text-[14px] font-normal">
                  {"<day>, <month> <date>"}
                </p>
                <p className="font-sans text-[10px] font-thin">
                  {"Duration: <duration>"}
                </p>
              </div>
            </div>
            <div className="flex mb-5">
              <img src={ClockLogo} alt="" />
              <div className="ml-4  mt-1 ">
                <p className="text-[14px] font-normal">{"<time>"}</p>
                <p className="font-sans text-[10px] font-thin">
                  {"Operating hours: <time> to <time>"}
                </p>
              </div>
            </div>
            <div className="flex mb-5">
              <img src={UserLogo} alt="" />
              <p className="text-[14px] font-normal ml-4  ">5 guests</p>
            </div>
          </div>
          <hr class="border-t-[2px] border-dotted border-black-800 h-1 text-center overflow-visible after:relative " />
          <div className="flex justify-between mt-5 text-[#60646C]">
            <p>View payment summary</p>
            <img src={PlusLogo} alt="pluslogo" />
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300 mb-2" />
        <div className="p-5">
          <div className="flex justify-between text-[18px] font-[600] mb-3">
            <p>Total payable</p>
            <p>$XXX</p>
          </div>
          <div className="bg-[#E9F9EE] w-44 flex border rounded-xl p-1 mb-3">
            <img
              src={PiggyGreenLogo}
              className="fill-current text-green-600"
              alt="piggyLogo"
            />
            <p className="ml-2 text-green-600">{"You saved <price>"}</p>
          </div>
          <div className="flex font-thin text-[12px] mb-8">
            <p>You will be charged in AED</p>
            <img src={Igray} alt="" />
          </div>
          <p className=" text-[12px] text-gray-400 font-normal mb-5">
            By clicking “confirm & pay”, you agree{" "}
            <span className="text-[#3A5CCC]">
              to Tickete’s general terms and conditions
            </span>{" "}
            and <span>cancellation policy.</span>
          </p>
          <div className="flex p-2 justify-center  text-center   text-white border rounded-xl mt-3 bg-[#000000]  ">
            <div className="">
              <button className="flex p-2  ">
                <img src={LockButtonLogo} alt="" />
                <p className="ml-5">Confirm & pay</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
