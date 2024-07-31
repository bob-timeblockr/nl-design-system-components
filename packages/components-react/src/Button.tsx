import clsx from 'clsx';
import { ButtonHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import '@timeblockr/components-css/button/index.scss';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<ButtonProps>, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <button ref={ref} className={clsx('timeblockr-button', className)} {...restProps}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
