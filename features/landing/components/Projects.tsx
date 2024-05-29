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
    <div className="box-border relative flex items-center justify-center w-screen h-full gap-8 text-3xl text-yellow bg-dark-gray">
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
  );
};
export default Projects;
