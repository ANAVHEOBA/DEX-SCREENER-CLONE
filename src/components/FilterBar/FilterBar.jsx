import React from 'react';

const FilterBar = () => {
  return (
    <div className="bg-gray-900 p-4 text-gray-300 flex justify-between items-center">
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">All Tokens</button>
        <button className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">New Pairs</button>
        <button className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">Gainers</button>
        <button className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">Losers</button>
      </div>
      <div>
        <select className="bg-gray-800 p-2 rounded text-gray-300">
          <option className="bg-gray-800">1h</option>
          <option className="bg-gray-800">24h</option>
          <option className="bg-gray-800">7d</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
