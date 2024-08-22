import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center">
      <div className="text-white font-bold text-lg">DEXSCREENER</div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded bg-gray-700 text-white"
        />
      </div>
    </nav>
  );
};

export default Navbar;
