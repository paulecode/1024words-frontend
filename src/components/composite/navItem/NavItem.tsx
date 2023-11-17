"use client";
import { usePathname } from "next/navigation";
import styles from "./NavItem.module.scss";
import Link from "next/link";

export const NavItem: React.FC<{
  label: string;
  target: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}> = ({ label, target, leftIcon, rightIcon }) => {
  const path = usePathname();
  const active = path === target;

  return (
    <Link href={target} className={styles.link} prefetch>
      <div
        className={
          active ? `${styles.container} ${styles.active}` : styles.container
        }
      >
        {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}
        <div className={styles.label}>{label}</div>
        {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
      </div>
    </Link>
  );
};
