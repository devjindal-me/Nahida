export interface SkillData {
  id: string;
  icon: string;
  type: string;
  name: string;
  description: string;
}

export interface ElementalEffect {
  element: 'pyro' | 'electro' | 'hydro';
  icon: string;
  description: string;
}
