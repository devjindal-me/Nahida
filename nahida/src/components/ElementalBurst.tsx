import Image from 'next/image';
import { SkillData, ElementalEffect } from '@/types';

interface ElementalBurstProps {
  burst: SkillData;
  effects: ElementalEffect[];
  footnote: string;
}

export const ElementalBurst = ({ burst, effects, footnote }: ElementalBurstProps) => {
  return (
    <div className="skill-container">
      <Image 
        className="skill-icon" 
        src={burst.icon} 
        alt={burst.type} 
        width={80} 
        height={80}
      />
      <div className="skill-info">
        <span className="skill-type">{burst.type}</span>
        <h2 className="skill-name">{burst.name}</h2>
        <p className="skill-p">
          {burst.description}
          <br /><br />
          {effects.map((effect) => (
            <span key={effect.element}>
              <Image 
                className={effect.element} 
                src={effect.icon} 
                alt={effect.element} 
                width={20} 
                height={20} 
              />
              <span className={`${effect.element}-span`}>
                <strong>{effect.element}: </strong>
                {effect.description}
              </span>
              <br />
            </span>
          ))}
          <br />
          {footnote}
        </p>
      </div>
    </div>
  );
};
