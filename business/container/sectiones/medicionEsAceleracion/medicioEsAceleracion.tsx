import styles from './styles.module.css';
import Cohete from "../../../components/cohtete/cohete";

export default function MedicionEsAceleracion() {
    return (
        <>
            <section className={styles.section}>
                <div data-aos="fade-left" className={styles.title}>
                    <h2>MEDICIÓN = <span>ACELERACIÓN</span></h2>
                </div>
                <div className={styles.multimedia}>
                    <video  className={styles.video} autoPlay loop muted>
                        <source  id="video" src="/video/Aceleracion.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className={styles.content}>
                    <div className={styles.content_1}>
                        <p>Usamos plataformas de Big Data, Inteligencia Artificial y Análisis Predictivo para medir,
                            analizar, ajustar y ejecutar, el proceso cíclico que sitúa a tu empresa en el centro de
                            ciclos
                            de rendimiento ágil.
                        </p>
                        <button className={styles.btn_escritorio}>Reservar cita</button>
                    </div>
                    <div className={styles.content_2}>
                        <p>Lo que no se mide, no se corrige y, lo que no se corrige, no se mejora. Cada acción que
                            implementamos la medimos con el fin de iterar o pivotar, de tal manera que cada cosa que
                            hagamos sea ajustado a los objetivos del negocio.
                        </p>
                    </div>
                    <button className={styles.btn_movil}>Reservar cita</button>
                </div>
                <Cohete/>
            </section>

        </>
    )
}