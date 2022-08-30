import React from "react";
import { transfer } from "../../utils/svgs";

function Transfer() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-2 py-2">
      <h1 className="w-full py-6 text-md">
        <b className="text-4xl">Transfer</b> to Visa or MasterCard
      </h1>
      <div className="grid w-full grid-cols-3 gap-4 ">
        <div className="flex items-center justify-between w-full col-span-3 px-3 py-3 space-x-4 border-b border-black ">
          <h1 className="border-r self-center border-black w-[25%]"> From </h1>
          <h1 className="w-[50%] self-center"> MasterCard ... 4060 </h1>
          <h1 className="font-bold text-2xl w-[25%] items-end justify-end flex">
            60,450$
          </h1>
        </div>
        <div className="flex items-center justify-between w-full col-span-3 px-3 py-3 space-x-4 border-b border-black ">
          <h1 className="border-r self-center border-black w-[25%]"> To </h1>
          <h1 className="w-[50%] self-center">521 4690 5836 4596</h1>
          <div className="w-[25%] items-end justify-end flex">{transfer}</div>
        </div>

        <div className="flex items-center justify-between w-full col-span-3 px-3 py-3 space-x-4 ">
          <div className="w-[40%] flex space-x-4  border-b border-black py-4">
            <h1 className="self-center w-full border-r border-black">Amount</h1>
            <input className="w-full text-xl font-bold input " type="number" />
          </div>
          <div className="w-[40%] flex  space-x-4  border-b border-black py-4">
            <h1 className="self-center w-full border-r border-black"> CVV </h1>
            <input className="w-full input " type="number" />
          </div>
          <div className="w-[10%] smooth btn py-3 px-2 items-center justify-center flex">
            <button>{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
