import React from 'react';
import { 
  FaMoon, FaSignInAlt, FaTwitter, FaTelegramPlane, FaDiscord, 
  FaEthereum, FaBitcoin, FaCaretUp, FaCaretDown 
} from 'react-icons/fa';
import { SiSolana } from 'react-icons/si';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 h-full flex flex-col justify-between">
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <button className="flex items-center w-full py-2 text-left hover:bg-gray-800 rounded">
            <FaCaretUp className="mr-4" /> Gainers & Losers
          </button>
          <button className="flex items-center w-full py-2 text-left hover:bg-gray-800 rounded">
            <FaCaretDown className="mr-4" /> Portfolio
          </button>
          <button className="flex items-center w-full py-2 text-left hover:bg-gray-800 rounded">
            <FaSignInAlt className="mr-4" /> Advertise
          </button>
          <button className="flex items-center w-full py-2 text-left hover:bg-gray-800 rounded">
            More <FaCaretDown className="ml-4" />
          </button>
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-700 my-4"></div>

        <div className="space-y-2">
          <button className="flex items-center w-full py-2 text-left hover:bg-gray-800 rounded">
            <FaMoon className="mr-4" /> Moonshot <span className="ml-2 bg-yellow-500 text-black px-2 rounded-full text-xs">new!</span>
          </button>
          
          {/* Blockchain List */}
          <button className="flex items-center w-full py-2 text-left hover:bg-gray-800 rounded">
            <SiSolana className="mr-4" /> Solana
          </button>
          <button className="flex items-center w-full py-2 text-left hover:bg-gray-800 rounded">
            <FaEthereum className="mr-4" /> Ethereum
          </button>
          <button className="flex items-center w-full py-2 text-left hover:bg-gray-800 rounded">
            <FaBitcoin className="mr-4" /> Bitcoin
          </button>
        </div>

        <div className="space-y-2">
          <h2 className="text-sm font-bold">★ WATCHLIST</h2>
          <button className="flex items-center w-full py-2 text-left hover:bg-gray-800 rounded">
            Main Watchlist
          </button>
          <p className="text-gray-400 text-sm">Nothing in this list yet...</p>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-gray-400">
            anon
          </button>
          <button className="flex items-center">
            <FaSignInAlt className="mr-2" /> Sign-in
          </button>
        </div>

        <div className="flex justify-between">
          <button className="flex items-center">
            <FaTwitter className="text-xl" />
          </button>
          <button className="flex items-center">
            <FaTelegramPlane className="text-xl" />
          </button>
          <button className="flex items-center">
            <FaDiscord className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
