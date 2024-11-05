import { ReactNode } from 'react';
import styles from './Button.module.css';

interface Props {
  children: ReactNode;
  color?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'warning'
    | 'success'
    | 'info'
    | 'dark'
    | 'light';
  onClick: () => void;
}

const Button = ({ children, color = 'primary', onClick }: Props) => {
  return (
    <button
      className={[styles.btn, styles['btn-' + color]].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
