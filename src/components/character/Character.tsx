import CharacterSkills from './CharacterSkills';

const Character = (): JSX.Element => {
  const primaries = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const secondaries = [{ id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }];

  return (
    <div className='flex flex-col gap-20 w-1/2'>
      <div>
        <p className='w-fit bg-violet mx-auto px-4 py-2 rounded-sm text-xl text-white text-center'>
          Antoine Cau - Human level 34
        </p>
        <p className='w-fit mx-auto px-4 py-2 rounded-sm text-xl text-turquoise text-center animate-[colors_infinite]'>
          Frontend Developer
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
