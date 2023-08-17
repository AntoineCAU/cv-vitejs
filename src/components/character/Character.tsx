import CharacterSkills from './CharacterSkills';

const Character = (): JSX.Element => {
  const primaries = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const secondaries = [{ id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }];

  return (
    <div className='flex flex-col w-7/12 h-full gap-20'>
      <div className='text-white text-center pb-8'>
        <p className='bg-violet w-fit -skew-x-15 mx-auto px-4 py-2 rounded-sm text-xl'>
          Antoine Cau - Level 34 - Human - Frontend Developer
        </p>
      </div>
      <div className='flex justify-between'>
        <CharacterSkills skills={primaries} />
        <img className='w-1/4 rounded-xl' src='/ironman.png' />
        <CharacterSkills skills={secondaries} />
      </div>
    </div>
  );
};

export default Character;
