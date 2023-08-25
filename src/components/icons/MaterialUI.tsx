import { Icon } from '../../interfaces';

const MaterialUI = ({ color }: Icon) => {
  return (
    <svg className={`w-10 h-10 fill-current ${color}`} viewBox='0 0 256 256'>
      <g>
        <path d='m5.333 26.667 32 21.333v106.667l-32-21.334zM250.667 106.667l-32 21.333v69.333l32-21.333zM250.667 32l-32 21.333v37.334l32-21.334zM186.667 26.667l-32 21.333v106.667l32-21.334z' />
        <path d='M5.333 64 96 122.667V85.333L5.333 26.667zM186.667 64 96 122.667V85.333l90.667-58.666zM186.667 138.667 96 197.333V160l90.667-58.667zM250.667 181.333 160 240v-37.333L250.667 144z' />
        <path d='M160 201.413 96 160v37.333l64 41.414z' />
      </g>
    </svg>
  );
};

export default MaterialUI;
