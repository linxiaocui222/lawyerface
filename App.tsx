import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Expertise from './components/Expertise';
import WhyMe from './components/WhyMe';
import Contact from './components/Contact';
import GeminiChat from './components/GeminiChat';
import Insights from './components/Insights';
import LegalTools from './components/LegalTools';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-tech-900 text-slate-200 selection:bg-tech-accent selection:text-tech-900">
      <Header />
      <main>
        <Hero />
        <Timeline />
        <Expertise />
        <LegalTools />
        <WhyMe />
        <Insights />
        <Contact />
      </main>
      
      <footer className="bg-slate-950 py-8 border-t border-slate-900 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} 林晓翠律师事务所. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-50">京ICP备XXXXXXXX号 | 律师执业证号: 11101XXXXXXXXXXXX</p>
      </footer>

      <GeminiChat />
    </div>
  );
};

export default App;