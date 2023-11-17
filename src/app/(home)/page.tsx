import { Heading01 } from "@/components/essentials/headings/Headings";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Heading01>Welcome back</Heading01>
    </div>
  );
}
