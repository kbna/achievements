import { FC, forwardRef, ReactNode } from 'react';
import './container.scss';

export interface IContainerPaddingProps {
  paddingTop?: boolean;
  paddingRight?: boolean;
  paddingBottom?: boolean;
  paddingLeft?: boolean;
}
export interface IContainerProps extends IContainerPaddingProps {
  children: ReactNode;
}

const Container = forwardRef<HTMLDivElement, IContainerProps>(
  ({ children, paddingTop = false, paddingRight = true, paddingBottom = false, paddingLeft = true }, ref) => {
    const containerClasses = ['container'];

    if (paddingTop) containerClasses.push('container--padding-top');
    if (paddingRight) containerClasses.push('container--padding-right');
    if (paddingBottom) containerClasses.push('container--padding-bottom');
    if (paddingLeft) containerClasses.push('container--padding-left');

    return <div className={containerClasses.join(' ')}>{children}</div>;
  }
);

export default Container;
