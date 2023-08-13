import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
//import BOOTSTRAP from "../assets/bootstrap.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/java.png";
import SpringBoot from "../assets/springboot.png";
import VueJs from "../assets/Vuejs.png";
import GitHub from "../assets/github.png";
import SDLC from "../assets/sdlc.png";
import Jira from "../assets/jira.png";
import mysql from "../assets/mysql.png";

const skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a1925] text-gray-300">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={BOOTSTRAP} alt="HTML icon" />
            <p className="my-4">BOOTSTRAP</p>
          </div> */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-40 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4"></p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={SpringBoot} alt="HTML icon" />
            <p className="my-4">SPRING BOOT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={VueJs} alt="HTML icon" />
            <p className="my-4">Vue Js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={SDLC} alt="HTML icon" />
            <p className="my-4">SDLC</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Jira} alt="HTML icon" />
            <p className="my-4">JIRA</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={mysql} alt="HTML icon" />
            <p className="my-4">MY SQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default skills;
