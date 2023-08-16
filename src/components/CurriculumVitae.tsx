import Character from './character/Character';
import Tabs from './tabs/Tabs';

const CurriculumVitae = () => {
  return (
    <div className='bg-violet rounded-xl w-2/3 shadow-2xl font-mono p-8'>
      <div className='flex gap-8 rounded-xl '>
        <Character />
        <div className='border-turquoise border-2 rounded' />
        <Tabs />
      </div>
    </div>
  );
};

export default CurriculumVitae;
