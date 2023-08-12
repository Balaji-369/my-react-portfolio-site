import React from "react";
import mybooks from "../assets/mybooks.png";
import iboss from "../assets/iboss.png";

const Work = () => {
  return (
    <div
      name="project"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Project
          </p>
          <p className="py-6">Projects that I worked</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${mybooks})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Think Book
              </span>
              <div className="pt-8 text-center">
                <a href="" target="_blank">
                  {/* <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-pink-600">
                    Live
                  </button> */}
                </a>
                <a
                  href=""
                  target="_blank"
                >
                  {/* <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-pink-600">
                    Code
                  </button> */}
                </a>
                <a href="">Think-Book allows you to keep track of financial functions like income and expenses, 
          employee'expenses and inventory in real-time and fulfill tax obligations hassle-free. 
          It's like Quick Book.</a>
              </div>
            </div>
          </div>
          
          <div
            style={{ backgroundImage: `url(${iboss})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                iBOSS 
              </span>
              <div className="pt-8 text-center">
                <a href="" target="_blank">
                  {/* <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-pink-600">
                    Live
                  </button> */}
                </a>
                <a
                  href=""
                  target="_blank"
                >
                  {/* <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-pink-600">
                    Code
                  </button> */}
                </a>
                <a href="">BOSS is a tool designed to efficiently manage and organize various types of policies 
          and documents within an organization. It helps streamline policy creation, editing, 
          approval processes, and ensures easy access for employees, enhancing compliance 
          and communication across the board.</a>
              </div>
            </div>
          </div>
          
          {/* Grid Item */}
          
         
        </div>
      </div>
    </div>
  );
};

export default Work;
