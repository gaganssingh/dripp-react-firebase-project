import { useState } from "react";

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase";
import Button from "../Button/Button.component";
import FormInput from "../FormInput/FormInput.component";
import "./SignInForm.styles.scss";

const SignInForm = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      setFormFields({
        email: "",
        password: "",
      });
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect email or password");
          break;
        case "auth/user-not-found":
          alert("Incorrect email or password");
          break;
        default:
          console.error(error);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in below</span>
      <form onSubmit={handleSignIn}>
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

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
