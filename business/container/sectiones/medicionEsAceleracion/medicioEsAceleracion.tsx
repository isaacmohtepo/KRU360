import styles from './styles.module.css';

export default function MedicionEsAceleracion() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.title}>
                    <h2>MEDICIÓN = <span>ACELERACIÓN</span></h2>
                </div>
                <div className={styles.multimedia}>
                    <video  className={styles.video} autoPlay loop muted>
                        <source   id="video" src="/video/Aceleracion.mp4" type="video/mp4"/>
                    </video>
                </div>
            </section>

        </>
    )
}