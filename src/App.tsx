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
      </div>
    </div>
  );
};

export default App;
