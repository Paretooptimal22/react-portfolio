import React from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/solid';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-200 text-black p-4">
      <div className="text-2xl font-bold mb-4">Kevin Young</div>
      <nav>
        <ul>
          <li className="mb-2 flex items-center">
            {/* Information Icon */}
            <InformationCircleIcon className="w-5 h-5 mr-2" />

            {/* About Me link */}
            <a href="#about" className="block py-2 px-4 hover:bg-slate-500 rounded">
              About Me
            </a>
          </li>
          <li className="mb-2">
            <a href="#projects" className="block py-2 px-4 hover:bg-slate-500 rounded">Projects</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
