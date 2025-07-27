import React from 'react';

const Timeline = ({ position }) => {
  // Lista de eventos com espaços vazios no final
  const events = [
    null, // Espaço vazio após a linha de chegada
    { year: '2000', description: 'Event 1', img: 'https://via.placeholder.com/50' },
    null, // Espaço vazio
    { year: '2005', description: 'Event 2', img: 'https://via.placeholder.com/50' },
    null, // Espaço vazio
    { year: '2010', description: 'Event 3', img: 'https://via.placeholder.com/50' },
    null, // Espaço vazio
    { year: '2015', description: 'Event 4', img: 'https://via.placeholder.com/50' },
    null, // Espaço vazio
    { year: '2020', description: 'Event 5', img: 'https://via.placeholder.com/50' },
    { year: '2025', description: 'Finish Line', img: 'https://via.placeholder.com/50' },
    null, // Espaço vazio após a linha de chegada
    null, // Adicione mais espaços vazios conforme necessário
    null, // Adicione mais espaços vazios conforme necessário
    null, // Adicione mais espaços vazios conforme necessário
    null, // Adicione mais espaços vazios conforme necessário
    null, // Adicione mais espaços vazios conforme necessário
  ];

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div
        style={{
          transform: `translateX(-${position}px)`,
          whiteSpace: 'nowrap',
          width: `${events.length * 150}px`, // Ajuste a largura total da timeline conforme necessário
        }}
        className="flex h-full items-center"
      >
        {events.map((event, index) => (
          event ? (
            <div
              key={index}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                marginRight: '50px', // Espaço entre os itens da timeline
                flexShrink: 0,
              }}
              className="flex-shrink-0"
            >
              <img src={event.img} alt={event.description} style={{ width: '50px', height: '50px' }} />
              <div style={{ marginLeft: '10px', color: 'white' }}>
                <div>{event.year}</div>
                <div>{event.description}</div>
              </div>
            </div>
          ) : (
            // Espaço vazio
            <div
              key={index}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                marginRight: '150px', // Largura do espaço vazio
                flexShrink: 0,
              }}
              className="flex-shrink-0"
            >
              {/* Espaço vazio, sem conteúdo */}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Timeline;
