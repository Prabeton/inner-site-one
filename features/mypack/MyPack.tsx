"use client";

import React from "react";

const MyPack = () => {
  return (
    <div className="box-border relative flex items-center justify-center w-screen h-full text-3xl bg-[#185b78] text-yellow">
      <div
        className="box-border relative flex items-center justify-center bg-no-repeat border-4 border-green-300 bg-auto-height rounded-extra w-[400px] h-[400px] bg-image-family"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}></div>
    </div>
  );
};
export default MyPack;
