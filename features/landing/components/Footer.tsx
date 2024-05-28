import Link from "next/link";

import { HeartYellow } from "@/icon/";

const Footer = () => {
  return (
    <div className="box-border flex justify-center w-screen h-20 p-0 m-0">
      <div className="box-border flex items-center justify-between w-full h-20 gap-8 pl-10 pr-10 bg-sky-950">
        <div className="box-border flex items-center justify-between text-base text-white w-120 h-7">
          <div className="font-medium">
            <Link href="./login" rel="noopener noreferrer">
              Private Login
            </Link>
          </div>
          <div className="w-px text-base bg-white h-7"></div>
          <Link href="###" passHref>
            <div className="flex items-center justify-center h-10 text-base font-medium text-white">
              my Pack
            </div>
          </Link>
          <div className="w-px text-base bg-white h-7"></div>
          <Link href="###" passHref>
            <div className="flex items-center justify-center h-10 text-base font-medium text-white">
              KONTAKT
            </div>
          </Link>
        </div>
        <div className="flex h-3 gap-2 text-base font-medium text-white ">
          <HeartYellow /> Prabeton &copy; 2024
        </div>
      </div>
    </div>
  );
};
export default Footer;
