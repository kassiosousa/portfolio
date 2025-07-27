import React from 'react';
import { FaTimes } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg max-w-3xl w-full relative">
        <button
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
          onClick={onClose}
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
        <h6 className="text-gray mb-4">{project.description}</h6>
        {project.text && 
          <h6 className="text-gray mb-4">{project.text}</h6>
        }
        {project.link && 
          <h6 className="text-gray-400 mb-4"><a href='${project.link}' target='_blank'>Confira no link!</a></h6>
        }
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Project image ${project.title} - ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          ))}
        </div>
        <div className="mt-4">
          <iframe
            className="w-full h-64"
            src={project.video}
            title={`Project Video ${project.title}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
