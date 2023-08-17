interface ProgressBarProps {
  note: number;
}

const ProgressBar = ({ note }: ProgressBarProps): JSX.Element => {
  const filledPoints = Math.round((note / 5) * 5);

  return (
    <div className='flex items-center gap-2 -skew-x-12'>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`w-6 h-6 rounded-sm ${
            index < filledPoints ? 'bg-violet' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;