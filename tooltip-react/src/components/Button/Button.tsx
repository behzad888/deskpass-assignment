import {ForwardedRef, forwardRef, MouseEventHandler} from 'react';
import 'assets/elements.button.scss';

type ButtonType = {
  variant?: 'ghost' | 'strong';
  type?: 'button' | 'submit';
  onClick?: MouseEventHandler;
  children?: React.ReactNode | string;
  className?: string;
  forawardedRef?: ForwardedRef<HTMLButtonElement>;
};
function ButtonComponent({
  type,
  variant,
  children,
  onClick,
  className,
  forawardedRef,
}: ButtonType) {
  return (
    <button
      type={type}
      ref={forawardedRef}
      className={'de-btn de-btn--' + variant + ' ' + className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

ButtonComponent.defaultProps = {
  variant: 'strong',
  type: 'button',
  className: '',
};

export default forwardRef<HTMLButtonElement, ButtonType>((props, forawardedRef) => {
  return <ButtonComponent {...props} forawardedRef={forawardedRef} />;
});
