import styles from "./Thesis.module.css";

export default function Thesis() {
  return (
    <section className={styles.section}>
      <div className={styles.gridContainer}>
        {/* Left Side Panel */}
        <div className={styles.sidePanelLeft} />

        {/* Center Main Content */}
        <div className={styles.thesisBox}>
          <h2 className={styles.title}>
            Não acreditamos em negócios isolados.
          </h2>
          <p className={styles.bodyText}>
            Acreditamos em empresas que compartilham inteligência, repertório, tecnologia, marca e distribuição. Cada negócio da <span className={styles.boldText}>Manyways</span> tem vida própria, mas todos nascem de uma mesma forma de pensar: encontrar problemas reais, criar uma solução com identidade e transformar isso em operação.
          </p>
        </div>

        {/* Right Side Panel */}
        <div className={styles.sidePanelRight} />
      </div>
    </section>
  );
}
