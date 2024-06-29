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
  Notion,
  PrabetonCode,
  PrabetonMail,
  PrabetonHead,
} from "@/icon/";

const Projects = () => {
  return (
    <div className="box-border relative flex flex-col items-center justify-center w-screen h-full gap-8 text-2xl text-yellow bg-dark-gray">
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
      <div className="box-border relative flex items-center justify-center w-screen h-40 gap-8 text-3xl text-yellow ">
        <Admin size="40px" stroke="gray" />
        <Task size="40px" stroke="yellow" />
        <Settings size="40px" stroke="green" />
        <Ranking size="40px" stroke="red" />
        <RightArrowDouble size="40px" stroke="pink" />
        <PrabetonCode size="180px" fill="white" />
        <LeftArrowDouble size="40px" stroke="orange" />
        <HomeEk size="40px" stroke="blue" />
        <Education size="40px" stroke="brown" />
        <Calendar size="40px" stroke="purple" />
        <Admin size="40px" stroke="gray" />
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
