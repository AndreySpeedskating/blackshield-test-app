import { FC, SVGProps } from 'react';

const Cross: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.99998 8.70711L14.7175 15.4246L15.4246 14.7175L8.70709 8L15.4246 1.28248L14.7175 0.575378L7.99998 7.29289L1.28247 0.575379L0.575363 1.28249L7.29288 8L0.575363 14.7175L1.28247 15.4246L7.99998 8.70711Z"
      fill={props?.fill || '#9d9d9d'}
    />
  </svg>
);

export default Cross;
