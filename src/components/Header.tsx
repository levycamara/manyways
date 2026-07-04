import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.gridContainer}>
        {/* Left Box - Logo */}
        <div className={styles.logoBox}>
          <Image
            src="/images/logo.svg"
            alt="Manyways"
            width={150}
            height={19}
            priority
            className={styles.logo}
          />
        </div>

        {/* Middle Box - Navigation */}
        <nav className={styles.navBox}>
          <div className={styles.navLinks}>
            <a href="#ecossistema" className={styles.navLink}>Negócios</a>
            <a href="#manifest" className={styles.navLink}>Sobre</a>
            <a href="#cta" className={styles.navLink}>Contato</a>
          </div>
        </nav>

        {/* Right Box - Empty Space */}
        <div className={styles.rightBox} />
      </div>
    </header>
  );
}
