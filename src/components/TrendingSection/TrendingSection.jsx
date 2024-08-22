import React from 'react';

const TrendingSection = () => {
  const trendingTokens = [
    { name: 'BTC', price: '$30,000', change: 1.5, volume: '1B' },
    { name: 'ETH', price: '$2,000', change: -0.5, volume: '500M' },
    // Add more tokens here
  ];

  return (
    <div className="bg-gray-900 p-4 rounded text-white">
      <h2 className="text-xl mb-4">Trending Tokens</h2>
      <div className="grid grid-cols-2 gap-4">
        {trendingTokens.map((token, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded">
            <h3>{token.name}</h3>
            <p>{token.price}</p>
            <p className={token.change > 0 ? 'text-green-500' : 'text-red-500'}>
              {token.change}%
            </p>
            <p>{token.volume}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;
