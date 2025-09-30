import Image from 'next/image';
import { SkillData } from '@/types';

interface SkillCardProps {
  skill: SkillData;
}

export const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div className="skill-container">
      <Image 
        className="skill-icon" 
        src={skill.icon} 
        alt={skill.type} 
        width={80} 
        height={80}
      />
      <div className="skill-info">
        <span className="skill-type">{skill.type}</span>
        <h2 className="skill-name">{skill.name}</h2>
        <p 
          className="skill-p"
          dangerouslySetInnerHTML={{ __html: skill.description }}
        />
      </div>
    </div>
  );
};
