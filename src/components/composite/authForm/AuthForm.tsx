import styles from "./AuthForm.module.scss";

const AuthForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.login}></div>
      <div className={styles.login__cover}></div>
      <div className={styles.signup}></div>
      <div className={styles.signup__cover}></div>
    </div>
  );
};

export default AuthForm;
