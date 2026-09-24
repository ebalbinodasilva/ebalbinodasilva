export interface Metric { label: string; value: string; detail: string; }
export interface Profile { name: string; role: string; summary: string; metrics: Metric[]; activity: string; }
export interface Project { name: string; focus: string; technologies: string[]; status: string; href?: string; }
export interface StackArea { area: string; title: string; technologies: string; detail: string; }
