import { FC, ReactNode } from 'react';

import styles from './styles.module.css';

type PropTypes = {
  children: ReactNode | ReactNode[];
};

const FormContainer: FC<PropTypes> = ({ children }) => (
  <div className={styles['form-container']}>{children}</div>
);

export default FormContainer;
