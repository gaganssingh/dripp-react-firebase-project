import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  PayNowButton,
} from "./Button.styles";

const Button = ({ children, buttonType, ...otherProps }) => {
  if (buttonType === "google") {
    return <GoogleSignInButton {...otherProps}>{children}</GoogleSignInButton>;
  }
  if (buttonType === "inverted") {
    return <InvertedButton {...otherProps}>{children}</InvertedButton>;
  }
  if (buttonType === "paynow") {
    return <PayNowButton {...otherProps}>{children}</PayNowButton>;
  }

  return <BaseButton {...otherProps}>{children}</BaseButton>;
};

export default Button;
