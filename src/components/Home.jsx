import React from "react";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi,this is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Balaji Murugesan
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm an Application Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
        Dedicated and results-driven professional with experience as an Infoscion, 
        contributing to high-quality software development and implementation. 
        Proficient in software engineering practices, problem-solving, 
        and leveraging advanced technical knowledge to deliver impactful solutions.
        Committed to enhancing efficiency and effectiveness through knowledge sharing and continuous learning.
        </p>
      </div>
    </div>
  );
};

export default Home;
