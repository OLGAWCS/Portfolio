import React from "react";
import Image from "next/image";
import myResume from "../public/assets/myResume.jpg";

const SV = () => {
  return (
    <div className="block max-w-[1100px] m-auto pt-5">
      <h2 className="text-[#20b2aa] text-lg md:text-xl lg:text-xl uppercase font-bold tracking-wider">
        My resume
      </h2>
      <Image
        className="mx-auto my-5"
        src={myResume}
        alt=""
        width={658}
        height={886}
      />
    </div>
  );
};
export default SV;
