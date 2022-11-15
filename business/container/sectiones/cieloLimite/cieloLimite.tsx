import styles from './styles.module.css';
import ContentCieloLimite from "../../../components/contentCieloLimite/contentCieloLimite";
export default function CieloLimite() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.humo}>
                    <img width={1920} height={256} loading={"lazy"} src="/images/humoNebulosa-2.png" alt="Fondo nebulosa"/>
                </div>
                <ContentCieloLimite/>
            </section>
        </>
    )
}