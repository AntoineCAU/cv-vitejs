import { Skill } from '../../interfaces';

interface CharacterSkillsProps {
  skills: Skill[];
}

const CharacterSkills = ({ skills }: CharacterSkillsProps): JSX.Element => {
  return (
    <div className='flex flex-col justify-end items-center gap-10 mx-10'>
      {skills.map(({ id }) => {
        return (
          <div className='flex justify-center items-center bg-violet rounded-sm w-20 h-16'>
            <p className='text-black'>{id}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterSkills;
