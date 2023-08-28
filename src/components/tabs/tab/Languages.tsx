import HtmlIcon from '../../icons/HtmlIcon';
import JavaScript from '../../icons/JavaScript';
import NextJS from '../../icons/NextJS';
import NodeJS from '../../icons/NodeJS';
import React from '../../icons/React';
import TypeScript from '../../icons/TypeScript';
import ProgressBar from './ProgressBar';

const languages = [
  {
    id: 1,
    name: 'HTML',
    icon: <HtmlIcon />,
    level: 4,
  },
  {
    id: 2,
    name: 'JavaScript',
    icon: <JavaScript />,
    level: 3,
  },
  {
    id: 3,
    name: 'TypeScript',
    icon: <TypeScript />,
    level: 4,
  },
  {
    id: 4,
    name: 'React',
    icon: <React />,
    level: 4,
  },
  {
    id: 5,
    name: 'NextJS',
    icon: <NextJS />,
    level: 4,
  },
  {
    id: 6,
    name: 'NodeJS',
    icon: <NodeJS />,
    level: 1,
  },
];

const Languages = (): JSX.Element => {
  return (
    <div className='grid grid-cols-3 grid-rows-2 gap-x-6 gap-y-10'>
      {languages.map(({ name, level, icon }, index) => {
        return (
          <div key={index} className='flex flex-col text-blue gap-1'>
            <p className='text-sm'>{name}</p>
            <div key={index} className='flex gap-2'>
              {icon}
              <ProgressBar note={level} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Languages;
