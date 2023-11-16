"use client";
import { Label } from "../textBodies/Bodies";
import styles from "./Buttons.module.scss";

export enum ButtonType {
  submit = "submit",
  button = "button",
  reset = "reset",
}
export const PrimaryButton: React.FC<{
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  type?: ButtonType;
}> = ({ label, onClick, icon, type }) => {
  return (
    <div className={styles.primary}>
      <button type={type} onClick={onClick}>
        <div className={styles.label}>
          <Label>{label}</Label>
        </div>
        {icon && <div className={styles.icon}>{icon}</div>}
      </button>
    </div>
  );
};

export const SecondaryButton: React.FC<{
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  type?: ButtonType;
}> = ({ label, onClick, icon, type }) => {
  return (
    <div className={styles.secondary}>
      <button type={type} onClick={onClick}>
        <div className={styles.label}>
          <Label>{label}</Label>
        </div>
        {icon && <div className={styles.icon}>{icon}</div>}
      </button>
    </div>
  );
};

export const TextButton: React.FC<{
  label: string;
  icon?: React.ReactNode;
  type?: ButtonType;
  onClick?: () => void;
}> = ({ label, icon, type, onClick }) => {
  return (
    <div className={styles.text}>
      <button type={type} onClick={onClick}>
        {label}
        {icon && <div className={styles.icon}>{icon}</div>}
      </button>
    </div>
  );
};
