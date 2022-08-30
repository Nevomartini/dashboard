// @ts-nocheck
import React, { useState } from "react";
import { Data } from "../constant";
import { Progress } from "@chakra-ui/react";
import { stat } from "../utils/svgs";

function Statistics() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="flex flex-col items-center justify-between w-full">
      {/* filtering section */}
      <div className="items-start self-center justify-start w-full px-3 py-2 space-y-4 cursor-pointer lg:space-x-2 lg:space-y-0 lg:flex">
        {Array.from({ length: 2 }, (_, i) => (
          <div
            onClick={() => setActiveTab(i)}
            className={` ${
              activeTab === i
                ? "bg-blue-900 text-gray-100"
                : "bg-gray-100 text-black"
            }  self-center  py-2 px-8 rounded-md  text-lg font-semibold`}
          >
            {i === 0 ? "Statements" : "History"}
          </div>
        ))}
        <div className="flex items-center justify-end w-full px-4 py-3 space-x-6">
          <input
            type="date"
            className="px-4 py-2 bg-gray-100 rounded-md cursor-pointer"
          />
          <div className="px-2 py-2 bg-gray-100 rounded-md cursor-pointer">
            {stat}
          </div>
        </div>
      </div>
      {/* items */}
      {activeTab === 0 ? (
        <div className="flex items-center justify-center text-3xl font-bold text-center">
          Not Available
        </div>
      ) : (
        <div className="h-[300px]  overflow-y-scroll scrollbar-hide w-full py-3 px-4">
          {Data.map((item) => (
            <div className="flex items-center justify-between w-full px-3 py-6">
              <p
                className={`${item.color} py-2 px-4 rounded-md mr-4 font-bold`}
              >
                {item.id + 1}
              </p>
              <h1 className="text-left items-start justify-start flex w-[35%]">
                {" "}
                {item.title}{" "}
              </h1>
              <Progress
                colorScheme="green"
                className="w-[25%] lg:inline hidden "
                size="sm"
                value={item.value}
              />
              <h1 className="w-[25%] items-end justify-end flex font-medium text-black text-xl px-6 ">
                {item.amount} $
              </h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Statistics;
