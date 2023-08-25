import { useContext } from 'react';
import { ContentContext } from '../../contexts/ContentContext';
import SkillsTab from '../tabs/tab/SkillsTab';

const Content = () => {
  const { content } = useContext(ContentContext);

  console.log(content);

  return (
    <div className='w-full flex h-[700px] '>
      <div className='w-1/2 h-full'></div>
      <div className='border-l-2 border-red rounded' />
      <div className='w-1/2 h-full text-white px-8 text-xl'>
        {content === 'Abilities' && <SkillsTab />}
        {content === 'Soft Skills' && <div>Soft Skills</div>}
        {content === 'Hobbies' && <div>Hobbies</div>}
      </div>
    </div>
  );
};

export default Content;
