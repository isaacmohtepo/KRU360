import styles from "./styles.module.css";
import {Parallax, ParallaxProvider} from "react-scroll-parallax";

export default function Star() {

    return (
        <>
            <ParallaxProvider>
                <div className={styles.background}>
                    <Parallax translateX={[-90, 0]} >
                        <img src="/images/estrellas.png" alt="Estrella KRU"/>
                    </Parallax>
                </div>
            </ParallaxProvider>

        </>
    )
}