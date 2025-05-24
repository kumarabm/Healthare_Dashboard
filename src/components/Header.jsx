import { Search, Bell, Plus } from "lucide-react";
import styles from "../style/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Health<span>care.</span></h1>
      <div className={styles.search}>
        <Search size={16} />
        <input type="text" placeholder="Search" disabled />
      </div>
      <div className={styles.right}>
        <Bell />
        <img src="/assets/avatar.png" alt="User" className={styles.avatar} />
        <Plus className={styles.addBtn} />
      </div>
    </header>
  );
}
