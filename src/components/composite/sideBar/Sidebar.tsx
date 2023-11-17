import {
  HomeIcon,
  LanguageIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { NavItem } from "../navItem/NavItem";
import styles from "./Sidebar.module.scss";
import { SecondaryButton } from "@/components/essentials/buttons/Buttons";

export const Sidebar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav_links}>
        <NavItem label="Home" target="/" rightIcon={<HomeIcon />} />
        <NavItem
          label="Languages"
          target="/languages"
          rightIcon={<LanguageIcon />}
        />
        <NavItem
          label="Profile"
          target="/profile"
          rightIcon={<UserCircleIcon />}
        />
      </div>
      <div className={styles.logout_button}>
        <SecondaryButton label="Logout" />
      </div>
    </div>
  );
};
