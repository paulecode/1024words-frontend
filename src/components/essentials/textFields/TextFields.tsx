import { Label, LabelBold } from "../textBodies/Bodies";
import styles from "./TextFields.module.scss";

export enum TextFieldType {
  text = "text",
  password = "password",
  email = "email",
  number = "number",
  tel = "tel",
  url = "url",
  search = "search",
}

export const TextField: React.FC<{
  label: string;
  type: TextFieldType;
  valid: boolean;
  placeholder?: string;
  error?: string;
}> = ({ label, type, valid, placeholder, error }) => {
  return (
    <div className={styles.container}>
      <Label>{label}</Label>
      <input
        className={styles.textField}
        type={type}
        placeholder={placeholder}
      />
      <div className={styles.error}>
        <LabelBold>{error}</LabelBold>
      </div>
    </div>
  );
};
