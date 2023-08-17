import { useState } from 'react';
import { clsx } from 'clsx';
import { Skill } from '../../interfaces';

interface CharacterSkillsProps {
  skills: Skill[];
}

const CharacterSkills = ({ skills }: CharacterSkillsProps): JSX.Element => {
  const [hoveredSkillId, setHoveredSkillId] = useState<number | null>(null);

  const onMouseHover = (skill: Skill) => {
    setHoveredSkillId(skill.id);
  };

  const onMouseLeave = () => {
    setHoveredSkillId(null);
  };

  return (
    <>
      <div className='flex flex-col justify-start items-center gap-10 mx-10'>
        {skills.map((skill) => {
          return (
            <div
              key={skill.id}
              onMouseEnter={() => onMouseHover(skill)}
              onMouseLeave={() => onMouseLeave()}
              className={clsx(
                'w-20 h-16 bg-pink rounded-sm transition-all group | hover:scale-110 ',
                skill.id >= 1 && skill.id <= 4 ? 'skew-x-12' : '-skew-x-12'
              )}
            >
              <div
                className={clsx(
                  'absolute -inset-2 rounded blur opacity-75 transition duration-100  | group-hover:opacity-100',
                  hoveredSkillId === skill.id && 'bg-pink'
                )}
              />
              <div
                className={clsx(
                  'flex justify-center items-center w-20 h-16 bg-violet rounded-sm  -translate-y-2 ',
                  skill.id >= 1 && skill.id <= 4
                    ? '-translate-x-2'
                    : 'translate-x-2'
                )}
              >
                <p className='text-turquoise text-xl'>{skill.id}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CharacterSkills;
