import { FC, ReactNode } from 'react';
import './title.scss';

interface ITitle {
  children: ReactNode;
  className?: string;
}
const Title: FC<ITitle> = ({ children, className }) => {
  const classNames = ['title'];
  if (className) classNames.push(className);

  return <h3 className={classNames.join(' ')}>{children}</h3>;
};

export default Title;
