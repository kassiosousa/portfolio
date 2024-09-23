import React from 'react';
import Profile from '../Profile';
import { FaDesktop, FaGamepad } from 'react-icons/fa';

const Home = () => {
  return (
    <section 
      id="home" 
      className="p-4 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col md:flex-row items-center">
        <Profile pt={0} />
        
        {/* Textos */}
        <div className="mt-8 md:ml-8">
          <div className="text-[30px] md:text-[60px] font-bold text-white">
            Kassio Sousa
          </div>
          <div className="text-[15px] md:text-[30px] text-white">
            Software Engineer
          </div>
          <p className="text-[15px] text-gray-400 flex items-center">
            Fullstack Software Engineer <FaDesktop className="text-2xl text-blue-500 ml-2 mr-2" /> and 
            Game Developer <FaGamepad className="text-2xl text-blue-500 ml-2" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
