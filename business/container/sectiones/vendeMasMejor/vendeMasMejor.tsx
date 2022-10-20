import styles from './styles.module.css';
import Form_2 from "../../../components/formularios/form_2/form_2";

export default function VendeMasMejor() {
    return (
        <>
            <section className={styles.section}>

                <div className={styles.title}>
                    <h2><span>VENDE MÁS</span> Y MEJOR</h2>
                </div>

                <div className={styles.general}>
                    <div className={styles.videoCohete}>
                        <video width="100%" height="100%"  src="/video/Vendemásymejor.mp4" autoPlay={true} muted loop />
                        <Form_2/>
                    </div>

                </div>
            </section>
        </>
    )
}