// @ts-nocheck
import React, { useState } from "react";
import Card from "../components/Card/Card";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { menu_icon } from "../utils/svgs";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      {!isOpen && (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-full h-12 ml-4 cursor-pointer md:hidden hover:bg-gray-200 smooth "
        >
          {menu_icon}
        </div>
      )}
      <div className="md:w-[250px]  h-[91%] hidden overflow-hidden md:flex flex-col items-center justify-between px-3">
        {/* cards */}
        <div className="pt-12 pb-4 border-b border-blue-900 w-full space-y-4 max-h-[400px] h-[350px] overflow-y-scroll scrollbar-hide">
          <Card type="mastercard" />
          <Card type="visa" />
        </div>
        <div className="flex items-center justify-center w-full py-3 my-2 border border-gray-400 border-dashed rounded-lg ">
          <button className="w-full"> Add Card </button>
        </div>

        {/* footer */}
        <div className="pb-2 pt-[150px] px-3  flex flex-col space-y-4 items-start justify-between  w-full h-full">
          <div className="flex flex-col items-start justify-center w-full pb-6 space-y-4 border-b border-blue-900">
            <a className="footer-link"> Deposits </a>
            <a className="footer-link"> Loyalty Program </a>
            <a className="footer-link"> Loans </a>
          </div>
          <div className="space-y-3">
            <h1 className="text-lg font-bold"> Openbank. </h1>
            <p className="text-sm">
              {" "}
              2022 openbank license #19 from 06.05.2022
            </p>
          </div>
        </div>
      </div>
      {/* small-screens navbar */}
      <div className="md:w-[250px] h-[91%] overflow-hidden md:flex flex-col items-center justify-between px-3">
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={() => setIsOpen(false)}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody className="overflow-y-scroll scrollbar-hide">
              <div className="md:w-[250px] h-fit  md:flex flex-col items-center justify-between space-y-24 px-3">
                {/* cards */}
                <div className="pt-12 pb-4 border-b border-gray-900 w-full space-y-4 max-h-[400px] h-[350px] overflow-y-scroll scrollbar-hide">
                  <Card type="mastercard" />
                  <Card type="visa" />
                </div>
                <div className="flex items-center justify-center w-full py-3 my-2 border border-gray-400 border-dashed rounded-lg ">
                  <button className="w-full"> Add Card </button>
                </div>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;
