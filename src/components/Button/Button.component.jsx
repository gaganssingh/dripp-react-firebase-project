import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./Button.styles";

const Button = ({ children, buttonType, ...otherProps }) => {
  if (buttonType === "google") {
    return <GoogleSignInButton {...otherProps}>{children}</GoogleSignInButton>;
  }
  if (buttonType === "inverted") {
    return <InvertedButton {...otherProps}>{children}</InvertedButton>;
  }

  return <BaseButton {...otherProps}>{children}</BaseButton>;
};

export default Button;
