export interface IButton {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  buttonStyle?: string | undefined;
  buttonSize?: string | undefined;
  buttonColor?: string | undefined;
}
