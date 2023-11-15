import styles from "./Headings.module.scss";

export const Heading01: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <h1 className={styles.heading01}>{children}</h1>;
};

export const Heading02: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <h2 className={styles.heading02}>{children}</h2>;
};

export const Heading03: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <h3 className={styles.heading03}>{children}</h3>;
};

export const Heading04: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <h4 className={styles.heading04}>{children}</h4>;
};

export const Heading05: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <h5 className={styles.heading05}>{children}</h5>;
};
