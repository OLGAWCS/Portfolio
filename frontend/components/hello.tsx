import React from "react";
import Image from "next/image";
import Link from "next/link";
import photo_2022 from "../public/photo_2022.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import styles from "../styles/Hello.module.css";

const Hello = () => {
  return (
    <div className="w-full text-center m-auto p-2 block ">
      <div className="w-full block m-auto">
        <div className={styles.introSection}>
          <div className={styles.title}>
            <h3 className="my-2">Hello, I am</h3>
            <h2 className="font-bold uppercase px-5">Olga Dobrovolska</h2>
          </div>
          <h2 className={styles.subtitle}>Full-Stack Developer</h2>
          <Image
            className={styles.foto}
            src={photo_2022}
            alt="foto"
            width={300}
            height={400}
          />
        </div>
        <div className="flex items-center justify-between max-w-[400px] m-auto py-4">
          <a
            href="https://www.linkedin.com/in/olga-dobrovolska"
            target="_blank"
            rel="noreferrer"
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn size={20} />
            </div>
          </a>
          <a href="https://github.com/OLGAWCS" target="_blank" rel="noreferrer">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub size={20} />
            </div>
          </a>
          <Link href="/#contact">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail size={20} />
            </div>
          </Link>
          <Link href="/sv">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hello;
