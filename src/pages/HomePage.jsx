import StatCard from "../components/StatCard";
import ProjectCard from "../components/ProjectCard";

import Profile from '../components/Profile';

function HomePage() {
  return (
      <main className="flex-1 p-10">
        <section className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Profile />
          <div>
            <h1 className="text-4xl font-bold text-white">Kassio Sousa</h1>
            <h2 className="text-xl text-[#00C2FF]">Software Engineer</h2>
            <p className="mt-2 text-[#A0A0A0]">Fullstack + Game Developer 🚀</p>
            <button className="mt-4 px-5 py-2 bg-[#FF4081] text-white rounded-md hover:bg-[#D7366A]">
              Entre em contato
            </button>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 text-center">
          <StatCard value="10+" label="Anos de Experiência" />
          <StatCard value="40+" label="Projetos Concluídos" />
          <StatCard value="15" label="Tecnologias" />
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-semibold text-white mb-6">Projetos</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>
      </main>
  );
}

export default HomePage;
