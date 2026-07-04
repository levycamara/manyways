import styles from "./Manifest.module.css";

export default function Manifest() {
  return (
    <section id="manifest" className={styles.section}>
      <div className={styles.gridContainer}>
        {/* Left Side Panel */}
        <div className={styles.sidePanelLeft} />

        {/* Center Main Content */}
        <div className={styles.manifestBox}>
          <p className={styles.text}>
            Alguns negócios nascem de uma demanda.<br />
            Outros nascem de uma inquietação.<br />
            <br />
            A <span className={styles.boldText}>Manyways</span> existe para organizar esses caminhos em uma estrutura comum: marcas fortes, produtos úteis, operações possíveis e visão de longo prazo.
          </p>
        </div>

        {/* Right Side Panel */}
        <div className={styles.sidePanelRight} />
      </div>
    </section>
  );
}
