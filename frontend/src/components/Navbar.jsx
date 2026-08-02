import React, { useState, useEffect } from 'react';
import { Activity, Cpu, FileText, Database, Layers, HelpCircle, Sun, Moon } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection, serverHealthy, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'analyzer', label: 'X-Ray Analyzer', icon: Activity },
    { id: 'about', label: 'About', icon: FileText },
    { id: 'pipeline', label: 'How It Works', icon: Cpu },
    { id: 'metrics', label: 'Evaluation Metrics', icon: Activity },
    { id: 'dataset', label: 'Dataset', icon: Database },
    { id: 'architecture', label: 'CNN Architecture', icon: Layers },
    { id: 'viva', label: 'Viva Prep', icon: HelpCircle },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isDark = theme === 'dark';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-[#070b14]/90 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-2xl shadow-black/60'
            : 'bg-white/90 backdrop-blur-xl border-b border-slate-200 py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => scrollToSection('hero')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
            <Activity className="w-6 h-6 text-black stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className={`text-xl font-extrabold tracking-tight ${isDark ? 'bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent' : 'bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent'}`}>
                PneumoVision
              </span>
              <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${isDark ? 'bg-cyan-950/80 border-cyan-500/30 text-cyan-300' : 'bg-cyan-50 border-cyan-200 text-cyan-700'}`}>
                AI v1.0
              </span>
            </div>
            <p className={`text-[10px] font-mono tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              DEEP CNN DIAGNOSTIC SYSTEM
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className={`hidden lg:flex items-center space-x-1 glass-panel px-3 py-1.5 rounded-full ${isDark ? 'border-slate-800/80 bg-slate-950/40' : 'border-slate-200 bg-white/80'}`}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? isDark
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                      : 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20'
                    : isDark
                      ? 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Action Bar: Status, Theme Toggle, Analyze CTA */}
        <div className="flex items-center space-x-3">
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Tech Theme'}
            className={`p-2 rounded-xl border transition-all ${
              isDark
                ? 'bg-slate-900 border-slate-800 text-cyan-400 hover:bg-slate-800 hover:border-cyan-500/40'
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Server Health Status Badge */}
          <div className={`hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-xl text-xs font-mono border ${isDark ? 'bg-slate-900/90 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'}`}>
            <span className={`w-2 h-2 rounded-full ${serverHealthy ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`}></span>
            <span>
              API: {serverHealthy ? <span className="text-emerald-400 font-bold">ONLINE</span> : <span className="text-amber-500 font-bold">DEMO MODE</span>}
            </span>
          </div>

          <button
            onClick={() => scrollToSection('analyzer')}
            className="px-4 py-2 text-xs font-bold text-black bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 rounded-xl hover:from-cyan-300 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/25 hover:scale-[1.02] active:scale-95"
          >
            Analyze X-Ray
          </button>

        </div>

      </div>
    </nav>
  );
}
