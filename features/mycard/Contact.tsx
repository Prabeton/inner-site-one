"use client";

import React from "react";

import { Prabeton } from "@/icon/";

const Contact = () => {
  return (
    <div className="box-border relative flex items-center justify-center w-screen h-full text-3xl bg-[#185b78] text-yellow">
      <div
        className="box-border relative flex flex-col items-center justify-center text-xl bg-center bg-cover border-4 border-green-300 text-zinc-900 rounded-extra w-112 h-141"
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}>
        <Prabeton size="300px" fill="#1B2124" />
        <p>przemyslaw@wozniak.website</p>
        <p>tel. 517-560-254</p>
        <p>www.wozniak.website</p>
      </div>
    </div>
  );
};
export default Contact;
