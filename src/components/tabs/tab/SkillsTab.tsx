// import { languages, design, utils } from '../../../assets/skills';
// import SkillsContentTab from './SkillsContentTab';

import Languages from './Languages';

const SkillsTab = (): JSX.Element => {
  return (
    <div className='flex flex-col gap-2 w-full'>
      <Languages />
      {/* <SkillsContentTab technos={languages} /> */}
      {/* <SkillsContentTab technos={design} />
      <SkillsContentTab technos={utils} /> */}
    </div>
  );
};

export default SkillsTab;
