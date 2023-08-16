import { useState } from 'react';
import SkillsTab from './tab/SkillsTab';
import SoftSkillsTab from './tab/SoftSkillsTab';
import HobbiesTab from './tab/HobbiesTab';
import Tab from './tab/Tab';

const Tabs = () => {
  const [displayTab, setDisplayTab] = useState(1);

  const tabs = [
    { id: 1, tabName: 'Skills' },
    { id: 2, tabName: 'Soft Skills' },
    { id: 3, tabName: 'Hobbies' },
  ];

  return (
    <>
      <div className='w-5/12 flex flex-col items-center gap-14'>
        <div className='flex gap-4'>
          {tabs.map(({ id, tabName }) => {
            return (
              <Tab
                key={id}
                tabId={id}
                tabName={tabName}
                displayTab={displayTab}
                setDisplayTab={setDisplayTab}
              />
            );
          })}
        </div>
        <div className='bg-turquoise  w-full h-full rotate-3 p-8 text-black'>
          {displayTab === 1 && <SkillsTab />}
          {displayTab === 2 && <SoftSkillsTab />}
          {displayTab === 3 && <HobbiesTab />}
        </div>
      </div>
    </>
  );
};

export default Tabs;
