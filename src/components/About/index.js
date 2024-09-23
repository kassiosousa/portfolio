import React from 'react';
import Profile from '../Profile';

const About = () => {
  return (
    <section 
      id="about" 
      className="p-2 flex flex-col"
    >
        <Profile pt={14} />

        {/* Sobre */}
        <div className="text-4xl font-bold text-white">Kassio Sousa</div>
        <div className="text-2xl text-gray-100">Software Engineer</div>
        <p className="text-lg text-gray-400">
          I am a Computer Scientist graduated from UFMA and a Specialist in digital games, with 12 years of experience as a software engineer. 
          My professional journey is marked by technical diversity, developing projects in PHP, NodeJs, React, C# and Python. 
          <br></br>
          My passion for game development led me to found Hardcoffee Game Studio in 2015 and Ops Game Studio in 2018, achieving recognition at major industry events 
          such as Big Festival, GameJam+, SbGames and Mega Mage.
          <br></br>
          I develop small commercial projects at my personal studio, <a className="text-blue-400 hover:underline" href="http://hardcoffeestudio.com/" target="_blank" rel="noopener noreferrer">Hardcoffee Studio</a>. I am the executive director at <a className="text-blue-400 hover:underline" href="https://www.amagames.com.br/" target="_blank" rel="noopener noreferrer">AMAGAMES</a> and I am the organizer of the São Luís/MA chapter of the <a className="text-blue-400 hover:underline" href="https://globalgamejam.org/" target="_blank" rel="noopener noreferrer">Global Game Jam</a>, the largest game creation marathon in the world.
        </p>
        <div className="border-b border-gray-400 w-full my-4"></div>

        {/* Trabalho */}
        <h3 className="text-2xl font-semibold text-white-700 pb-3 pt-3">Work</h3>
        <p className="text-lg text-gray-100">
          <strong><a className="text-blue-400 hover:underline" href="https://solides.com.br/" target="_blank" rel="noopener noreferrer">Sólides Tecnologia</a></strong> 
          <span className="text-gray-400"> //// </span> 
          <span>Software Engineer [2022-]</span>
        </p>
        <p className="text-lg text-gray-100">
          <strong><a className="text-blue-400 hover:underline" href="https://opsgamestudio.com" target="_blank" rel="noopener noreferrer">OPS Game Studio</a></strong> 
          <span className="text-gray-400"> //// </span> 
          <span>Executive Director [2018-]</span>
        </p>
        <p className="text-lg text-gray-100">
          <strong><a className="text-blue-400 hover:underline" href="https://portalpadrao.ufma.br/dted" target="_blank" rel="noopener noreferrer">DTED - UFMA</a></strong> 
          <span className="text-gray-400"> //// </span> 
          <span>System Analist [2017-2022]</span>
        </p>
        <p className="text-lg text-gray-100">
          <strong><a className="text-blue-400 hover:underline" href="#" target="_blank" rel="noopener noreferrer">Techned</a></strong> 
          <span className="text-gray-400"> //// </span> 
          <span>C# Developer [2014-2016]</span>
        </p>
        <div className="border-b border-gray-400 w-full my-4"></div>

        {/* Educação */}
        <h3 className="text-2xl font-semibold text-white-700 pb-3 pt-3">Education</h3>
        <p className="text-lg text-gray-100">
          <strong>UNIFAS</strong> 
          <span className="text-gray-400"> //// </span> 
          <span>Pós Graduação - Desenvolvimento de Jogos Digitais [2018-2020]</span>
        </p>
        <p className="text-lg text-gray-100">
          <strong>UFMA</strong>
          <span className="text-gray-400"> //// </span>
          <span>Graduação - Ciência da Computação [2009-2016]</span>
        </p>
        <div className="border-b border-gray-400 w-full my-4"></div>

        {/* Projetos */}
        <h3 className="text-2xl font-semibold text-white-700 pb-3 pt-3">Projects</h3>
        <p className="text-lg text-gray-100">
          <strong><a className="text-blue-400 hover:underline" href="#" target="_blank" rel="noopener noreferrer">Games</a></strong> 
          <span className="text-gray-400"> //// </span> 
          <span>Game projets i've worked on</span>
        </p>
        <p className="text-lg text-gray-100">
          <strong><a className="text-blue-400 hover:underline" href="#" target="_blank" rel="noopener noreferrer">AMAGAMES</a></strong> 
          <span className="text-gray-400"> //// </span> 
          <span>Executive director of Maranhão game developers association</span>
        </p>
        <p className="text-lg text-gray-100">
          <strong><a className="text-blue-400 hover:underline" href="#" target="_blank" rel="noopener noreferrer">Reservaí</a></strong> 
          <span className="text-gray-400"> //// </span> 
          <span>Appointments system</span>
        </p>
    </section>
  );
};

export default About;
