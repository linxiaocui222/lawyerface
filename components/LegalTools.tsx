import React from 'react';
import { LEGAL_TOOLS_DATA } from '../constants';
import { ExternalLink, Wrench, Lock } from 'lucide-react';

const LegalTools: React.FC = () => {
  return (
    <section id="tools" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-tech-accent/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-law-gold/30 bg-law-gold/10 text-law-gold text-sm font-medium mb-4">
              <Wrench size={14} />
              <span>赋能法律实践</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              精选 <span className="blue-gradient-text">法律 AI 工具箱</span>
            </h2>
            <p className="text-slate-400 max-w-xl">
              工欲善其事，必先利其器。这里汇集了全球最前沿的法律科技工具，
              也是我日常工作中提升效率的秘密武器。
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEGAL_TOOLS_DATA.map((tool, index) => (
            <div 
              key={index}
              className={`group relative flex flex-col p-6 rounded-xl border transition-all duration-300 ${
                tool.isSelfDeveloped 
                  ? 'bg-gradient-to-br from-slate-900 to-tech-accent/10 border-tech-accent/30 hover:border-tech-accent hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]' 
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-600 hover:bg-slate-900'
              }`}
            >
              {/* Badge for Self Developed */}
              {tool.isSelfDeveloped && (
                <div className="absolute -top-3 -right-3 bg-tech-accent text-tech-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  林律师自研
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  tool.isSelfDeveloped ? 'bg-tech-accent/20 text-tech-accent' : 'bg-slate-800 text-slate-400 group-hover:text-white'
                }`}>
                  <tool.icon size={24} />
                </div>
                <span className="text-xs font-mono text-slate-500 border border-slate-800 px-2 py-1 rounded bg-slate-900">
                  {tool.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-tech-accent transition-colors">
                {tool.name}
              </h3>
              
              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                {tool.description}
              </p>

              <div className="mt-auto">
                {tool.isComingSoon ? (
                   <button disabled className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-slate-800 text-slate-500 text-sm font-medium cursor-not-allowed border border-slate-700">
                     <Lock size={16} />
                     开发调试中
                   </button>
                ) : (
                  <a 
                    href={tool.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-slate-800 text-white text-sm font-medium hover:bg-tech-accent hover:text-tech-900 transition-all group-hover:shadow-lg"
                  >
                    访问工具 <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalTools;