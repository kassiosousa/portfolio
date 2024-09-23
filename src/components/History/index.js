import React, { useState, useEffect } from 'react';
import Character from './Character';
import Timeline from './Timeline';
import './index.css'; // Certifique-se de que o arquivo CSS está importado

const History = () => {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for forward, -1 for backward

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setDirection(1);
      } else if (e.key === 'ArrowLeft') {
        setDirection(-1);
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        setDirection(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        // Move position based on direction
        return Math.min(Math.max(prevPosition + direction * 10, 0), 1420); // Adjust as needed
      });
    }, 50);

    return () => clearInterval(interval);
  }, [direction]);
  
  
  return (
    <section id="history" 
      className="relative game-screen p-14 w-full h-screen justify-center items-center overflow-hidden"
    >
      <div className="relative w-full h-full">
        <Timeline position={position} />
        <Character />
        <div
          className="absolute bottom-0 left-0 w-full"
          style={{
            height: '100px', // Defina a altura do terreno conforme necessário
            bottom: '-90px',
            backgroundImage: 'url("/terrain.png")',
            backgroundRepeat: 'repeat-x', // Faz a imagem repetir horizontalmente
            // backgroundSize: 'cover', // Ajusta o tamanho da imagem
          }}
        ></div>
      </div>
    </section>
  );
};

export default History;
