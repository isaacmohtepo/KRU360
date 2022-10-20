import styles from './styles.module.css';
import ContentCieloLimite from "../../../components/contentCieloLimite/contentCieloLimite";
export default function CieloLimite() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.humo}>
                    <img src="/images/humoNebulosa-2.png" alt=""/>
                </div>
                <ContentCieloLimite/>
            </section>
        </>
    )
}