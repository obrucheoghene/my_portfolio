import { useState } from 'react';

const App = () => {
  return (
    <div className="">
      <div className=" bg-main-bg text-white">
        {/* Navbar */}
        <div className=" container h-20 flex flex-row justify-between items-center ">
          <div>OW</div>
          <div className=" flex flex-row gap-x-6">
            {['Projects', 'Resume', 'Contact'].map((item) => (
              <span>{item}</span>
            ))}
          </div>
        </div>
        {/* Hero */}
        <div className=" container py-12">
          <p>Hey I'm</p>
          <h1 className=" text-3xl my-10">Obruche Wilfred</h1>
          <p className=" my-4">
            An experienced web developer with more than four years of practice
            in developing dynamic, scalable, and high-performance web
            applications. Possesses strong skills in Javascript, PHP, Node.js,
            React.js, Git, SQL (MySQL), NoSQL (Mongodb), CSS, Tailwind, and
            Bootstrap CSS. A performer, capable of delivering high-quality and
            reusable code. Excited to tackle more intricate problems and
            continuously explore innovative ways to enhance users experience.
          </p>
          <p>Say hi --- </p>
        </div>
      </div>
    </div>
  );
};

export default App;
