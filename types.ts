import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  org: string;
  description: string;
  iconType: 'school' | 'work' | 'law';
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface InsightPost {
  title: string;
  date: string;
  category: string;
  summary: string;
}

export interface ChatMessage {
  role: 'user' | 'model' | 'system';
  text: string;
  timestamp: number;
}

export interface LegalTool {
  name: string;
  description: string;
  category: string;
  url: string;
  icon: LucideIcon;
  isComingSoon?: boolean;
  isSelfDeveloped?: boolean;
}