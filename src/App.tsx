import Character from './components/character/Character';
import Tabs from './components/tabs/Tabs';

const App = () => {
  return (
    <div className='w-full h-screen bg-black flex justify-center items-center p-16'>
      <div className='flex flex-col md:flex-row items-start gap-16 rounded-xl h-full'>
        <Character />
        <Tabs />
      </div>
    </div>
  );
};

export default App;
