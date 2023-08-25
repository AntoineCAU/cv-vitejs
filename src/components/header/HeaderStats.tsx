interface HeaderStatsProps {
  value: string;
  label: string;
  textColor: string;
  backgroundColor: string;
}

const HeaderStats = ({
  value,
  label,
  textColor,
  backgroundColor,
}: HeaderStatsProps) => {
  return (
    <div className={`flex flex-col gap-2 uppercase ${textColor}`}>
      <div className='flex gap-2'>
        <p className='text-lg text-neon'>{value}</p>
        <div>
          <p className='text-sm pt-0.5'>{label}</p>
          <div className={`w-[80px] h-0.5 ${backgroundColor}`} />
        </div>
      </div>
    </div>
  );
};

export default HeaderStats;
