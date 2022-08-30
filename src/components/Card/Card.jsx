// @ts-nocheck
import visa from "../../assets/visa.png";
import mastercard from "../../assets/mastercard.png";
<div className="" />;
const Card = ({ type }) => (
  <div
    className={` ${
      type === "mastercard" ? "bg-black" : "bg-[#e0e7ea]"
    } w-full rounded-md py-2 px-3 space-y-10 `}
  >
    <h1
      className={` ${
        type === "mastercard" ? "text-gray-100" : "text-black"
      } flex justify-end items-end w-full `}
    >
      01/2024
    </h1>

    <div className="flex justify-between">
      {type === "mastercard" ? (
        <div>
          <img
            src={mastercard}
            alt="logo"
            className="w-[50px] h-[30px] border border-orange-500"
          />
        </div>
      ) : (
        <div>
          <div>
            <img
              src={visa}
              alt="logo"
              className="w-[50px] h-[30px] border border-black"
            />
          </div>
        </div>
      )}
      <h1
        className={` font-bold items-end justify-end flex w-full self-center ${
          type === "mastercard" ? "text-gray-100" : "text-black"
        }  `}
      >
        ...4060
      </h1>
    </div>
  </div>
);

export default Card;
