import React from 'react';
import { IButton } from 'src/interfaces';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];

const COLORS = ['primary', 'red', 'blue', 'green'];

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}: IButton): JSX.Element => {
  const checkButtonStyle = STYLES.includes(buttonStyle!)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize!) ? buttonSize : SIZES[0];
  const checkButtonColor = COLORS.includes(buttonColor!) ? buttonColor : null;

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
