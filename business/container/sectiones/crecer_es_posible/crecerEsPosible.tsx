import styles from './styles.module.css';
import Form_1 from "../../../components/formularios/form_1/form_1";
import {Parallax, ParallaxProvider} from 'react-scroll-parallax';

export default function CrecerEsPosible() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.title}>
                        <ParallaxProvider>
                            <Parallax scale={[1, 1.5]} translateY={['-100px', '0px']} easing="easeInQuad">
                                <h2>¡CRECER ES <span>POSIBLE!</span></h2>
                            </Parallax>
                        </ParallaxProvider>

                    </div>
                    <Form_1/>
                </div>
            </section>
        </>
    )
}