const HeaderMenu = () => {
  return (
    <div className='w-full h-14 flex justify-between'>
      <div className='flex items-center gap-10 px-8 uppercase'>
        <div className='flex flex-col text-blue gap-2 uppercase'>
          <div className='flex gap-2'>
            <p className='text-lg text-neon'>34</p>
            <div className=''>
              <p className='text-sm pt-0.5'>Lvl</p>
              <div className='w-[80px] border-b-2 border-blue/25 bg-blue/25' />
            </div>
          </div>
        </div>
        <div className='flex flex-col text-green gap-2 uppercase'>
          <div className='flex gap-2'>
            <p className='text-lg text-neon'>4</p>
            <div className=''>
              <p className='text-sm pt-0.5'>Exp</p>
              <div className='w-[80px] border-b-2 border-green/25 bg-green/25' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-10 px-8 uppercase'>
        <div className='flex items-center gap-2 text-red'>
          <p className='text-lg icon-neon'>:::</p>
          <p className='text-red  hover:cursor-pointer  text-sm'>Abilities</p>
        </div>
        <div className='flex items-center gap-2 text-red'>
          <p className='text-lg icon-neon'>.::</p>
          <p className='text-red  hover:cursor-pointer  text-sm'>Soft Skills</p>
        </div>
        <div className='flex items-center gap-2 text-red'>
          <p className='text-lg icon-neon'>.:.</p>
          <p className='text-red  hover:cursor-pointer  text-sm'>Hobbies</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
