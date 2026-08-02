import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Analyzer from './components/Analyzer';
import Metrics from './components/Metrics';
import Dataset from './components/Dataset';
import Architecture from './components/Architecture';
import VivaGuide from './components/VivaGuide';
import Footer from './components/Footer';
import DisclaimerModal from './components/DisclaimerModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [serverHealthy, setServerHealthy] = useState(false);
  const [theme, setTheme] = useState('dark'); // Default to high-tech dark theme

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme bg-[#070b14] text-slate-100' : 'light-theme bg-slate-50 text-slate-900';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Ping FastAPI backend health endpoint
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
        const res = await fetch(`${baseUrl}/api/health`, { signal: AbortSignal.timeout(3000) });
        if (res.ok) {
          const data = await res.json();
          setServerHealthy(data.status === 'healthy');
        } else {
          setServerHealthy(false);
        }
      } catch {
        setServerHealthy(false);
      }
    };

    checkHealth();
    const interval = setInterval(checkHealth, 10000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAnalyzer = () => {
    setActiveSection('analyzer');
    const el = document.getElementById('analyzer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-400 ${theme === 'dark' ? 'bg-[#070b14] text-slate-100 selection:bg-cyan-500 selection:text-black' : 'bg-slate-50 text-slate-900 selection:bg-cyan-600 selection:text-white'}`}>
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        serverHealthy={serverHealthy}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main>
        <HeroSection onExploreClick={scrollToAnalyzer} theme={theme} />
        <Analyzer serverHealthy={serverHealthy} theme={theme} />
        <About theme={theme} />
        <HowItWorks theme={theme} />
        <Metrics theme={theme} />
        <Dataset theme={theme} />
        <Architecture theme={theme} />
        <VivaGuide theme={theme} />
      </main>

      <Footer theme={theme} />
      <DisclaimerModal />
    </div>
  );
}
