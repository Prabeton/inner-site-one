"use client";
import Link from "next/link";
import {
  Task,
  Settings,
  Ranking,
  RightArrowDouble,
  LeftArrowDouble,
  HomeEk,
  Education,
  Calendar,
  Admin,
} from "@/icon/";

const Projects = () => {
  return (
    <div className="box-border relative flex flex-col items-center justify-center w-screen h-full gap-8 text-3xl text-yellow bg-dark-gray">
      <div className="flex items-center justify-center h-20 border rounded-xl bg-zinc-950 w-120">
        <Link
          href="https://stellar-milk-051.notion.site/f6e3585b959b4855952912000442427d?v=a58c2e7dc95d4e0482e2be5bc2ae2dad"
          target="_blank"
          rel="noopener noreferrer">
          Link do galerii widoków
        </Link>
      </div>
      <div className="box-border relative flex items-center justify-center w-screen h-40 gap-8 text-3xl text-yellow ">
        <Task size="60px" stroke="yellow" />
        <Settings size="60px" stroke="green" />
        <Ranking size="60px" stroke="red" />
        <RightArrowDouble size="60px" stroke="pink" />
        <LeftArrowDouble size="60px" stroke="orange" />
        <HomeEk size="60px" stroke="blue" />
        <Education size="60px" stroke="brown" />
        <Calendar size="60px" stroke="purple" />
        <Admin size="60px" stroke="gray" />
      </div>
      <div className="flex items-center justify-center text-base w-175">
        Ze względu na wcześniejszą awarię serwera (to był bardzo stary sprzęt) i
        wynikające z tego modernizacje sprzętowe, aktualnie cała ta strona jest
        uruchomiona na serwerach Vercel i przebudowywana. Z tego względu do
        prezentacji niektórych treści urzywam narzędzi zewnętrznych tj. Notion
      </div>
    </div>
  );
};
export default Projects;
