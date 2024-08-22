import React from 'react';
import TokenRow from './TokenRow';

const TokenTable = ({ tokens }) => {
  return (
    <div className="bg-gray-900 p-4 text-white rounded">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Token</th>
            <th className="text-left p-2">Price</th>
            <th className="text-left p-2">Change</th>
            <th className="text-left p-2">Volume</th>
            <th className="text-left p-2">MAKERS</th>
            <th className="text-left p-2">5M</th>
            <th className="text-left p-2">1H</th>
            <th className="text-left p-2">6H</th>
            <th className="text-left p-2">24H</th>
            <th className="text-left p-2">LIQUIDITY</th>
            <th className="text-left p-2">MCAP</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <TokenRow key={index} token={token} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TokenTable;

