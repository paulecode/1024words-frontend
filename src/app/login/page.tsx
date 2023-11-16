import React from "react";
import AuthForm from "@/components/composite/authForm/AuthForm";
import styles from "./page.module.scss";

export default function Login() {
  return (
    <div className={styles.container}>
      <AuthForm />
    </div>
  );
}
