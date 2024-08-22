import React from 'react';
import { FaApple, FaAndroid, FaBell, FaChartBar, FaStar, FaCaretUp, FaCaretDown, FaSignInAlt, FaTwitter, FaTelegramPlane, FaDiscord } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 h-full flex flex-col justify-between">
      <div className="p-4">
        <div className="flex items-center mb-6">
          <span className="text-xl font-bold">DEXSCREENER</span>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-3 py-2 rounded bg-gray-800 text-white"
          />
        </div>
        <div className="mb-4">
          <button className="w-full bg-gray-700 py-2 rounded flex items-center justify-center">
            Get the App! <FaApple className="ml-2" /> <FaAndroid className="ml-2" />
          </button>
        </div>
        <div className="space-y-4">
          <button className="flex items-center w-full py-2 text-left">
            <FaStar className="mr-4" /> Watchlist
          </button>
          <button className="flex items-center w-full py-2 text-left">
            <FaBell className="mr-4" /> Alerts
          </button>
          <button className="flex items-center w-full py-2 text-left">
            <FaChartBar className="mr-4" /> Multicharts
          </button>
          <button className="flex items-center w-full py-2 text-left">
            <FaCaretUp className="mr-4" /> Gainers & Losers
          </button>
          <button className="flex items-center w-full py-2 text-left">
            <FaCaretDown className="mr-4" /> Portfolio
          </button>
          <button className="flex items-center w-full py-2 text-left">
            <FaSignInAlt className="mr-4" /> Advertise
          </button>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <button className="w-full flex items-center">
          <FaTwitter className="mr-4" />
          <span>Twitter</span>
        </button>
        <button className="w-full flex items-center">
          <FaTelegramPlane className="mr-4" />
          <span>Telegram</span>
        </button>
        <button className="w-full flex items-center">
          <FaDiscord className="mr-4" />
          <span>Discord</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
