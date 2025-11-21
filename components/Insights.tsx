import React from 'react';
import { ArrowUpRight, Calendar, Tag } from 'lucide-react';
import { INSIGHTS_DATA } from '../constants';

const Insights: React.FC = () => {
  return (
    <section id="insights" className="py-24 bg-tech-900 relative border-t border-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              思想 <span className="text-purple-400">洞见</span>
            </h2>
            <p className="text-slate-400 max-w-xl">
              分享关于AI合规、开源治理与数据法律前沿的深度观察与实务经验。
            </p>
          </div>
          <a href="#" className="text-slate-400 hover:text-law-gold flex items-center gap-2 text-sm font-medium transition-colors">
            查看更多文章 <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {INSIGHTS_DATA.map((post, index) => (
            <article key={index} className="group flex flex-col bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{post.date}</span>
                  </div>
                  <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                  <div className="flex items-center gap-1 text-tech-accent">
                    <Tag size={12} />
                    <span>{post.category}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-law-gold transition-colors leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  {post.summary}
                </p>
                
                <div className="mt-auto pt-6 border-t border-slate-700/50 flex items-center text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                  阅读全文
                  <ArrowUpRight size={16} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;