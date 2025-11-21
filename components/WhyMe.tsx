import React from 'react';
import { Terminal, ShieldCheck, Languages, Zap } from 'lucide-react';

const WhyMe: React.FC = () => {
  return (
    <section id="whyme" className="py-24 bg-tech-900 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            为什么选择 <span className="text-tech-accent">林晓翠律师</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: Terminal,
              title: "精通技术语言",
              desc: "能直接阅读代码，理解技术架构，无需技术人员二次翻译。",
              color: "text-green-400"
            },
            {
              icon: ShieldCheck,
              title: "大厂实战经验",
              desc: "亲历阿里巴巴合规体系从0到1搭建，拒绝纸上谈兵。",
              color: "text-blue-400"
            },
            {
              icon: Languages,
              title: "双语沟通桥梁",
              desc: "在CTO与法务总监之间，我是最高效的“翻译官”。",
              color: "text-amber-400"
            },
            {
              icon: Zap,
              title: "前沿领域洞察",
              desc: "持续追踪AI大模型、Web3等最前沿技术的法律动态。",
              color: "text-purple-400"
            }
          ].map((item, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-xl text-center hover:-translate-y-2 transition-transform duration-300">
              <div className={`w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-4 ${item.color}`}>
                <item.icon size={32} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;