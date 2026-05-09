import React from 'react';

const Header = () => (
  <header className="bg-gray-900 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-lg font-semibold">Task Management</h1>
      <nav className="space-x-4">
        <a href="#" className="hover:underline">Dashboard</a>
        <a href="#" className="hover:underline">Profile</a>
      </nav>
    </div>
  </header>
);

export default Header;
