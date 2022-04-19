import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import Button from "../Button/Button.component";
import FormInput from "../FormInput/FormInput.component";
import { SignUpFormContainer } from "./SignUpForm.styles";

const SignUpForm = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      setFormFields({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      }
      console.error(error.message);
    }
  };

  return (
    <SignUpFormContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with email</span>
      <form onSubmit={handleSignUp}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <Button>Sign Up</Button>
      </form>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
