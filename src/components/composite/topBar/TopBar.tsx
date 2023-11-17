import {
  Heading03,
  Heading04,
} from "@/components/essentials/headings/Headings";
import styles from "./TopBar.module.scss";
import { Inter } from "next/font/google";
export const TopBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <Heading03>1024words</Heading03>
    </div>
  );
};
