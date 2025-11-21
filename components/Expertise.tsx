import React from 'react';
import { SERVICES_DATA } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              核心 <span className="gold-gradient-text">业务领域</span>
            </h2>
            <p className="text-slate-400 max-w-xl">
              专注 "Tech + Law" 交叉领域，为高科技企业提供听得懂代码、看得懂架构的法律服务。
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div key={index} className="group relative p-1 rounded-2xl bg-gradient-to-b from-slate-700 to-slate-800 hover:from-law-gold hover:to-amber-600 transition-all duration-500">
              <div className="bg-tech-900 h-full p-8 rounded-xl relative overflow-hidden">
                {/* Background Icon Watermark */}
                <service.icon className="absolute -right-6 -bottom-6 w-32 h-32 text-slate-800/50 group-hover:text-law-gold/10 transition-colors transform group-hover:rotate-12" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-law-gold group-hover:scale-110 transition-transform">
                    <service.icon size={24} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 mb-6 min-h-[3rem]">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-tech-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;