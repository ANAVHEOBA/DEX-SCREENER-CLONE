import { useEffect, useState } from 'react';

const PriceTracker = ({ tokens, setTokens }) => {
    useEffect(() => {
        const socket = new WebSocket('wss://your-dex-websocket-endpoint');

        socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            // Assuming data contains updated prices in the same format as your tokens
            const updatedTokens = tokens.map(token => {
                if (token.name === data.name) {
                    return { ...token, price: `$${data.price}` };
                }
                return token;
            });
            setTokens(updatedTokens);
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        return () => {
            socket.close();
        };
    }, [tokens, setTokens]);

    return null;
};

export default PriceTracker;
