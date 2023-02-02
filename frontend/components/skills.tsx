import React from "react";
import Image from "next/image";
import HTML from "../public/icons/HTML.svg";
import CSS from "../public/icons/CSS.svg";
import TailwindCSSIcon from "../public/icons/TailwindCSS-Light.svg";
import JavaScript from "../public/icons/JavaScript.svg";
import ReactIcon from "../public/icons/React-Light.svg";
import NextJSIcon from "../public/icons/NextJS-Light.svg";
import NodeJSIcon from "../public/icons/NodeJS-Light.svg";
import ExpressJSIcon from "../public/icons/ExpressJS-Light.svg";
import MySQLIcon from "../public/icons/MySQL-Light.svg";
import TypeScriptIcon from "../public/icons/TypeScript.svg";
import VSCodeIcon from "../public/icons/VSCode-Light.svg";
import GithubIcon from "../public/icons/Github-Light.svg";
import FigmaIcon from "../public/icons/Figma-Light.svg";
import FirebaseIcon from "../public/icons/Firebase-Light.svg";

const Skills = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 m-5">
      <div className="p-6 shadow-lg rounded-lg hover:scale-110 ease-induration-300">
        <div className="grid grid-cols-2 gap-3 justify-center items-center">
          <Image
            className="m-auto"
            src={HTML}
            alt=""
            width={60}
            height={60}
          ></Image>
          <h3>HTML</h3>
        </div>
      </div>
      <div className="p-6 shadow-lg rounded-lg hover:scale-110 ease-induration-300">
        <div className="grid grid-cols-2 gap-3 justify-center items-center">
          <Image
            className="m-auto"
            src={CSS}
            alt=""
            width={60}
            height={60}
          ></Image>
          <h3>CSS</h3>
        </div>
      </div>
      <div className="p-6 shadow-lg rounded-lg hover:scale-110 ease-induration-300">
        <div className="grid grid-cols-2 gap-3 justify-center items-center">
          <Image
            className="m-auto"
            src={TailwindCSSIcon}
            alt=""
            width={60}
            height={60}
          ></Image>
          <h3>Tailwind</h3>
        </div>
      </div>
      <div className="p-6 shadow-lg rounded-lg hover:scale-110 ease-induration-300">
        <div className="grid grid-cols-2 gap-3 justify-center items-center">
          <Image
            className="m-auto"
            src={JavaScript}
            alt=""
            width={60}
            height={60}
          ></Image>
          <h3>JavaScript</h3>
        </div>
      </div>
      <div className="p-6 shadow-lg rounded-lg hover:scale-110 ease-induration-300">
        <div className="grid grid-cols-2 gap-3 justify-center items-center">
          <Image
            className="m-auto"
            src={ReactIcon}
            alt=""
            width={60}
            height={60}
          ></Image>
          <h3>React</h3>
        </div>
      </div>
      <div className="p-6 shadow-lg rounded-lg hover:scale-110 ease-induration-300">
        <div className="grid grid-cols-2 gap-3 justify-center items-center">
          <Image
            className="m-auto"
            src={NextJSIcon}
            alt=""
            width={60}
            height={60}
          ></Image>
          <h3>NextJS</h3>
        </div>
      </div>
      <div className="p-6 shadow-lg rounded-lg hover:scale-110 ease-induration-300">
        <div className="grid grid-cols-2 gap-3 justify-center items-center">
          <Image
            className="m-auto"
            src={TypeScriptIcon}
            alt=""
            width={60}
            height={60}
          ></Image>
          <h3>TypeScript</h3>
        </div>
      </div>
      <div className="p-6 shadow-lg rounded-lg hover:scale-110 ease-induration-300">
        <div className="grid grid-cols-2 gap-3 justify-center items-center">
          <Image
            className="m-auto"
            src={NodeJSIcon}
            alt=""
            width={60}
            height={60}
          ></Image>
          <h3>NodeJS</h3>
        </div>
      </div>
      <div className="p-6 shadow-lg rounded-lg hover:scale-110 ease-induration-300">
        <div className="grid grid-cols-2 gap-3 justify-center items-center">
          <Image
            className="m-auto"
            src={ExpressJSIcon}
            alt=""
            width={60}
            height={60}
          ></Image>
          <h3>Express</h3>
        </div>
      </div>
      <div className="p-6 shadow-lg rounded-lg hover:scale-110 ease-induration-300">
        <div className="grid grid-cols-2 gap-3 justify-center items-center">
          <Image
            className="m-auto"
            src={MySQLIcon}
            alt=""
            width={60}
            height={60}
          ></Image>
          <h3>MySQL</h3>
        </div>
      </div>
      <div className="p-6 shadow-lg rounded-lg hover:scale-110 ease-induration-300">
        <div className="grid grid-cols-2 gap-3 justify-center items-center">
          <Image
            className="m-auto"
            src={VSCodeIcon}
            alt=""
            width={60}
            height={60}
          ></Image>
          <h3>VSCode</h3>
        </div>
      </div>
      <div className="p-6 shadow-lg rounded-lg hover:scale-110 ease-induration-300">
        <div className="grid grid-cols-2 gap-3 justify-center items-center">
          <Image
            className="m-auto"
            src={GithubIcon}
            alt=""
            width={60}
            height={60}
          ></Image>
          <h3>GitHub</h3>
        </div>
      </div>
      <div className="p-6 shadow-lg rounded-lg hover:scale-110 ease-induration-300">
        <div className="grid grid-cols-2 gap-3 justify-center items-center">
          <Image
            className="m-auto"
            src={FigmaIcon}
            alt=""
            width={60}
            height={60}
          ></Image>
          <h3>Figma</h3>
        </div>
      </div>
      <div className="p-6 shadow-lg rounded-lg hover:scale-110 ease-induration-300">
        <div className="grid grid-cols-2 gap-3 justify-center items-center">
          <Image
            className="m-auto"
            src={FirebaseIcon}
            alt=""
            width={60}
            height={60}
          ></Image>
          <h3>Firebase</h3>
        </div>
      </div>
    </div>
  );
};
export default Skills;
