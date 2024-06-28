"use client";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Link from "next/link";

const Currently = () => {
  return (
    <div className="box-border relative flex items-center justify-center w-screen h-full gap-20 text-3xl text-yellow bg-dark-gray">
      <Link
        href="https://credsverse.com/credentials/f37ba10f-4d3a-4cb3-ab57-dccecb13f017"
        target="_blank"
        rel="noopener noreferrer">
        <div className="box-border flex items-center justify-center border-yellow border-4 rounded-lg  shadow-xl  md:w-100 lg:w-100 xl:w-120 xl:h-69.5 bg-image-aidevs bg-center bg-cover p-5"></div>
      </Link>
      <div className="box-border flex items-center justify-center bg-gray-900 bg-center bg-cover border-4 rounded-lg shadow-xl border-yellow md:w-100 lg:w-100 xl:w-120 xl:h-69.5">
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
