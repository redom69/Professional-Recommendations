import React from 'react';

import { useUser } from '../context/UserContext';

export default function ProfileCard() {
  const user = useUser();
  const { mockUser } = user;

  return (
    <div className="bg-white border rounded p-6 flex flex-col items-center text-center space-y-3">
      <img
        src={mockUser.photo}
        alt={mockUser.name}
        className="w-16 h-16 rounded-full object-cover border"
      />
      <div>
        <h2 className="text-xl font-bold">{mockUser.name}</h2>
        <p className="text-gray-600">
          {mockUser.position} at {mockUser.company}
        </p>
        <div className="mt-4 flex gap-2 justify-center">
          <button className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded hover:bg-blue-700">
            Connect
          </button>
          <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded text-gray-700 hover:bg-gray-100">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}
