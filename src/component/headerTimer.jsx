import { XMarkIcon } from "@heroicons/react/20/solid";

const headerTimer = () => {
  return (
    <div className="relative isolate flex items-center gap-x-6 bg-[#000000] overflow-hidden  px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2  text-slate-200">
        <p className="text-sm leading-6 ">Holding your tickets for 30:00</p>
      </div>
      <div className="flex flex-1 justify-end">
        <div
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        ></div>
      </div>
    </div>
  );
};

export default headerTimer;
