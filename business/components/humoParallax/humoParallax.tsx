import styles from './styles.module.css';
import {Parallax, ParallaxProvider} from "react-scroll-parallax";

export default function HumoParallax() {


    return (
        <>
            <ParallaxProvider>
                <section className={styles.section}>


                    <div className={styles.espacio_1}>
                    </div>
                    <div className={styles.humo}>
                        <Parallax opacity={[1, 0]}>
                            <img src="/images/humo-despegue.png" alt="Humo despegar | KRU"/>
                        </Parallax>
                        <div className={styles.title}>
                            <h2>#GO<span>KRU</span></h2>
                        </div>
                    </div>

                </section>
                <div className={styles.cielo2}>
                    <img src="/images/estrellas-sol.webp" alt="GOKRU"/>
                </div>
            </ParallaxProvider>
        </>
    )
}