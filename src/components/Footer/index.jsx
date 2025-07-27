import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/seu-usuario" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/seu-usuario" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://www.instagram.com/seu-usuario" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl hover:text-gray-400"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-400">
          &copy; 2024 Kassio Sousa. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
