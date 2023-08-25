import HeaderLinks from './HeaderLinks';
import HeaderStats from './HeaderStats';

const HeaderMenu = () => {
  return (
    <div className='w-full h-14 flex justify-between'>
      <div className='flex items-center gap-10 px-8 uppercase'>
        <HeaderStats
          value='34'
          label='lvl'
          textColor='text-blue'
          backgroundColor='bg-blue'
        />
        <HeaderStats
          value='4'
          label='exp'
          textColor='text-green'
          backgroundColor='bg-green'
        />
      </div>
      <div className='flex items-center gap-10 px-8 uppercase'>
        <HeaderLinks icon=':::' label='Abilities' />
        <HeaderLinks icon='::.' label='Soft Skills' />
        <HeaderLinks icon=':..' label='Hobbies' />
      </div>
    </div>
  );
};

export default HeaderMenu;
