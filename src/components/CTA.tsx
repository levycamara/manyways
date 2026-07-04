import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section id="cta" className={styles.section}>
      <div className={styles.gridContainer}>
        {/* Left Side Panel */}
        <div className={styles.sidePanelLeft} />

        {/* Center Main Content - CTA Box */}
        <div className={styles.ctaBox}>
          <div className={styles.contentLeft}>
            <h2 className={styles.title}>
              Tem um caminho para construir com a gente?
            </h2>
            <p className={styles.description}>
              Fale com a <span className={styles.boldText}>Manyways</span> para parcerias, novos negócios ou oportunidades estratégicas.
            </p>
          </div>
          <div className={styles.actionRight}>
            <a href="mailto:contato@manyways.vc" className={styles.contactButton}>
              Entrar em contato
            </a>
          </div>
        </div>

        {/* Right Side Panel */}
        <div className={styles.sidePanelRight} />
      </div>
    </section>
  );
}
