"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Notion,
  PrabetonCode
} from "@/icon/";

const Projects = () => {
  return (
    <div className="box-border relative flex flex-col items-center justify-around w-screen h-full gap-8 text-2xl text-yellow bg-dark-gray">
      <div className="flex items-center justify-center gap-8">
        <div className="flex items-center justify-center h-30 border rounded-xl bg-zinc-900 w-60">
          <Link
            href="https://styles-homework.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6">
            <Image
              src="/styles.png"
              alt="styles icon"
              width={230}
              height={110}
            />
          </Link>
        </div>
        <div className="flex items-center justify-center h-30 border rounded-xl bg-zinc-900 w-60">
          <Link
            href="https://pokedex-parallel-ochre.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6">
            <Image
              src="/pokedex.png"
              alt="pokedex icon"
              width={230}
              height={110}
            />
          </Link>
        </div>
        <div className="flex items-center justify-center h-30 border rounded-xl bg-zinc-900 w-60">
          <Link
            href="https://ppd-przemek-wozniak.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6">
            <Image
              src="/codebusters.png"
              alt="codebusters icon"
              width={230}
              height={110}
            />
          </Link>
        </div>
      </div>
      <div className="box-border relative flex items-center justify-center w-screen h-40 gap-8 text-3xl text-yellow ">
        <PrabetonCode size="180px" fill="white" />
      </div>
      <div className="flex items-center justify-center h-16 border rounded-xl bg-zinc-900 w-120">
        <Link
          href="https://stellar-milk-051.notion.site/f6e3585b959b4855952912000442427d?v=a58c2e7dc95d4e0482e2be5bc2ae2dad"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-6">
          <p>Link do galerii widoków</p>
          <Notion size="30" stroke="yellow" />
        </Link>
      </div>
    </div>
  );
};
export default Projects;
