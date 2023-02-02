import React from "react";

const AboutMe = () => {
  return (
    <div className="block">
      <div>
        <h3 className="bg-[#20b2aa] px-10 py-2 my-10 max-w-max">Who am I</h3>
        <p className="p-2 m-2 max-w-lg">
          I like programming and fixing apps. I am happy with clear and logical
          code structure. I pay attention to details and enjoy to plan and
          organise work.
        </p>
      </div>
      <div className="ml-auto text-right">
        <h3 className="bg-[#20b2aa] mr-0 ml-auto my-10 px-10 py-2 max-w-max">
          My timeline
        </h3>
        <div className="flex flex-col-reverse md:inline-flex md:flex-row max-w-[1000px] justify-center md:items-end md:text-center">
          <div className="flex-1 duration-100">
            <h4 className="p-1 font-bold">Master of measurement systems</h4>
            <div className="p-1 md:p-2 ml-auto mr-0 mb-5 md:m-1 w-[98%] md:w-[100%] min-h-[80px] md:h-[120px] bg-slate-100 shadow-lg shadow-gray-400">
              National Aerospace University
              <br />
              1998-2003
            </div>
          </div>
          <div className="flex-1 ease-in duration-1000">
            <h4 className="p-1 font-bold">Engineer</h4>
            <div className="p-1 md:p-2 ml-auto mr-0 mb-5 md:m-1 min-h-[80px] md:h-[200px] w-[90%] md:w-[100%] bg-slate-100 shadow-lg shadow-gray-400">
              Kharkiv State Aircraft Manufacturing Company, Ukraine
              <br />
              2003-2005
            </div>
          </div>
          <div className="flex-1 ease-in duration-2000">
            <h4 className="p-1 font-bold">Master in finance</h4>
            <div className="p-1 md:p-2 ml-auto mr-0 mb-5 md:m-1 min-h-[80px] md:h-[280px] w-[80%] md:w-[100%] bg-slate-100 shadow-lg shadow-gray-400">
              Kharkiv National University of Economics master in finance
              <br />
              2004-2006
            </div>
          </div>
          <div className="flex-1 transition-opacity opacity-100 ease-in duration-3000">
            <h4 className="p-1 font-bold">Economic lead</h4>
            <div className="p-1 md:p-2 ml-auto mr-0 mb-5 md:m-1 bg-slate-100 min-h-[80px] md:h-[360px] w-[70%] md:w-[100%] shadow-lg shadow-gray-400 ">
              Dental material factory, Ukraine
              <br />
              2005-2016
            </div>
          </div>
          <div className="flex-1 transition-opacity opacity-100 ease-in duration-4000">
            <h4 className="p-1 font-bold">Full-Stack Developer</h4>
            <div className="p-1 md:p-2 ml-auto mr-0 mb-5 md:m-1 bg-slate-100 min-h-[80px] md:h-[440px] w-[60%] md:w-[100%] shadow-lg shadow-gray-400">
              700 hours in a coding bootcamp Wild Code School, Berlin
              <br />
              2022-2023
            </div>
          </div>
          <div className="flex-1 ease-in duration-4500">
            <h4 className="p-1 font-bold">Junior Frontend Developer</h4>
            <div className="p-1 md:p-2 ml-auto mr-0 mb-5 md:m-1 min-h-[80px] md:h-[600px] w-[50%] md:w-[100%] bg-slate-100 shadow-lg shadow-gray-400">
              Maybe your company will be the one I write about here
              <br />
              2023-
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="bg-[#20b2aa] px-10 py-2 my-10 max-w-max">My skills</h3>
        <div></div>
      </div>
    </div>
  );
};
export default AboutMe;
