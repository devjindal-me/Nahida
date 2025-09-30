import { SkillData, ElementalEffect } from '@/types';

export const skillTags = ['Catalyst', 'Dendro', 'DPS | Sub-DPS'];

export const skills: SkillData[] = [
  {
    id: 'normal-attack',
    icon: '/assets/normal-attack.webp',
    type: 'Normal attack',
    name: 'Akara',
    description: `Performs up to 4 attacks that deal Dendro DMG to opponents in front of her.
    
<span>Charged Attack</span>
Consumes a certain amount of Stamina to deal <strong>AoE Dendro DMG</strong> to opponents in front of her after a short casting time.

<span>Plunging Attack</span>
Calling upon the might of Dendro, Nahida plunges towards the ground from mid-air, damaging all opponents in her path. Deals <strong>AoE Dendro DMG</strong> upon impact with the ground.`,
  },
  {
    id: 'elemental-skill',
    icon: '/assets/elemental-skill.webp',
    type: 'Elemental Skill',
    name: 'All Schemes to Know',
    description: `<span>Press</span>
Sends forth karmic bonds of wood and tree from her side, dealing <strong>AoE Dendro DMG</strong> and marking up to 8 opponents hit with the Seed of Skandha. When held, this skill will trigger differently.

<span>Hold</span>
Enters Aiming Mode, which will allow you to select a limited number of opponents within a limited area. During this time, Nahida's resistance to interruption will be increased. When released, this skill deals <strong>Dendro DMG</strong> to these opponents and marks them with the Seed of Skandha. Aiming Mode will last up to 5s and can select a maximum of 8 opponents.

<span>Seed of Skandha</span>
Opponents who have been marked by the Seed of Skandha will be linked to one another up till a certain distance. After you trigger Elemental Reactions on opponents who are affected by the Seeds of Skandha or when they take DMG from Dendro Cores (including Burgeon and Hyperbloom DMG), Nahida will unleash Tri-Karma Purification on the opponents and all connected opponents, dealing <strong>Dendro DMG</strong> based on her ATK and Elemental Mastery. You can trigger at most 1 Tri-Karma Purification within a short period of time.`,
  },
];

export const elementalBurst: SkillData = {
  id: 'elemental-burst',
  icon: '/assets/normal-attack.webp',
  type: 'Elemental Burst',
  name: 'Illusory Heart',
  description: `Manifests the Court of Dreams and expands the Shrine of Maya.
When the Shrine of Maya field is unleashed, the following effects will be separately unleashed based on the Elemental Types present within the party.`,
};

export const elementalEffects: ElementalEffect[] = [
  {
    element: 'pyro',
    icon: '/assets/pyro.svg',
    description: 'Nahida remains within the Shrine of Maya, the DMG dealt by Tri-Karma Purification from "All Schemes to Know" is increased.',
  },
  {
    element: 'electro',
    icon: '/assets/electro.svg',
    description: 'While Nahida remains within the Shrine of Maya, the DMG dealt by Tri-Karma Purification from "All Schemes to Know" is increased.',
  },
  {
    element: 'hydro',
    icon: '/assets/hydro.svg',
    description: 'While Nahida remains within the Shrine of Maya, the DMG dealt by Tri-Karma Purification from "All Schemes to Know" is increased.',
  },
];

export const burstFootnote = `If there are at least 2 party members of the aforementioned Elemental Types present when the field is deployed, the aforementioned effects will be increased further.

Even if Nahida is not on the field, these bonuses will still take effect so long as party members are within the Shrine of Maya.`;
