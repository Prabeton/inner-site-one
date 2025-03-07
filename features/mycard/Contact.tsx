"use client";

import React from "react";
import Link from "next/link";

import { PrabetonHead } from "@/icon/";

const Contact = () => {
  return (
    <div className="box-border relative flex items-center justify-center w-screen h-full text-3xl bg-[#185b78] text-yellow">
      <div
        className="box-border relative flex flex-col items-center justify-center text-xl bg-center bg-cover border-4 border-green-300 text-zinc-900 rounded-extra w-[400px] h-[400px]"
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}>
        <PrabetonHead size="200px" fill="#1B2124" />
        <p className="text-base font-light">wozniak.przemyslaw@icloud.com</p>
        <p className="text-base font-light">tel. 517-560-254</p>
        <p className="text-base font-light"><Link href="https://wozniak.website">https://wozniak.website/</Link></p>
      </div>
    </div>
  );
};
export default Contact;
