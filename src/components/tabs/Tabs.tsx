import { useState } from 'react';
import SkillsTab from './tab/SkillsTab';
import SoftSkillsTab from './tab/SoftSkillsTab';
import HobbiesTab from './tab/HobbiesTab';
import Tab from './tab/Tab';

const Tabs = (): JSX.Element => {
  const [displayTab, setDisplayTab] = useState(0);

  const tabs = [
    { tabName: 'Skills' },
    { tabName: 'Soft Skills' },
    { tabName: 'Hobbies' },
  ];

  return (
    <>
      <div className='w-5/12 flex flex-col items-center gap-20'>
        <div className='flex gap-4'>
          {tabs.map(({ tabName }, index) => {
            return (
              <Tab
                key={index}
                tabId={index}
                tabName={tabName}
                displayTab={displayTab}
                setDisplayTab={setDisplayTab}
              />
            );
          })}
        </div>
        <div className='bg-turquoise  w-full h-full  p-8 text-black rounded-sm'>
          {displayTab === 0 && <SkillsTab />}
          {displayTab === 1 && <SoftSkillsTab />}
          {displayTab === 2 && <HobbiesTab />}
        </div>
      </div>
    </>
  );
};

export default Tabs;
