import React from 'react';
import { GraduationCap, Briefcase, Scale, ChevronRight } from 'lucide-react';
import { TIMELINE_DATA } from '../constants';

const Timeline: React.FC = () => {
  const getIcon = (type: string) => {
    switch(type) {
      case 'school': return <GraduationCap size={24} className="text-tech-accent" />;
      case 'work': return <Briefcase size={24} className="text-purple-400" />;
      case 'law': return <Scale size={24} className="text-law-gold" />;
      default: return <Briefcase size={24} />;
    }
  };

  return (
    <section id="about" className="py-24 bg-tech-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            非典型的 <span className="blue-gradient-text">成长路径</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            从深耕算法的人工智能博士，到互联网大厂合规专家，再到执业律师。<br/>
            每一次转身，都是为了更深刻地理解技术与法律的边界。
          </p>
        </div>

        <div className="relative">
          {/* Desktop Horizontal Line */}
          {/* Calculated Top Position: Year Badge (~38px) + Margin (24px) + Half Icon (32px) = ~94px */}
          <div className="hidden md:block absolute top-[94px] left-0 w-full h-0.5 bg-slate-800">
             <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-tech-accent/20 via-purple-500/20 to-law-gold/20 w-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {TIMELINE_DATA.map((item, index) => (
              <div key={index} className="relative flex flex-col md:items-center group">
                
                {/* Mobile Vertical Connector */}
                 {index !== TIMELINE_DATA.length - 1 && (
                   <div className="md:hidden absolute left-[27px] top-14 bottom-[-48px] w-0.5 bg-slate-800 z-0"></div>
                 )}

                {/* Desktop Year Badge (Positioned ABOVE the timeline node) */}
                <div className="hidden md:flex mb-6 items-center justify-center w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
                   <span className="inline-block px-5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-tech-accent font-mono font-bold shadow-[0_4px_12px_rgba(0,0,0,0.3)] group-hover:border-tech-accent/50 group-hover:bg-slate-800 transition-all hover:scale-105 cursor-default">
                    {item.year}
                  </span>
                </div>

                {/* Node / Icon */}
                <div className="flex items-center md:justify-center mb-8 z-10 w-full md:w-auto relative">
                   {/* Icon Circle */}
                   <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-tech-900 border-4 border-slate-800 group-hover:border-slate-600 group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-[0_0_20px_rgba(15,23,42,0.5)] relative z-10">
                      {getIcon(item.iconType)}
                   </div>
                   
                   {/* Mobile Header text next to icon */}
                   <div className="md:hidden ml-4">
                     <span className="inline-block px-2 py-0.5 rounded bg-slate-800 text-tech-accent text-xs font-mono mb-1">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-white leading-tight">{item.title}</h3>
                   </div>
                </div>

                {/* Content Card (Below the node) */}
                <div className="ml-[calc(3.5rem+1rem)] md:ml-0 md:w-full md:px-2 h-full">
                  <div className="glass-panel p-6 rounded-xl hover:bg-slate-800/80 transition-all duration-300 md:hover:-translate-y-2 border-t border-slate-700/50 md:border-t-4 md:border-t-transparent md:hover:border-t-law-gold relative group-hover:shadow-xl h-full flex flex-col relative">
                    
                    {/* Connector triangle for desktop (pointing up to icon) */}
                    <div className="hidden md:block absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-slate-800/80 group-hover:border-b-law-gold/80 transition-colors"></div>

                    <h3 className="hidden md:block text-lg font-bold text-white mb-2 group-hover:text-law-gold transition-colors text-center">{item.title}</h3>
                    <h4 className="text-sm text-slate-400 font-medium mb-4 md:text-center flex items-center justify-center gap-2">
                      {item.org}
                    </h4>
                    
                    <p className="text-slate-400 text-sm leading-relaxed md:text-center flex-grow">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Direction Indicator (Desktop Only) */}
                {index < TIMELINE_DATA.length - 1 && (
                   <div className="hidden md:block absolute -right-4 top-[94px] -translate-y-1/2 z-0 text-slate-700 animate-pulse">
                      <ChevronRight size={24} />
                   </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;