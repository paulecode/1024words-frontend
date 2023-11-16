import styles from "./Bodies.module.scss";

export const Body01: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <p className={styles.body01}>{children}</p>;
};

export const Body02: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <p className={styles.body02}>{children}</p>;
};

export const Body01Compact: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <p className={styles.body01Compact}>{children}</p>;
};

export const Body02Compact: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <p className={styles.body02Compact}>{children}</p>;
};

export const HelperText: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <p className={styles.helperText}>{children}</p>;
};

export const HelperTextBold: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <p className={styles.helperTextBold}>{children}</p>;
};

export const Label: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <p className={styles.label}>{children}</p>;
};

export const LabelBold: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <p className={styles.labelBold}>{children}</p>;
};
