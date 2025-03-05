"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

import { HeartYellow } from "@/icon/";

const Footer = () => {
  const pathname = usePathname();
  const loginPathRegex = /^(\/(pl|en))?\/login$/;
  const isActiveLogin = loginPathRegex.test(pathname);
  const myPackPathRegex = /^(\/(pl|en))?\/mypack$/;
  const isActivemyMyPack = myPackPathRegex.test(pathname);
  const contactPathRegex = /^(\/(pl|en))?\/contact$/;
  const isActiveContact = contactPathRegex.test(pathname);

  return (
    <div className="box-border flex justify-center w-screen h-20 p-0 m-0">
      <div className="box-border flex items-center justify-between w-full h-20 gap-8 pl-10 pr-10 bg-sky-950">
        <div className="box-border flex items-center justify-between text-base text-white w-120 h-7">
          <div
            className={clsx(
              "font-medium",
              { "text-green-300": isActiveLogin },
              { "text-white": !isActiveLogin }
            )}>
            <Link href="./login" rel="noopener noreferrer">
              Private Login
            </Link>
          </div>
          <div className="w-px text-base bg-white h-7"></div>
          <Link href="./mypack" passHref>
            <div
              className={clsx(
                "flex items-center justify-center h-10 text-base font-medium",
                { "text-green-300": isActivemyMyPack },
                { "text-white": !isActivemyMyPack }
              )}>
              my Pack
            </div>
          </Link>
          <div className="w-px text-base bg-white h-7"></div>
          <Link href="./contact" passHref>
            <div
              className={clsx(
                "flex items-center justify-center h-10 text-base font-medium",
                { "text-green-300": isActiveContact },
                { "text-white": !isActiveContact }
              )}>
              KONTAKT
            </div>
          </Link>
        </div>
        <div className="flex h-3 gap-2 text-base font-medium text-white ">
          <HeartYellow /> Prabeton &copy; {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};
export default Footer;
