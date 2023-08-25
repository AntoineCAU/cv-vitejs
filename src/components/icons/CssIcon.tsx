import { Icon } from '../../interfaces';

const CssIcon = ({ color }: Icon) => {
  return (
    <svg
      className={`w-10 h-10 fill-current ${color}`}
      fill-rule='evenodd'
      viewBox='0 0 50 50'
    >
      <path d='m42 6-3 34-14 4-14-4L8 6ZM16.8 28h4l.098 2.5L25 31.898l4.102-1.398.296-4.5h-8.796l-.204-4h9.204l.296-4H16.102l-.301-4h18.3l-.5 8-.703 11.5L25 36.102 17.102 33.5Z' />
    </svg>
  );
};

export default CssIcon;
