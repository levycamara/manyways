import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.gridContainer}>
        {/* Left Box - Empty Spacer */}
        <div className={styles.sideBox} />

        {/* Middle Box - Footer Content */}
        <div className={styles.footerContent}>
          {/* Top Row: Logo & Socials */}
          <div className={styles.topRow}>
            <Image
              src="/images/footer_logo.svg"
              alt="Manyways"
              width={241}
              height={31}
              className={styles.footerLogo}
            />
            <a
              href="https://linkedin.com/company/manyways"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinLink}
            >
              <Image
                src="/images/linkedin.svg"
                alt="LinkedIn"
                width={44}
                height={44}
                className={styles.linkedinIcon}
              />
            </a>
          </div>

          {/* Bottom Row: Copyright & Nav Links */}
          <div className={styles.bottomRow}>
            <p className={styles.copyright}>
              © 2026 Manyways. Todos os direitos reservados.
            </p>
            <div className={styles.footerLinks}>
              <a href="#carreiras" className={styles.footerLink}>Carreiras</a>
              <a href="#privacidade" className={styles.footerLink}>Política de Privacidade</a>
            </div>
          </div>
        </div>

        {/* Right Box - Empty Spacer */}
        <div className={styles.sideBox} />
      </div>
    </footer>
  );
}
