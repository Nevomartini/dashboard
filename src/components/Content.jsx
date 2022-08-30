import React from "react";
import Transfer from "./rightSide/Transfer";
import Statistics from "./Statistics";
import UpcomingBills from "./rightSide/UpcomingBills";
import {
  content_icon,
  content_icon2,
  content_icon3,
  content_icon4,
  content_icon5,
} from "../utils/svgs";

function Content() {
  return (
    <div className=" w-full h-[90vh] space-x-4 items-center justify-center grid grid-cols-2 xl:grid-cols-3">
      {/* left section */}
      <div className="flex flex-col items-center justify-center w-full h-full col-span-2 px-3 py-2 space-y-4 ">
        {/* upper section */}
        <div className="w-full h-full px-3 pt-12 pb-1 space-y-8 ">
          {/* title + icons */}
          <div className="flex items-center justify-center w-full px-2 py-1 ">
            <h1 className="flex items-start self-center justify-start w-full text-2xl font-bold text-black xl:text-4xl ">
              Mastercard gold
            </h1>
            <div className="flex items-end justify-end w-full space-x-4">
              <div className="icon-container">{content_icon}</div>

              <div className="icon-container">{content_icon2}</div>
            </div>
          </div>
          {/* center part */}
          <div className="grid items-center justify-center w-full grid-cols-2 px-3 pt-4 pb-2 xl:grid-cols-4">
            <div className="flex items-center justify-between w-full col-span-2 px-3 py-2 bg-blue-900 rounded-lg xl:col-span-1">
              <div className="flex flex-col items-center justify-center w-full px-4 py-2">
                <h1 className="flex items-start justify-start w-full text-xl font-bold text-white text-start">
                  {" "}
                  ... 4060{" "}
                </h1>
                <div className="flex items-center justify-between w-full space-x-4">
                  <p className="text-white"> 01 / 22 </p>
                  <p className="text-white"> CVV code </p>
                </div>
              </div>
              <div className="px-4 text-white">{content_icon3}</div>
            </div>

            <div className="items-center justify-between w-full col-span-2 px-3 py-3 space-y-4 xl:col-span-3 xl:flex xl:space-y-0 xl:space-x-4">
              <div className="flex flex-col items-start justify-start w-full xl:items-center xl:justify-center">
                <h1 className="font-medium text-gray-500"> Cash available</h1>
                <h1 className="text-2xl font-bold"> $ 60,450 </h1>
              </div>
              <div className="flex flex-col items-start justify-start w-full xl:items-center xl:justify-center">
                <h1 className="font-medium text-gray-500"> Credit Limit</h1>
                <h1 className="text-2xl font-bold"> $ 80,000 </h1>
              </div>
              <div className="flex flex-col items-start justify-start w-full xl:items-center xl:justify-center">
                <h1 className="font-medium text-gray-500">Debt</h1>
                <h1 className="text-2xl font-bold"> $ 24,300 </h1>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full px-3">
            <div className="py-4 px-6 w-full items-center justify-between xl:space-y-0 space-y-6 lg:flex bg-[#F8F8F8] rounded-lg">
              {content_icon4}

              <div className="items-center justify-between lg:flex lg:space-x-12">
                <div className="space-y-2">
                  <h1 className="text-lg font-medium text-gray-500">
                    Piggybank
                  </h1>
                  <h1 className="text-2xl font-bold"> 100,000 $</h1>
                </div>
                <div className="space-y-2">
                  <h1 className="text-lg font-medium text-gray-500">Payment</h1>
                  <h1 className="text-2xl font-bold"> 10,405 $</h1>
                </div>
              </div>

              <div className="flex items-start justify-start w-full lg:w-1/2 lg:items-end lg:justify-end lg:space-x-4">
                {content_icon5}
                <button className="px-8 py-3 text-gray-100 bg-blue-900 border border-transparent rounded-md smooth hover:bg-gray-100 hover:text-gray-900 hover:border-gray-900">
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* lower section */}
        <div className="w-full h-full px-3 py-1 ">
          <Statistics />
        </div>
      </div>
      {/* right section  */}
      <div className="hidden w-full h-full col-span-1 px-6 py-2 space-y-6 xl:flex xl:flex-col">
        <Transfer />
        <UpcomingBills />
      </div>
    </div>
  );
}

export default Content;
