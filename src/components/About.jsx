import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div></div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi I'm Balaji, Nice to meet you. please take a look around.</p>
          </div>
          <div>
            <p>
              I am a highly motivated and skilled person. Secure a responsible career opportunity to fully 
              utilize my training and experience, while making a significant contribution to the 
              success of the company. Experienced Application developer that dreams to achieve mastry in Java. 
              I'm looking competitive and challenging environment where I can serve your organization 
              and establish a career for myself.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
