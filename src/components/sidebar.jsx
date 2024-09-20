import React from 'react';
import { InformationCircleIcon, UserCircleIcon, Bars3Icon } from '@heroicons/react/24/solid';

const Sidebar = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    <>
      {/* Sidebar for medium and larger screens */}
      <aside className="w-64 border text-black p-4 hidden md:block">
        <div className="text-2xl font-bold mb-4">Kevin Young</div>
        <nav>
          <ul>
            <li className="mb-2 flex items-center hover:bg-slate-400 rounded">
              <UserCircleIcon className="w-5 h-5 mr-2" />
              <a href="#about" className="block py-2 px-4">
                About Me
              </a>
            </li>
            <li className="mb-2 flex items-center hover:bg-slate-400 rounded">
              <InformationCircleIcon className="w-5 h-5 mr-2" />
              <a href="#projects" className="block py-2 px-4">
                Projects
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Navbar for small screens */}
      <nav className="border p-4 block md:hidden">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">Kevin Young</div>
          {/* Dropdown button for mobile navbar */}
          <button
            className="text-black focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
        {/* Mobile navigation links */}
        {isMobileMenuOpen && (
          <div className="mt-4">
            <ul>
              <li className="mb-2 flex items-center hover:bg-slate-400 rounded">
                <UserCircleIcon className="w-5 h-5 mr-2" />
                <a href="#about" className="block py-2 px-4">
                  About Me
                </a>
              </li>
              <li className="mb-2 flex items-center hover:bg-slate-400 rounded">
                <InformationCircleIcon className="w-5 h-5 mr-2" />
                <a href="#projects" className="block py-2 px-4">
                  Projects
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Sidebar;
