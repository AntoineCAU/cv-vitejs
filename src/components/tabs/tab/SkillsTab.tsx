import { languages, design, utils } from '../../../assets/skills';
import SkillsContentTab from './SkillsContentTab';

const SkillsTab = (): JSX.Element => {
  return (
    <div className='flex flex-col gap-8 w-full'>
      <SkillsContentTab technos={languages} />
      <SkillsContentTab technos={design} />
      <SkillsContentTab technos={utils} />
    </div>
  );
};

export default SkillsTab;
