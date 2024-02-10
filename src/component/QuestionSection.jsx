import UserLogo from "../assets/BigUser.svg";
import PlusLogo from "../assets/plus.svg";
import CrossLogo from "../assets/cross.svg";
const QuestionSection = () => {
  return (
    <section className="grid w-full  gap-2 sm:grid-cols-2 md:grid-cols-3">
      {/* left div */}
      <div className=" ">
        <p className="text-[24px]">Frequently asked questions</p>
        <p className="text-[14px] mb-12 font-sans text-gray-400 font-thin">
          Here are some of our most asked questions.
        </p>

        <div className="flex border rounded-xl p-5 bg-[#F9F9FB]">
          <div className="">
            <p className="text-[18px] text-[#1C2024] mr-8 w-40 mb-3">
              Still need help? <br />
              We’re here for you.
            </p>
            <div className="text-[#EDEEF0] bg-black border rounded-xl py-3  w-28 flex justify-center">
              Chat with us
            </div>
          </div>
          <div className="">
            <img src={UserLogo} alt="userLogo" />
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex border rounded-xl p-4 mb-3">
          <img src={PlusLogo} alt="plusLogo" className="mr-6" />
          <p>What should I do on my first trip to Rome?</p>
        </div>
        <div className="flex border rounded-xl p-8 mb-3">
          <img src={CrossLogo} alt="plusLogo" className="mr-6" />
          <div className="">
            <p className="mb-3">What are some hidden gems to see in Rome?</p>
            <p className="text-[12px] text-[#60646C]">
              Rome is packed with hidden gems. If you love art, don't miss the
              Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco
              is a free museum and well worth a quick visit. If you love the
              ancient stuff, don't miss the Domus Romana at Palazzo Valentini,
              the Domus Aurea, and the Baths of Caracalla. For even more hidden
              gems, take a tour of Trastevere, a fascinating neighborhood full
              of history and ambiance.
            </p>
          </div>
        </div>
        <div className="flex border rounded-xl p-4 mb-3">
          <img src={PlusLogo} alt="plusLogo" className="mr-6" />
          <p>How much time should I spend in Rome?</p>
        </div>
        <div className="flex border rounded-xl p-4 mb-3">
          <img src={PlusLogo} alt="plusLogo" className="mr-6" />
          <p>What food is Rome known for?</p>
        </div>
        <div className="flex border rounded-xl p-4 mb-3">
          <img src={PlusLogo} alt="plusLogo" className="mr-6" />
          <p>What is the best way to get around Rome?</p>
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;
