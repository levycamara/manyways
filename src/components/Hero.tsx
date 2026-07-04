import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.gridContainer}>
        {/* Left Side Panel */}
        <div className={styles.sidePanelLeft} />

        {/* Center Main Content */}
        <div className={styles.heroBox}>
          <div className={styles.contentLeft}>
            <h1 className={styles.title}>
              Construimos negócios para um mundo que não segue caminho único.
            </h1>
            <p className={styles.description}>
              Criamos e conectamos empresas independentes em branding, tecnologia, mídia, propriedade intelectual e novas operações digitais.
            </p>
          </div>
          <div className={styles.actionRight}>
            <a href="#ecossistema" className={styles.ctaButton}>
              Conheça os negócios
            </a>
          </div>
        </div>

        {/* Right Side Panel */}
        <div className={styles.sidePanelRight} />
      </div>
    </section>
  );
}
