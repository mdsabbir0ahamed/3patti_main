'use client';

import { useState, useEffect } from 'react';

interface Table {
  id: string;
  name: string;
  players: number;
  maxPlayers: number;
  boot: number;
}

export default function Lobby() {
  const [tables, setTables] = useState<Table[]>([]);

  useEffect(() => {
    // TODO: Fetch tables from backend
    setTables([
      { id: '1', name: 'Table 1', players: 2, maxPlayers: 5, boot: 100 },
      { id: '2', name: 'Table 2', players: 4, maxPlayers: 5, boot: 500 },
    ]);
  }, []);

  const joinTable = (tableId: string) => {
    // TODO: Implement join table logic
    console.log('Joining table:', tableId);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Game Lobby</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tables.map((table) => (
          <div key={table.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{table.name}</h3>
            <p>Players: {table.players}/{table.maxPlayers}</p>
            <p>Boot: {table.boot} chips</p>
            <button
              onClick={() => joinTable(table.id)}
              className="mt-2 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
              disabled={table.players >= table.maxPlayers}
            >
              {table.players >= table.maxPlayers ? 'Full' : 'Join'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}