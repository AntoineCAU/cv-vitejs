import { Skill } from '../../interfaces';

interface CharacterSkillsProps {
  skills: Skill[];
}

const CharacterSkills = ({ skills }: CharacterSkillsProps): JSX.Element => {
  return (
    <div className='w-48 flex flex-col justify-end items-center gap-10'>
      {skills.map(({ id }) => {
        return (
          <div className='flex justify-center items-center bg-white rounded-xl w-20 h-16'>
            <p className='text-black'>{id}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterSkills;
