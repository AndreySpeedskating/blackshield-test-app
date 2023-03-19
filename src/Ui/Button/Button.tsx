import { FC } from 'react';

import styles from './styles.module.css';

type PropTypes = {
  disabled?: boolean;
  onClick?: () => void;
  title?: string;
};

const Button: FC<PropTypes> = ({ onClick, title, disabled }) => (
  <button className={styles['button']} disabled={disabled} onClick={onClick} aria-label="button">
    {title}
  </button>
);

export default Button;
