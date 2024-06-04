"use client";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Link from "next/link";

const Currently = () => {
  return (
    <div className="box-border relative flex items-center justify-center w-screen h-full text-3xl text-yellow bg-dark-gray">
      <div className="box-border  bg-gray-900 flex items-center justify-center border-yellow border-4 rounded-lg bg-center bg-cover shadow-xl md:w-120 lg:w-120 xl:w-160.75 xl:h-94">
        <div className="flex flex-col w-full h-9/10 justify-stretch ">
          <LiteYouTubeEmbed
            id="J0EQpJNgDS8"
            title="Tytuł filmu z Devstock"
            poster="hqdefault"
            playerClass="lty-playbtn"
            wrapperClass="yt-lite"
          />
        </div>
      </div>
    </div>
  );
};
export default Currently;
