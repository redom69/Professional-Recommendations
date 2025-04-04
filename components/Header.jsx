import React from 'react';

import { useUser } from '../context/UserContext';

export default function Header() {
  const { mockUser } = useUser();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <h1 className="text-2xl font-bold text-blue-600">ProNet</h1>
          <nav className="hidden md:flex gap-6 text-sm text-gray-700">
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
            <a href="#" className="hover:text-blue-600">
              Network
            </a>
            <a href="#" className="hover:text-blue-600">
              Jobs
            </a>
            <a href="#" className="hover:text-blue-600">
              Messages
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button
            aria-label="Notifications"
            className="relative w-5 h-5 text-gray-500 hover:text-gray-800"
          >
            <i className="pi pi-bell text-lg" />
          </button>
          <img
            src={mockUser.photo}
            alt={mockUser.name}
            className="w-8 h-8 rounded-full border object-cover"
          />
        </div>
      </div>
    </header>
  );
}
