import CssIcon from '../../icons/CssIcon';
import HtmlIcon from '../../icons/HtmlIcon';
import JavaScript from '../../icons/JavaScript';
import NextJS from '../../icons/NextJS';
import NodeJS from '../../icons/NodeJS';
import React from '../../icons/React';
import TypeScript from '../../icons/TypeScript';
import Tailwind from '../../icons/Tailwind';
import ProgressBar from './ProgressBar';
import MaterialUI from '../../icons/MaterialUI';
import Bootstrap from '../../icons/Bootstrap';
import Git from '../../icons/Git';
import Github from '../../icons/Github';
import Gitlab from '../../icons/Gitlab';
import Docker from '../../icons/Docker';

const Languages = (): JSX.Element => {
  return (
    <div className='grid grid-cols-2 grid-rows-2'>
      <div className='flex justify-center items-center gap-2 pb-2'>
        <HtmlIcon color='text-yellow' />
        <ProgressBar note={1} />
      </div>
      <div className='flex justify-center items-center gap-2 pb-2'>
        <CssIcon color='text-yellow' />
        <ProgressBar note={1} />
      </div>
      <div className='flex justify-center items-center gap-2 pb-2'>
        <JavaScript color='text-yellow' />
        <ProgressBar note={1} />
      </div>
      <div className='flex justify-center items-center gap-2 pb-2'>
        <TypeScript color='text-yellow' />
        <ProgressBar note={1} />
      </div>
      <div className='flex justify-center items-center gap-2 pb-2'>
        <React color='text-yellow' />
        <ProgressBar note={1} />
      </div>
      <div className='flex justify-center items-center gap-2 pb-2'>
        <NextJS color='text-yellow' />
        <ProgressBar note={1} />
      </div>
      <div className='flex justify-center items-center gap-2 pb-2'>
        <NodeJS color='text-yellow' />
        <ProgressBar note={1} />
      </div>
      <div className='flex justify-center items-center gap-2 pb-2'>
        <Tailwind color='text-yellow' />
        <ProgressBar note={1} />
      </div>
      <div className='flex justify-center items-center gap-2 pb-2'>
        <MaterialUI color='text-yellow' />
        <ProgressBar note={1} />
      </div>
      <div className='flex justify-center items-center gap-2 pb-2'>
        <Bootstrap color='text-yellow' />
        <ProgressBar note={1} />
      </div>
      <div className='flex justify-center items-center gap-2 pb-2'>
        <Git color='text-yellow' />
        <ProgressBar note={1} />
      </div>
      <div className='flex justify-center items-center gap-2 pb-2'>
        <Github color='text-yellow' />
        <ProgressBar note={1} />
      </div>
      <div className='flex justify-center items-center gap-2 pb-2'>
        <Gitlab color='text-yellow' />
        <ProgressBar note={1} />
      </div>
      <div className='flex justify-center items-center gap-2 pb-2'>
        <Docker color='text-yellow' />
        <ProgressBar note={1} />
      </div>
    </div>
  );
};

export default Languages;
