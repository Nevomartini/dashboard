import React from "react";
import { Data_bills } from "../../constant";
import { billing, billing2 } from "../../utils/svgs";

function UpcomingBills() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-2 py-2 space-y-6">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-3xl font-bold"> Upcoming Bills </h1>
        <div className="px-2 py-2 bg-gray-100">{billing}</div>
      </div>
      <div className="grid items-center justify-center w-full grid-cols-3 gap-x-4">
        {Data_bills.map(({ color, id, title, price, icon }) => (
          <div
            className={`${color} pb-6 pt-6 rounded-md px-3 w-full flex flex-col items-start justify-start`}
          >
            <div
              className={`pt-2 ${
                title === "Tinder Gold"
                  ? "bg-gray-100 rounded-full pb-2 px-2 mb-2"
                  : ""
              } `}
            >
              {icon}
            </div>
            <h1
              className={` text-md pb-6 pt-2 ${
                id === 2 ? "text-gray-100" : "text-white"
              } `}
            >
              {" "}
              {title}{" "}
            </h1>
            <h1
              className={`font-bold text-xl ${
                id === 2 ? "text-gray-100" : "text-white"
              } `}
            >
              {" "}
              {price} ${" "}
            </h1>
            <p
              className={` text-sm ${
                id === 2 ? "text-gray-100/50" : "text-black"
              } `}
            >
              /Month
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-start justify-start w-full px-3 py-4 space-x-6 bg-gray-100 rounded-md">
        <div className="px-2 py-2 bg-black rounded-full">{billing2}</div>
        <div className="flex flex-col items-start justify-start w-full space-y-4">
          <h1>You have 5,250 $ remaining funds over the next 15 days</h1>
          <div className="flex items-start text-[#3C45A0] font-medium space-x-4 w-full justify-start">
            <a> View Details </a>
            <h1> {">"}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingBills;
