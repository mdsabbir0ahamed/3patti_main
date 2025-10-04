'use client';

import { useState } from 'react';

export default function Profile() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    chips: 5000,
    coins: 100,
  });

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <p className="mt-1 text-lg">{user.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="mt-1 text-lg">{user.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Chips</label>
            <p className="mt-1 text-lg">{user.chips}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Coins</label>
            <p className="mt-1 text-lg">{user.coins}</p>
          </div>
        </div>
      </div>
    </div>
  );
}