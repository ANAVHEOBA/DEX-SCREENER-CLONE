import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import FilterBar from '../components/FilterBar/FilterBar';
import TokenTable from '../components/TokenTable/TokenTable';
import TrendingSection from '../components/TrendingSection/TrendingSection';
import Footer from '../components/Footer/Footer';

const tokens = [
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M', MAKERS: '4,580', '5M': '-0.49%', '1H': '1.95%', '6H': '-8.08%', '24H': '-26.89%', LIQUIDITY: '$568K', MCAP: '$29.1M'},
  
  // Add more tokens here
];

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-900 p-4">
          <FilterBar />
          <TokenTable tokens={tokens} />
          <TrendingSection />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
