import styles from "./NavItem.module.scss";

export const NavItem: React.FC<{
  label: string;
  target: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}> = ({ label, target, leftIcon, rightIcon }) => {
  return (
    <a href={target} className={styles.link}>
      <div className={styles.container}>
        {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}
        <div className={styles.label}>{label}</div>
        {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
      </div>
    </a>
  );
};
