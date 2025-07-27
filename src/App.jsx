import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Home from './components/Home';
import Footer from './components/Footer';
import History from './components/History';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import HistoryPage from './pages/HistoryPage';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'history':
        return <HistoryPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    // <div className="flex flex-col min-h-screen">
    //   <Header setActiveSection={setActiveSection} />
    //   <main className="flex-grow flex flex-col justify-center">
    //     {renderSection()}
    //   </main>
    //   <Footer />
    // </div>
    <div className="flex min-h-screen bg-[#1E1E1E] text-[#E0E0E0]">
      <Sidebar setActiveSection={setActiveSection} />
      {/* <aside className="w-16 bg-[#151515] flex flex-col items-center py-4 space-y-6">
        <SidebarIcon icon={<FaHome page="home" setActiveSection={setActiveSection} />} />
        <SidebarIcon icon={<FaUser page="about" />} />
        <SidebarIcon icon={<FaFolder page="projects" />} />
        <SidebarIcon icon={<FaStar page="history" />} />
      </aside> */}
      {renderSection()}
    </div>
  );
}

export default App;
