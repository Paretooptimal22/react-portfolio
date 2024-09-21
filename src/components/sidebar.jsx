import React from 'react';
import { InformationCircleIcon, UserCircleIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  const navigate = useNavigate(); // useNavigate to programmatically navigate and close the menu

  const handleLinkClick = (path) => {
    navigate(path); // Navigate to the path
    toggleMobileMenu(); // Close the mobile menu after navigating
  };

  return (
    <>
      {/* Sidebar for medium and larger screens */}
      <aside className="w-64 border text-black p-4 hidden md:block">
        <div className="text-2xl font-bold mb-4">Kevin Young</div>
        <nav>
          <ul>
            <li className="mb-2 flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-sky-300 to-blue-300 duration-300 ... rounded">
              <UserCircleIcon className="size-6 mr-2" />
              <Link to="/" className="block py-2 px-4">About Me</Link>
            </li>
            <li className="mb-2 flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-sky-300 to-blue-300 duration-300 ... rounded">
              <InformationCircleIcon className="size-6 mr-2" />
              <Link to="/projects" className="block py-2 px-4">Projects</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Navbar for small screens */}
      <nav className="border p-4 block md:hidden">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">Kevin Young</div>
          {/* Dropdown button for mobile navbar */}
          <button className="text-black focus:outline-none" onClick={toggleMobileMenu}>
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
        {/* Mobile navigation links */}
        {isMobileMenuOpen && (
          <div className="mt-4">
            <ul>
              <li className="mb-2 flex items-center hover:bg-slate-400 rounded">
                <UserCircleIcon className="w-5 h-5 mr-2" />
                {/* Handle link click and close mobile menu */}
                <button onClick={() => handleLinkClick('/')} className="block py-2 px-4">
                  About Me
                </button>
              </li>
              <li className="mb-2 flex items-center hover:bg-slate-400 rounded">
                <InformationCircleIcon className="w-5 h-5 mr-2" />
                {/* Handle link click and close mobile menu */}
                <button onClick={() => handleLinkClick('/projects')} className="block py-2 px-4">
                  Projects
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Sidebar;
