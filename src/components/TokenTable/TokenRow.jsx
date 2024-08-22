import React from 'react';

const TokenRow = ({ token }) => {
  return (
    <tr className="border-b">
      <td className="p-2">{token.name}</td>
      <td className="p-2">{token.price}</td>
      <td className={`p-2 ${token.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
        {token.change}%
      </td>
      <td className="p-2">{token.volume}</td>
      <td className="p-2">{token.MAKERS}</td>
      <td className="p-2">{token['5M']}</td>
      <td className="p-2">{token['1H']}</td>
      <td className="p-2">{token['6H']}</td>
      <td className="p-2">{token['24H']}</td>
      <td className="p-2">{token.LIQUIDITY}</td>
      <td className="p-2">{token.MCAP}</td>
    </tr>
  );
};

export default TokenRow;

