const ProjectCard = () => (
  <div className="bg-[#2A2A2A] p-4 rounded-lg hover:shadow-lg hover:scale-105 transition-transform">
    <div className="bg-gray-700 h-40 mb-4 rounded"></div>
    <h4 className="text-white font-semibold">Título do Projeto</h4>
    <p className="text-[#A0A0A0] text-sm">Descrição curta do projeto aqui.</p>
    <button className="mt-3 px-4 py-2 bg-[#00C2FF] text-black rounded hover:bg-[#009AD9]">
      Ver Mais
    </button>
  </div>
)
export default ProjectCard;
