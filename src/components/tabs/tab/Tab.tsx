import { clsx } from 'clsx';

interface TabProps {
  tabId: number;
  tabName: string;
  displayTab: number;
  setDisplayTab: React.Dispatch<React.SetStateAction<number>>;
}

const Tab = ({ tabId, tabName, displayTab, setDisplayTab }: TabProps) => {
  return (
    <div className='relative group'>
      <div
        className={clsx(
          'absolute -inset-2 rounded blur -skew-x-15 opacity-75 group-hover:opacity-100 transition duration-100',
          displayTab === tabId &&
            'bg-turquoise  groupe-hover:duration-200 animate-tilt'
        )}
      />
      <div
        id={`tab-${tabId}`}
        className={clsx(
          'transform -skew-x-15 text-xl px-4 py-2  transition duration-100 rounded-sm',
          displayTab === tabId
            ? 'bg-turquoise text-pink hover:bg-turquoise hover:text-pink'
            : 'bg-violet text-white hover:bg-pink/50'
        )}
        onClick={() => setDisplayTab(tabId)}
      >
        {tabName}
      </div>
    </div>
  );
};

export default Tab;
