import Character from './components/character/Character';
import Tabs from './components/tabs/Tabs';

const App = () => {
  return (
    <div className='w-screen h-screen bg-black flex justify-start items-start p-16'>
      <div className='w-full flex flex-row gap-16 rounded-xl '>
        <Character />
        <Tabs />
      </div>
    </div>
  );
};

export default App;
