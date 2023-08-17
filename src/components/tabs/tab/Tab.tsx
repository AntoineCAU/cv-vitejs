import { clsx } from 'clsx';

interface TabProps {
  tabId: number;
  tabName: string;
  displayTab: number;
  setDisplayTab: React.Dispatch<React.SetStateAction<number>>;
}

const Tab = ({
  tabId,
  tabName,
  displayTab,
  setDisplayTab,
}: TabProps): JSX.Element => {
  return (
    <div className='relative group'>
      <div
        className={clsx(
          'absolute -inset-2 rounded blur -skew-x-15 opacity-75 transition duration-100 | group-hover:opacity-100',
          displayTab === tabId && 'bg-turquoise scale-110'
        )}
      />
      <div
        id={`tab-${tabId}`}
        className={clsx(
          'transform -skew-x-15 text-xl px-4 py-2 transition duration-100 rounded-sm cursor-pointer',
          displayTab === tabId
            ? 'bg-turquoise text-pink scale-110 | hover:text-pink'
            : 'bg-violet text-white | hover:bg-pink/50'
        )}
        onClick={() => setDisplayTab(tabId)}
      >
        {tabName}
      </div>
    </div>
  );
};

export default Tab;
