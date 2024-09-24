import { LucideIcon } from "lucide-react";
export type Icon = LucideIcon;

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  mailSupport: string;
  keywords: string[];
  links: {
    twitter: string;
    github: string;
  };
};

export type textComponents = {
  heading: string;
  desc: string;
  ctas?: boolean;
  now?: any;
};

export type EmailData = {
  to: string;
  subject: string;
  html?: string;
  reactElm?: any;
  text?: string;
};

export type menuItem = {
  title: string;
  href: string;
  disabled?: boolean;
  authorizeOnly?: UserRole;
  icon?: string;
};
