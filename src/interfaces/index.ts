export interface IButton {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  buttonStyle?: string | undefined;
  buttonSize?: string | undefined;
  buttonColor?: string | undefined;
}

export interface IOptions {
  lightBg: boolean;
  topLine: string;
  lightText: boolean;
  lightTextDesc: boolean;
  headline: string;
  description: string;
  buttonLabel: string;
  src: string;
  alt: string;
  imgStart: string;
}
