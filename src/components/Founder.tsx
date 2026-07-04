import Image from "next/image";
import styles from "./Founder.module.css";

export default function Founder() {
  return (
    <section className={styles.section}>
      <div className={styles.gridContainer}>
        {/* Left Side Panel */}
        <div className={styles.sidePanelLeft} />

        {/* Center Main Content - Founder Row */}
        <div className={styles.founderBox}>
          
          {/* Left Text Card */}
          <div className={styles.textCard}>
            <div className={styles.logoWrapper}>
              <Image
                src="/images/founder_logo.svg"
                alt="Signature / Logo"
                width={214}
                height={51}
                className={styles.founderLogo}
              />
            </div>
            <p className={styles.bioText}>
              Designer e empreendedor criativo, Levy Câmara construiu a <span className={styles.boldText}>Manyways</span> como uma casa para negócios que nascem da interseção entre marca, tecnologia e mercado. A proposta não é seguir uma única avenida, mas criar caminhos diferentes com a mesma obsessão: transformar ideias em empresas possíveis, desejáveis e bem posicionadas.
            </p>
          </div>

          {/* Right Image Card */}
          <div className={styles.imageCard}>
            <Image
              src="/images/founder.png"
              alt="Levy Câmara"
              width={338}
              height={346}
              className={styles.founderImage}
            />
          </div>

        </div>

        {/* Right Side Panel */}
        <div className={styles.sidePanelRight} />
      </div>
    </section>
  );
}
