import { FaUser, FaFolderOpen, FaStar, FaHome } from 'react-icons/fa';

const Header = ({ setActiveSection }) => {
  return (
    <header className="w-full bg-gray-800 text-white p-4 fixed top-0 z-50 flex justify-center">
      <nav className="hidden md:flex w-[44px] h-screen bg-gray-800 text-white fixed left-0 top-0 flex flex-col justify-center">
        <ul className="space-y-6 list-none">
          <li
            className="flex flex-col items-center py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => setActiveSection('home')}
          >
            <FaHome className="text-2xl" />
          </li>
          <li
            className="flex flex-col items-center py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => setActiveSection('about')}
          >
            <FaUser className="text-2xl" />
          </li>
          <li
            className="flex flex-col items-center py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => setActiveSection('projects')}
          >
            <FaFolderOpen className="text-2xl" />
          </li>
          <li
            className="flex flex-col items-center py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => setActiveSection('history')}
          >
            <FaStar className="text-2xl" />
          </li>
        </ul>
      </nav>

      {/* Menu Mobile */}
      <nav className="md:hidden flex justify-center items-center bg-gray-800 p-4 fixed w-full top-0 z-10">
        <ul className="flex space-x-6">
          <li
            className="hover:text-blue-400 cursor-pointer"
            onClick={() => setActiveSection('home')}
          >
            <FaHome className="text-2xl" />
          </li>
          <li
            className="hover:text-blue-400 cursor-pointer"
            onClick={() => setActiveSection('about')}
          >
            <FaUser className="text-2xl" />
          </li>
          <li
            className="hover:text-blue-400 cursor-pointer"
            onClick={() => setActiveSection('projects')}
          >
            <FaFolderOpen className="text-2xl" />
          </li>
          <li
            className="hover:text-blue-400 cursor-pointer"
            onClick={() => setActiveSection('history')}
          >
            <FaStar className="text-2xl" />
          </li>
        </ul>
      </nav>

    </header>
  );
};

export default Header;
