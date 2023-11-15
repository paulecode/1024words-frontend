"use client";
import {
  Heading01,
  Heading04,
} from "@/components/essentials/headings/Headings";
import styles from "./AuthForm.module.scss";
import {
  TextField,
  TextFieldType,
} from "@/components/essentials/textFields/TextFields";
import {
  PrimaryButton,
  TextButton,
} from "@/components/essentials/buttons/Buttons";
import { useState } from "react";
import { Body01 } from "@/components/essentials/textBodies/Bodies";

const AuthForm: React.FC = () => {
  const [signupMode, setSignupMode] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <Heading04>Sign up</Heading04>
        <form>
          <TextField
            label="Email"
            placeholder="john.doe@gmail.com"
            type={TextFieldType.email}
            valid={true}
          />
          <TextField
            label="Password"
            placeholder="********"
            type={TextFieldType.password}
            valid={true}
          />
          <div className={styles.login_button}>
            <PrimaryButton label="Sign up" />
          </div>
        </form>
        <TextButton
          label="Already have an account?"
          onClick={() => setSignupMode(!signupMode)}
        />
      </div>
      <div className={styles.login}>
        <Heading04>Log in</Heading04>
        <form>
          <TextField
            label="Email"
            placeholder="john.doe@gmail.com"
            type={TextFieldType.email}
            valid={true}
          />
          <TextField
            label="Password"
            placeholder="********"
            type={TextFieldType.password}
            valid={true}
          />
          <div className={styles.login_button}>
            <PrimaryButton label="Log in" />
          </div>
        </form>
        <TextButton
          label="Don't have an account?"
          onClick={() => setSignupMode(!signupMode)}
        />
      </div>
      <div
        className={
          signupMode ? styles.cover : `${styles.cover} ${styles.signup_mode}`
        }
      >
        <Heading01>1024words</Heading01>
        <Body01>Start learning now</Body01>
      </div>
    </div>
  );
};

export default AuthForm;
