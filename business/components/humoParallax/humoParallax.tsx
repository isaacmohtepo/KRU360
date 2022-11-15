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
                        <div className={styles.title}>
                            <Parallax opacity={[1, 0]}>
                                <h2>#GO<span>KRU</span></h2>
                            </Parallax>
                        </div>
                    </div>
                </section>
            </ParallaxProvider>
        </>
    )
}