import Image from 'next/image';
import { SkillCard } from './SkillCard';
import { ElementalBurst } from './ElementalBurst';
import { skills, elementalBurst, elementalEffects, burstFootnote, skillTags } from '@/data/skills';

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h1 className="skills-h1">
          Skills <span>/ Passives</span>
        </h1>
        
        <ul className="skills-ul">
          {skillTags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}

        <ElementalBurst 
          burst={elementalBurst}
          effects={elementalEffects}
          footnote={burstFootnote}
        />

        <Image 
          className="skill-deco" 
          src="/assets/deco.svg" 
          alt="decoration" 
          width={200} 
          height={200} 
        />
      </div>
    </section>
  );
};
