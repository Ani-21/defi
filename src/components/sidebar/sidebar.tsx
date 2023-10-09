import { Link } from "react-router-dom";
import styles from "./sidebar.module.scss";

const menu = [
  {
    icon: "",
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: "",
    title: "Account",
    path: "/account",
  },
  {
    icon: "",
    title: "Egibility",
    path: "/egibility",
  },
  {
    icon: "",
    title: "Whitelisted",
    path: "/whitelisted",
  },
];

const Sidebar = () => {
  return (
    <div>
      <ul className={styles.links}>
        {menu.map((link) => (
          <Link to={link.path}>
            <div className={styles.link}>
              {link.icon}
              {link.title}
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
