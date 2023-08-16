import CharacterSkills from './CharacterSkills';

const Character = () => {
  const primaries = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const secondaries = [{ id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }];

  return (
    <div className='flex flex-col w-7/12'>
      <p className='flex-1 text-white text-center pb-8'>
        Antoine Cau - Level 100 - Human
      </p>
      <div className=' flex justify-between'>
        <CharacterSkills skills={primaries} />
        <img className='rounded-xl w-1/4' src='/ironman.png' />
        <CharacterSkills skills={secondaries} />
      </div>
    </div>
  );
};

export default Character;
