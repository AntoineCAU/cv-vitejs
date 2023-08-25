import { Icon } from '../../interfaces';

const HtmlIcon = ({ color }: Icon) => {
  return (
    <svg className={`w-10 h-10 fill-current ${color}`} viewBox='0 0 50 50'>
      <path d='m9 7 3 34 14 4 14-4 3-34H9zm24.76 28-7.77 2-7.76-2-.39-5h3.86l.18 2 4.12.62 4.17-.62.41-5H17.59l.96-12H34l.7 6H31l-.23-2h-8.36l-.32 4h12.66l-.99 12z' />
    </svg>
  );
};

export default HtmlIcon;
