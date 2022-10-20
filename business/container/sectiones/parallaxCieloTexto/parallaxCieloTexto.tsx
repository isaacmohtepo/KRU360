import styles from './styles.module.css';
import NaveParallax from "../../../components/naveParallax/naveParallax";


export default function ParallaxCieloTexto() {
    return (
        <>
            <section className={styles.section}>

                <div className={styles.grupo1}>

                </div>
                <div className={styles.parallaxCieloTexto}>
                    <h2>Conquista la galaxia</h2>
                    <h2>Brilla con luz propia</h2>
                    <h2>Ni el cielo es el límite</h2>
                    <h2>Organización = aceleración</h2>
                    <h2>Planta tu bandera</h2>
                    <div className={styles.fondo_efecto}>
                        <img src="/images/fondo-parallax.png" alt=""/>
                    </div>
                    <div className={styles.nave}>
                        <NaveParallax/>
                    </div>

                </div>
            </section>
        </>
    )
}