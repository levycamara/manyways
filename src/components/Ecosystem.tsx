import Image from "next/image";
import styles from "./Ecosystem.module.css";

export default function Ecosystem() {
  return (
    <section id="ecossistema" className={styles.section}>
      <div className={styles.ecosystemBox}>
        
        {/* 1. FAUVES */}
        <div className={styles.rowFauves}>
          <div className={styles.sidePanelLeft} />
          <div className={`${styles.logoBox} ${styles.bgFauves}`}>
            <Image
              src="/images/fauves_logo.svg"
              alt="Fauves"
              width={134}
              height={63}
              className={styles.logoImage}
            />
          </div>
          <div className={styles.contentBox}>
            <p className={styles.text}>
              Plataforma para criar, divulgar e gerenciar eventos, ingressos, artistas, convidados e experiências.
            </p>
            <button className={styles.ctaButton}>Conheça</button>
          </div>
          <div className={styles.sidePanelRight} />
        </div>

        {/* 2. TOKYON */}
        <div className={styles.rowTokyon}>
          <div className={styles.sidePanelLeft} />
          <div className={styles.contentBox}>
            <p className={styles.text}>
              Branding, identidade e comunicação para marcas que precisam existir com força.
            </p>
            <button className={styles.ctaButton}>Conheça</button>
          </div>
          <div className={`${styles.logoBox} ${styles.bgTokyon}`}>
            <Image
              src="/images/tokyon_logo.svg"
              alt="Tokyon"
              width={169}
              height={33}
              className={styles.logoImage}
            />
          </div>
          <div className={styles.emptyBoxTokyon} />
          <div className={styles.sidePanelRight} />
        </div>

        {/* 3. ALLYO */}
        <div className={styles.rowAllyo}>
          <div className={styles.sidePanelLeft} />
          <div className={styles.emptyBoxAllyo} />
          <div className={`${styles.logoBox} ${styles.bgAllyo}`}>
            <Image
              src="/images/allyo_logo.svg"
              alt="Allyo"
              width={126}
              height={56}
              className={styles.logoImage}
            />
          </div>
          <div className={styles.contentBox}>
            <p className={styles.text}>
              Plataforma de creative operations para organizar, solicitar e escalar demandas de design, conteúdo e campanhas.
            </p>
            <button className={styles.ctaButton}>Conheça</button>
          </div>
          <div className={styles.sidePanelRight} />
        </div>

        {/* 4. ASTERYSKO */}
        <div className={styles.rowAsterysko}>
          <div className={styles.sidePanelLeft} />
          <div className={styles.contentBox}>
            <p className={styles.text}>
              Registro e proteção de marcas para empresas que estão construindo valor.
            </p>
            <button className={styles.ctaButton}>Conheça</button>
          </div>
          <div className={`${styles.logoBox} ${styles.bgAsterysko}`}>
            <Image
              src="/images/asterysko_logo.png"
              alt="Asterysko"
              width={184}
              height={32}
              className={styles.logoImage}
            />
          </div>
          <div className={styles.sidePanelRight} />
        </div>

        {/* 5. NIVA */}
        <div className={styles.rowNiva}>
          <div className={styles.sidePanelLeft} />
          <div className={styles.emptyBoxNiva} />
          <div className={`${styles.logoBox} ${styles.bgNiva}`}>
            <Image
              src="/images/niva_logo.svg"
              alt="Niva"
              width={147}
              height={46}
              className={styles.logoImage}
            />
          </div>
          <div className={styles.contentBox}>
            <p className={styles.text}>
              Mobilidade urbana sob demanda para conectar pessoas, trajetos e novas formas de circulação.
            </p>
            <button className={styles.ctaButton}>Conheça</button>
          </div>
          <div className={styles.sidePanelRight} />
        </div>

      </div>
    </section>
  );
}
