export interface Specification {
  label: string;
  value: string;
}

export interface Product {
  name: string;
  tagline: string;
  description: string;
  specs: Specification[];
  image: string;
  href?: string;
}

export interface Pillar {
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Value {
  title: string;
  description: string;
}

export interface CompanyInfo {
  vision: string;
  missions: string[];
  story: string;
}

export interface NavLink {
  label: string;
  href: string;
}
