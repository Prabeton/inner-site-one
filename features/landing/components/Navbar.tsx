"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

import { Prabeton } from "@/icon/";

const Navbar = () => {
  const pathname = usePathname();
  const projectsPathRegex = /^(\/(pl|en))?\/projects$/;
  const isActiveProjects = projectsPathRegex.test(pathname);
  const currentlyPathRegex = /^(\/(pl|en))?\/currently$/;
  const isActiveCurrently = currentlyPathRegex.test(pathname);
  const przemekPathRegex = /^(\/(pl|en))?\/przemek$/;
  const isActivePrzemek = przemekPathRegex.test(pathname);

  return (
    <div className="box-border relative flex justify-center w-screen h-20 p-0 m-0">
      <div className="box-border flex items-center justify-between w-full h-20 pr-4 bg-gray">
        <Link href="/landing" passHref>
          <div className="box-border flex items-center justify-center h-20 w-30">
            <Prabeton size="60px" fill="#185b78" />
          </div>
        </Link>
        <div className="box-border flex items-center justify-center h-10 gap-10 leading-6 text-white text-4 w-150">
          <div
            className={clsx(
              "flex justify-center items-center font-medium text-base rounded-lg w-100 h-10",
              { "text-yellow": isActivePrzemek },
              { "text-white": !isActivePrzemek }
            )}>
            <Link href="./przemek" rel="noopener noreferrer">
              Przemysław Woźniak
            </Link>
          </div>
          <div className="z-10 w-px leading-6 bg-white h-7 text-4"></div>
          <Link href="/currently" passHref>
            <div
              className={clsx("font-medium text-base w-21.75", {
                "text-yellow": isActiveCurrently,
              })}>
              CURRENTLY
            </div>
          </Link>
          <Link href="/projects" passHref>
            <div
              className={clsx(
                "flex justify-center items-center font-medium text-base rounded-lg w-37.5 h-10",
                { "text-yellow": isActiveProjects },
                { "text-white": !isActiveProjects },
                { "bg-dark-gray": isActiveProjects },
                { "bg-sky-950": !isActiveProjects }
              )}>
              PROJECTS
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
