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
                        <Parallax opacity={[1, 0]} translateY={[0,20]} style={{width: '100%', position: 'relative', top: '102px'}}>
                            <img src="/images/humo-despegue.webp" alt="Humo despegar | KRU"/>
                        </Parallax>
                        <div className={styles.title}>
                            <h2>#GO<span>KRU</span></h2>
                        </div>
                    </div>
                </section>
                <div className={styles.cielo2}>
                    <Parallax opacity={[0, 1]}>
                        <img width={1920} height={1080} src="/images/estrellas-sol.webp" alt="GOKRU"/>
                    </Parallax>
                </div>
            </ParallaxProvider>
        </>
    )
}