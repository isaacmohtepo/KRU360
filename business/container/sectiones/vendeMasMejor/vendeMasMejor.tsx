import styles from './styles.module.css';
import Form_2 from "../../../components/formularios/form_2/form_2";

export default function VendeMasMejor() {
    return (
        <>
            <section className={styles.section}>

                <div className={styles.title} data-aos="zoom-in-up">
                    <h2><span>VENDE MÁS</span> Y MEJOR</h2>
                </div>

                <div className={styles.general}>
                    <Form_2/>
                    <div className={styles.videoCohete}>
                        <img width={1920} height={1080} className={styles.escritorio} src="/images/Vendemásymejor.jpg" alt="Vende más y mejor"/>
                        <img width={1920} height={1080} className={styles.movil} src="/images/VendemasymejorMovil.jpg" alt="Vende más y mejor"/>
                    </div>

                </div>
            </section>
        </>
    )
}