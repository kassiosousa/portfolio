import React, { useState, useRef } from 'react';
import ProjectModal from './ProjectModal';
import projectsData from '../../data/projects';
import { Project } from '../../models/project';

const allTags = ['All', 'Steam', 'Mobile'];

const Projects = () => {
  // const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // const [selectedTag, setSelectedTag] = useState('All');

  // // Referência para o container dos projetos
  // const projectSectionRef = useRef<HTMLDivElement | null>(null);

  // const handleProjectClick = (project: Project) => {
  //   setSelectedProject(project);
  // };

  // const closeModal = () => {
  //   setSelectedProject(null);
  // };

  // const handleTagClick = (tag: string) => {
  //   setSelectedTag(tag);

  //   // Rolar para o topo do container de projetos
  //   if (projectSectionRef.current) {
  //     projectSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  // const filteredProjects = selectedTag === 'All'
  //   ? projectsData
  //   : projectsData.filter(project => project.tags.includes(selectedTag));

  // return (
  //   <section 
  //     id="projects" 
  //     className="p-2 flex flex-col md:pl-14"
  //     ref={projectSectionRef} // Referência ao container de projetos
  //   >
  //     <h2 className="text-4xl font-bold text-white mb-8 mt-14 text-left w-full">Projetos</h2>

  //     {/* Barra de filtro */}
  //     <div className="mb-8 flex flex-wrap gap-4">
  //       {allTags.map((tag) => (
  //         <button
  //           key={tag}
  //           onClick={() => handleTagClick(tag)} // Use a função de tag click
  //           className={`px-4 py-2 rounded-full ${
  //             selectedTag === tag ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'
  //           } hover:bg-blue-500 transition-colors`}
  //         >
  //           {tag}
  //         </button>
  //       ))}
  //     </div>

  //     {/* Projetos filtrados */}
  //     <div 
  //       className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
  //       style={{ minHeight: '600px' }} // Define uma altura mínima para manter o espaço reservado
  //     >
  //     {filteredProjects && filteredProjects.length > 0 ? (
  //       filteredProjects.map((project) => (
  //         <div
  //           key={project.id}
  //           className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
  //           onClick={() => handleProjectClick(project)}
  //         >
  //           <img
  //             src={project.image}
  //             alt={`Imagem de ${project.title}`}
  //             className="w-full h-48 md:h-24 lg:h-48 object-cover rounded-lg mb-4"
  //           />
  //           <h3 className="text-2xl font-bold text-white">{project.title}</h3>
  //           <p className="text-gray-400">{project.description}</p>
  //           <p className="text-gray-300 mt-2">Functions: {project.functions}</p>
            
  //           {/* Exibindo tags do projeto */}
  //           <div className="mt-2 flex flex-wrap gap-2">
  //             {project.tags && project.tags.length > 0 ? (
  //               project.tags.map((tag) => (
  //                 <span key={tag} className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
  //                   {tag}
  //                 </span>
  //               ))) : (
  //                 <p>No projects available</p>
  //               )}
  //           </div>
  //         </div>
  //       ))
  //     ) : (
  //       <p>No projects available</p>
  //     )}
  //     </div>

  //     {/* Modal do projeto */}
  //     {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
  //   </section>
  // );
};

export default Projects;
