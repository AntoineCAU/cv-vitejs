import ProgressBar from './ProgressBar';

interface Techno {
  id: number;
  image: string;
  level: number;
}

interface SkillsContentTabProps {
  technos: Techno[];
}

const SkillsContentTab = ({ technos }: SkillsContentTabProps): JSX.Element => {
  return (
    <div className='grid grid-cols-2 grid-rows-2'>
      {technos.map(({ id, image, level }) => {
        return (
          <div
            key={id}
            className='flex justify-center items-center gap-6 text-turquoise pb-2'
          >
            <img
              src={`/icons/${image}`}
              className='w-10 h-10 transition-all | hover:scale-110'
            />
            <ProgressBar note={level} />
          </div>
        );
      })}
    </div>
  );
};

export default SkillsContentTab;
