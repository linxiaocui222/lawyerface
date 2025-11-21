import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Reset after 2 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 border-t border-slate-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              预约 <span className="blue-gradient-text">专业咨询</span>
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              如果您正在面对AI算法备案、数据跨境传输或开源软件合规方面的挑战，欢迎联系我。
              我们将用"技术+法律"的双重视角为您提供最切实的解决方案。
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-tech-accent flex-shrink-0">
                  <Mail />
                </div>
                <div>
                  <h4 className="text-white font-bold">Email</h4>
                  <p className="text-slate-400">contact@linxiaocui.law</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-tech-accent flex-shrink-0">
                  <Phone />
                </div>
                <div>
                  <h4 className="text-white font-bold">工作电话</h4>
                  <p className="text-slate-400">+86 10-8888-9999 (预约制)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-tech-accent flex-shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h4 className="text-white font-bold">办公地址</h4>
                  <p className="text-slate-400">北京市朝阳区CBD中央商务区法律科技大厦</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-tech-accent hover:text-tech-900 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-tech-accent hover:text-tech-900 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative min-h-[500px] transition-all duration-300">
            {isSubmitted ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 animate-in fade-in zoom-in duration-300 rounded-2xl bg-slate-900/95 backdrop-blur-sm">
                <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                  <CheckCircle2 className="w-14 h-14 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">提交成功</h3>
                <p className="text-slate-400">我们会尽快与您联系</p>
              </div>
            ) : (
              <form className="space-y-6 animate-in fade-in duration-300 h-full flex flex-col justify-center" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">姓名</label>
                    <input required type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-tech-accent focus:outline-none transition-colors" placeholder="您的称呼" />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">公司/机构</label>
                    <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-tech-accent focus:outline-none transition-colors" placeholder="所在企业" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">联系方式</label>
                  <input required type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-tech-accent focus:outline-none transition-colors" placeholder="手机号或邮箱，方便我们回复您" />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">咨询类型</label>
                  <select className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-tech-accent focus:outline-none transition-colors">
                    <option>AI合规 / 算法备案</option>
                    <option>数据出境 / 隐私保护</option>
                    <option>开源软件治理</option>
                    <option>技术合同 / 知识产权</option>
                    <option>其他</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">需求描述</label>
                  <textarea required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-tech-accent focus:outline-none transition-colors h-32" placeholder="请简述您的法律需求..."></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-tech-accent text-tech-900 font-bold rounded-lg hover:bg-sky-300 transition-colors mt-auto">
                  提交预约申请
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;