import styles from './styles.module.css';
import ContentConquista from "../../../components/contentConquista/contentConquista";
import Galaxia from "../../../components/galaxia/galaxia";

export default function ParallaxCieloTexto() {
    return (
        <>
            <section className={styles.section}>

                <div className={styles.content}>
                    <ContentConquista/>
                </div>
                <Galaxia/>
            </section>
        </>
    )
}