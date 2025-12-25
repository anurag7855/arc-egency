import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  title: string;
  description?: string;
  icon?: LucideIcon;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  subtext?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Challenge {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Solution {
  title: string;
  description: string;
  icon: LucideIcon;
}