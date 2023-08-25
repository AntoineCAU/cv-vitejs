import HeaderMenu from './HeaderMenu';

const Header = () => {
  return (
    <div className='px-10'>
      <HeaderMenu />
      <div className='flex items-center -translate-y-6'>
        <div className='w-full border-b-2 border-red rounded' />
        <div className='text-blue uppercase text-xl text-center tracking-widest px-4 -translate-y-4'>
          <p className='text-neon text-lg'>Developer</p>
          <p className='text-sm'>A.cau</p>
        </div>
        <div className='w-full max-h-0 border-b-2 border-red rounded' />
      </div>
    </div>
  );
};

export default Header;
