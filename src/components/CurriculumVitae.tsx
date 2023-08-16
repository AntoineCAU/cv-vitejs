import Character from './character/Character';
import Tabs from './tabs/Tabs';

const CurriculumVitae = () => {
  return (
    <div className='bg-violet rounded-xl w-2/3 h-[700px] shadow-2xl font-mono p-16'>
      <div className='flex items-start  gap-16 rounded-xl'>
        <Character />
        <Tabs />
      </div>
    </div>
  );
};

export default CurriculumVitae;
