import { useContext } from 'react';
import { ContentContext, ContentType } from '../../contexts/ContentContext';
import clsx from 'clsx';

interface HeaderLinksProps {
  icon: string;
  label: string;
}

const HeaderLinks = ({ icon, label }: HeaderLinksProps) => {
  const { content, setContent } = useContext(ContentContext);

  return (
    <div
      className='h-full w-fit flex items-center gap-2 text-red cursor-pointer'
      onClick={() => setContent(label as ContentType)}
    >
      <p className='text-lg icon-neon'>{icon}</p>
      <p className={clsx('text-red text-sm', content === label && 'text-neon')}>
        {label}
      </p>
    </div>
  );
};

export default HeaderLinks;
