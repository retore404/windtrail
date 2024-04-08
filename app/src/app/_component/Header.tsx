import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.headerLink} href="/">
        Windtrail
      </a>
    </header>
  );
}
