import React from 'react';
import { ArrowRight, Code2, Gavel } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-tech-900">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-law-gold/10 rounded-full blur-[128px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-6 z-10 relative grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-tech-accent/30 bg-tech-accent/10 text-tech-accent text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            科技 + 法律 双背景专家
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            懂技术的 <br />
            <span className="gold-gradient-text">法律专家</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
            10+年人工智能计算机背景，前阿里巴巴合规专家，执业律师。
            <br/>
            为您提供<span className="text-slate-200 font-semibold">AI法律、数据合规、开源治理</span>的一站式解决方案。
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-law-gold text-tech-900 font-bold rounded hover:bg-amber-300 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:-translate-y-1"
            >
              立即咨询 <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center gap-8 pt-8 border-t border-slate-800/50">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">10<span className="text-law-gold">+</span></span>
              <span className="text-sm text-slate-500">年技术背景</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">500<span className="text-law-gold">+</span></span>
              <span className="text-sm text-slate-500">合规项目经验</span>
            </div>
          </div>
        </div>

        {/* Abstract Hero Visual */}
        <div className="relative hidden md:block h-[600px]">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Central Circle */}
            <div className="w-80 h-80 rounded-full border border-slate-700 flex items-center justify-center relative animate-[spin_10s_linear_infinite]">
               <div className="absolute -top-3 bg-tech-900 px-2 text-slate-500"><Code2 size={24}/></div>
               <div className="absolute -bottom-3 bg-tech-900 px-2 text-law-gold"><Gavel size={24}/></div>
            </div>
            <div className="absolute w-60 h-60 rounded-full border border-slate-600 flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
            </div>
            
            {/* Image Placeholder */}
            <div className="absolute w-64 h-80 rounded-2xl overflow-hidden border-2 border-law-gold/50 shadow-2xl bg-slate-800 transform rotate-3 hover:rotate-0 transition-all duration-500 z-20">
               <img src="https://picsum.photos/400/600" alt="林晓翠律师形象照" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
               <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <p className="text-white font-bold">林晓翠 Lawyer Lin</p>
               </div>
            </div>
            
             {/* Tech Code Overlay */}
             <div className="absolute -right-10 top-20 p-4 glass-panel rounded-lg z-10 animate-pulse-slow">
               <pre className="text-xs text-tech-accent font-mono">
{`if (aiModel.risk > threshold) {
  return Compliance.Audit();
} else {
  return Compliance.Approve();
}`}
               </pre>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;