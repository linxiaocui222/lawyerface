import { NavItem, TimelineItem, ServiceItem, InsightPost, LegalTool } from './types';
import { Brain, Shield, Scale, FileCode, Globe, Database, Lock, Gavel, Sparkles, Search, FileText, Bot } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: '首页', href: '#hero' },
  { label: '擅长领域', href: '#expertise' },
  { label: 'AI工具箱', href: '#tools' },
  { label: '独特优势', href: '#whyme' },
  { label: '思想洞见', href: '#insights' },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: '2010 - 2016',
    title: '计算机科学与技术（人工智能方向）',
    org: '知名高校 本科/硕士/博士',
    description: '深入研究机器学习算法与神经网络，发表多篇SCI论文，奠定坚实的技术底层逻辑。',
    iconType: 'school',
  },
  {
    year: '2016 - 2021',
    title: '高级合规专家 / 技术专家',
    org: '阿里巴巴集团',
    description: '负责集团开源合规体系搭建、AI算法伦理审查及数据跨境合规项目。主导多个千万级用户产品的隐私架构设计。',
    iconType: 'work',
  },
  {
    year: '2021 - 至今',
    title: '执业律师 / 合伙人',
    org: '知名律师事务所',
    description: '将技术经验转化为法律服务能力，专注为科技企业提供全生命周期的法律解决方案。',
    iconType: 'law',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    title: 'AI法律与伦理合规',
    description: '为生成式AI应用提供从数据训练到算法备案的全流程合规服务。',
    icon: Brain,
    features: ['算法备案代理', '生成式AI合规体系', '训练数据版权审查', 'AI伦理风险评估'],
  },
  {
    title: '数据合规与隐私保护',
    description: '构建符合GDPR及个保法的企业数据合规体系，护航数据要素流通。',
    icon: Database,
    features: ['数据出境安全评估', '隐私政策制定', '企业合规审计', 'APP合规整改'],
  },
  {
    title: '开源软件治理',
    description: '国内少有的精通代码与许可证（License）的法律专家，解决开源污染风险。',
    icon: FileCode,
    features: ['开源许可证兼容性分析', 'SCA扫描结果解读', '企业开源策略制定', '开源侵权诉讼'],
  },
  {
    title: '科技知识产权',
    description: '深度理解技术原理，提供比传统律师更精准的知识产权保护方案。',
    icon: Shield,
    features: ['软著与专利布局', '技术秘密保护', '技术开发合同审查', '不正当竞争诉讼'],
  },
];

export const INSIGHTS_DATA: InsightPost[] = [
  {
    title: '生成式AI服务管理暂行办法深度解读',
    date: '2023-10-15',
    category: 'AI合规',
    summary: '从技术实现角度分析"算法备案"的具体难点与应对策略，探讨大模型企业如何平衡合规成本与创新速度。',
  },
  {
    title: '企业使用GPL协议代码的法律风险实务',
    date: '2023-09-22',
    category: '开源治理',
    summary: '传染性协议如何影响商业软件的分发？结合具体案例分析"Copyleft"机制在司法实践中的认定标准。',
  },
  {
    title: '数据出境新规下的企业合规路径',
    date: '2023-08-10',
    category: '数据合规',
    summary: '解析数据出境安全评估申报要点，为跨国企业及出海互联网公司提供实务操作指南。',
  },
];

export const LEGAL_TOOLS_DATA: LegalTool[] = [
  {
    name: 'CoCounsel',
    description: '由Casetext开发（现属Thomson Reuters），被称为"AI法律助手"，擅长文件审查、法律检索和证词分析。',
    category: '法律检索 / 文书审查',
    url: 'https://casetext.com/cocounsel',
    icon: Search,
  },
  {
    name: 'Spellbook',
    description: '嵌入Microsoft Word的AI助手，专为起草和审查合同设计，能够快速生成条款并提示风险。',
    category: '合同起草',
    url: 'https://www.spellbook.legal/',
    icon: FileText,
  },
  {
    name: '幂律智能 (PowerLaw)',
    description: '国内领先的法律AI工具，专注于智能合同审查与管理，深耕中文法律语义理解。',
    category: '合同审查 (中文)',
    url: 'https://www.powerlaw.ai/',
    icon: Shield,
  },
  {
    name: 'Harvey AI',
    description: '基于OpenAI GPT-4构建的顶级法律AI平台，主要服务于大型律所，处理复杂的监管分析与诉讼策略。',
    category: '综合法律AI',
    url: 'https://www.harvey.ai/',
    icon: Brain,
  },
  {
    name: 'ChatLaw',
    description: '北大团队开发的中文法律大模型，针对中国法律法规进行微调，适合基础法律咨询与检索。',
    category: '法律问答',
    url: 'https://chatlaw.cloud/',
    icon: Bot,
  },
  {
    name: 'Lin AI Compliance',
    description: '【即将上线】我自主研发的开源合规快速筛查工具，基于大模型快速识别代码库中的License冲突风险。',
    category: '自研工具',
    url: '#',
    icon: Sparkles,
    isComingSoon: true,
    isSelfDeveloped: true
  }
];