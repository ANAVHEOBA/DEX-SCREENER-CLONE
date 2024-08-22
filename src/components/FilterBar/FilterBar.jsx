import React from 'react';

const FilterBar = () => {
  return (
    <div className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-gray-700 rounded">All Tokens</button>
        <button className="px-4 py-2 bg-gray-700 rounded">New Pairs</button>
        <button className="px-4 py-2 bg-gray-700 rounded">Gainers</button>
        <button className="px-4 py-2 bg-gray-700 rounded">Losers</button>
      </div>
      <div>
        <select className="bg-gray-700 p-2 rounded text-white">
          <option>1h</option>
          <option>24h</option>
          <option>7d</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
