import React from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = React.useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="fixed w-full h-[60px] shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
        <p className="text-[#20b2aa] text-lg md:text-xl lg:text-xl font-bold tracking-wider">
          {"<olgaDobrovolska>"}
        </p>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/aboutme">
              <li className="ml-10 text-sm uppercase hover:border-b">
                About me
              </li>
            </Link>
            <Link href="/myprojects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                My Projects
              </li>
            </Link>
            <Link href="/contactme">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact me
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-slate-400/50"
            : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[70%] sm:w-[50%] md:w-[40%] h-screen bg-[#ecf0f3] p-5 ease-in duration-300"
              : "fixed left-[-100%] top-0 p-5 ease-in duration-300"
          }
        >
          <div className="flex justify-between items-center w-full">
            <p className="text-[#20b2aa] text-sm md:base font-bold tracking-wider">
              {"<olgaDobrovolska>"}
            </p>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer"
            >
              <AiOutlineClose size={20} />
            </div>
          </div>
          <div className="flex flex-col my-4 py-4">
            <ul>
              <Link href="/" onClick={handleNav}>
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/aboutme" onClick={handleNav}>
                <li className="py-4 text-sm">About me</li>
              </Link>
              <Link href="/myprojects" onClick={handleNav}>
                <li className="py-4 text-sm">My Projects</li>
              </Link>
              <Link href="/contactme" onClick={handleNav}>
                <li className="py-4 text-sm">Contact me</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
