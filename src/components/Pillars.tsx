import styles from "./Pillars.module.css";

export default function Pillars() {
  return (
    <section className={styles.section}>
      <div className={styles.gridContainer}>
        {/* Left Side Panel */}
        <div className={styles.sidePanelLeft} />

        {/* Center Main Content - Pillars Row */}
        <div className={styles.pillarsBox}>
          
          {/* Pillar 1: Marca */}
          <div className={styles.pillar}>
            <h3 className={styles.title}>Marca</h3>
            <p className={styles.description}>
              Criamos nomes, identidades, narrativas e sistemas visuais que dão forma às ideias.
            </p>
          </div>

          {/* Pillar 2: Produto */}
          <div className={styles.pillar}>
            <h3 className={styles.title}>Produto</h3>
            <p className={styles.description}>
              Transformamos oportunidades em plataformas, serviços, processos e experiências.
            </p>
          </div>

          {/* Pillar 3: Operação */}
          <div className={styles.pillar}>
            <h3 className={styles.title}>Operação</h3>
            <p className={styles.description}>
              Organizamos canais, tecnologia, distribuição e execução para que o negócio consiga andar fora do papel.
            </p>
          </div>

        </div>

        {/* Right Side Panel */}
        <div className={styles.sidePanelRight} />
      </div>
    </section>
  );
}
