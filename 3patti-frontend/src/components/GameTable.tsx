'use client';

import { useState } from 'react';

interface Player {
  id: string;
  name: string;
  chips: number;
  cards: string[];
  isTurn: boolean;
}

export default function GameTable() {
  const [players, setPlayers] = useState<Player[]>([
    { id: '1', name: 'Player 1', chips: 1000, cards: ['A♠', 'K♥', 'Q♦'], isTurn: true },
    { id: '2', name: 'Player 2', chips: 1500, cards: ['??', '??', '??'], isTurn: false },
  ]);

  const [pot, setPot] = useState(200);

  const placeBet = (amount: number) => {
    // TODO: Implement betting logic
    console.log('Betting:', amount);
  };

  const fold = () => {
    // TODO: Implement fold logic
    console.log('Folding');
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Game Table</h2>
      <div className="bg-green-800 p-8 rounded-lg">
        <div className="text-center text-white mb-4">
          <p className="text-xl">Pot: {pot} chips</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {players.map((player) => (
            <div key={player.id} className={`bg-white p-4 rounded-lg ${player.isTurn ? 'ring-2 ring-yellow-400' : ''}`}>
              <h3 className="font-semibold">{player.name}</h3>
              <p>Chips: {player.chips}</p>
              <div className="flex space-x-2 mt-2">
                {player.cards.map((card, index) => (
                  <div key={index} className="bg-red-500 text-white p-2 rounded">
                    {card}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button
            onClick={() => placeBet(100)}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 mr-2"
          >
            Bet 100
          </button>
          <button
            onClick={fold}
            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
          >
            Fold
          </button>
        </div>
      </div>
    </div>
  );
}