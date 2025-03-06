"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const MyCard = () => {
  return (
    <div className="box-border relative flex items-center justify-around w-screen h-full text-3xl text-yellow bg-dark-gray">
      <div className="h-[90%] p-2 w-75 rounded-md text-xl">
        Przemysław Woźniak
      </div>
      <div className="h-[90%] p-2 w-75 rounded-md text-lg flex items-center"></div>
      <div className="h-[90%] p-2 w-112 rounded-md flex items-center justify-center">
        <div className="flex rounded-md h-[90%] w-[90%]">
          <iframe
            src="/pdf/cv-pw-8.pdf"
            width="100%"
            height="100%"
            className="no-scrollbar"
            style={{
              border: "none",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default MyCard;
