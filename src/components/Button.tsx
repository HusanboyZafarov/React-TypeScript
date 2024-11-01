import { ReactNode } from 'react';

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
    <button className={'btn btn-' + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
