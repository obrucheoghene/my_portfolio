import React from 'react';

const Navbar = () => {
  return (
    <div className=" container h-28 flex flex-row justify-between">
      <div>OW</div>
      <div>
        {['Projects', 'Resume', 'Contact'].map((item) => (
          <li>{item}</li>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
