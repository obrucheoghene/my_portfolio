import { useState } from 'react';

const App = () => {
  return (
    <div className="bg-main-bg">
      <div className="  container">
        <div className=" text-white h-screen flex flex-col justify-between">
          {/* Navbar */}
          <div className="h-20 flex flex-row justify-between items-center">
            <div>OW</div>
            <div className=" flex flex-row gap-x-6">
              {['Projects', 'Resume', 'Contact'].map((item) => (
                <span>{item}</span>
              ))}
            </div>
          </div>
          {/* Hero */}
          <div className="flex flex-col gap-6">
            <p>Hey I'm</p>
            <h1 className="text-3xl  primary-gd ">Obruche Wilfred</h1>
            <p className="text-justify leading-8">
              An experienced web developer with more than four years of practice
              in developing dynamic, scalable, and high-performance web
              applications. Possesses strong skills in Javascript, PHP, Node.js,
              React.js, Git, SQL (MySQL), NoSQL (Mongodb), CSS, Tailwind, and
              Bootstrap CSS. A performer, capable of delivering high-quality and
              reusable code. Excited to tackle more intricate problems and
              continuously explore innovative ways to enhance users experience.
            </p>
          </div>

          <div>
            <h1>FEATURE PROJECTS</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
