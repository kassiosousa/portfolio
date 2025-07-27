import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Home from './components/Home';
import Footer from './components/Footer';
import History from './components/History';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'history':
        return <History />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header setActiveSection={setActiveSection} />
      <main className="flex-grow flex flex-col justify-center">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
