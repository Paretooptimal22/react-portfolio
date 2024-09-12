import React from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-200 text-black p-4">
      <div className="text-2xl font-bold mb-4">Kevin Young</div>
      <nav>
        <ul>
          <li className="mb-2 flex items-center hover:bg-slate-400 rounded">
            {/* Information Icon */}
            <a href="#about" className="block">
              <UserCircleIcon className="w-5 h-5 mr-2" />
            </a>

            {/* About Me link */}
            <a href="#about" className="block py-2 px-4">
              About Me
            </a>
          </li>
          <li className="mb-2 flex items-center hover:bg-slate-400 rounded">

            <a href="#projects" className="block">
              <InformationCircleIcon className="w-5 h-5 mr-2" />
            </a>

            <a href="#projects" className="block py-2 px-4 ">
              Projects
            </a>

          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
