interface TabProps {
  tabId: number;
  tabName: string;
  displayTab: number;
  setDisplayTab: React.Dispatch<React.SetStateAction<number>>;
}

const Tab = ({ tabId, tabName, setDisplayTab }: TabProps) => {
  return (
    <div
      className='bg-black px-4 py-2 transform -skew-x-15'
      onClick={() => setDisplayTab(tabId)}
    >
      {tabName}
    </div>
  );
};

export default Tab;
