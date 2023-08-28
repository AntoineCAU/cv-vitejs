import { clsx } from 'clsx';

interface ProgressBarProps {
  note: number;
}

const ProgressBar = ({ note }: ProgressBarProps): JSX.Element => {
  const filledPoints = Math.round((note / 5) * 5);

  return (
    <div className='flex items-center gap-2'>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={clsx(
            'w-4 h-6 rounded-sm',
            index < filledPoints ? 'bg-green' : 'bg-gray-300'
          )}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
