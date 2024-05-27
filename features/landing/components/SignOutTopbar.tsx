"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import clsx from "clsx";

import { DevstockAcademy } from "@/icon/";
import { Prabeton } from "@/icon/";

const SignOutTopbar = () => {
  const pathname = usePathname();
  const registerPathRegex = /^(\/(pl|en))?\/register$/;
  const isActiveRegister = registerPathRegex.test(pathname);
  const loginPathRegex = /^(\/(pl|en))?\/login$/;
  const isActiveLogin = loginPathRegex.test(pathname);
  const t = useTranslations("SignOutTopbar");

  return (
    <div className="box-border relative flex justify-center w-screen h-20 p-0 m-0">
      <div className="box-border flex items-center justify-between w-full h-20 pr-10 bg-gray">
        <Link href="/landing" passHref>
          <div className="box-border flex items-center justify-center h-20 w-30">
            <Prabeton size="60px" fill="#185b78" />
          </div>
        </Link>
        <div className="box-border flex items-center justify-center h-10 gap-10 leading-6 text-white text-4 w-112">
          <div className="font-medium">
            <Link
              href="https://www.devstock.pl"
              target="_blank"
              rel="noopener noreferrer">
              ####
            </Link>
          </div>
          <div className="z-10 w-px leading-6 bg-white h-7 text-4"></div>
          <Link href="/login" passHref>
            <div
              className={clsx("font-medium text-base w-21.75", {
                "text-yellow": isActiveLogin,
              })}>
              CURRENTLY
            </div>
          </Link>
          <Link href="/register" passHref>
            <div
              className={clsx(
                "flex justify-center items-center font-medium text-base rounded-lg w-37.5 h-10",
                { "text-yellow": isActiveRegister },
                { "text-white": !isActiveRegister },
                { "bg-dark-gray": isActiveRegister },
                { "bg-sky-950": !isActiveRegister }
              )}>
              PROJECTS
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignOutTopbar;
