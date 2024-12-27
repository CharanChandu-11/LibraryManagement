import React, { useState } from 'react';
import { Library, Menu, X } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => setActiveTab('home')}
        >
          <Library className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Shelfwise+</h1>
        </div>

        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-full right-0 w-48 bg-gradient-to-r from-[rgb(127,56,232)] to-[rgb(142,52,234)] rounded-l-lg p-4 lg:static lg:block lg:w-auto lg:bg-transparent lg:rounded-none`}
        >
          <ul
            className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 items-center p-3 lg:p-0"
          >
            <li>
              <button
                onClick={() => {
                  setActiveTab('home');
                  setMenuOpen(false);
                }}
                className={`hover:text-indigo-200 ${
                  activeTab === 'home' ? 'text-indigo-200 font-semibold' : ''
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab('browse');
                  setMenuOpen(false);
                }}
                className={`hover:text-indigo-200 ${
                  activeTab === 'browse' ? 'text-indigo-200 font-semibold' : ''
                }`}
              >
                Browse
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab('mybooks');
                  setMenuOpen(false);
                }}
                className={`hover:text-indigo-200 ${
                  activeTab === 'mybooks' ? 'text-indigo-200 font-semibold' : ''
                }`}
              >
                My Books
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab('login');
                  setMenuOpen(false);
                }}
                className={`hover:text-indigo-200 ${
                  activeTab === 'login' ? 'text-indigo-200 font-semibold' : ''
                }`}
              >
                Login
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
