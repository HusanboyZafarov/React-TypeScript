import { ReactNode } from 'react';

interface AlertProps {
  children: ReactNode;
  color: string;
  onChangeVisible: () => void;
}

const Alert = ({ children, color, onChangeVisible }: AlertProps) => {
  return (
    <div
      className={'alert alert-dismissible fade show alert-' + color}
      role='alert'
    >
      My alert
      <button
        type='button'
        className='btn-close'
        data-bs-dismiss='alert'
        aria-label='Close'
        onClick={onChangeVisible}
      ></button>
    </div>
  );
};

export default Alert;
