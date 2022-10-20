import styles from './styles.module.css';
import Image from "next/image";
import {Parallax, ParallaxProvider} from "react-scroll-parallax";
import Flama from "../flama/flama";

export default function Nave() {

    return (
        <>
            <div className={styles.nave}>
                <Image width={279} height={336} src="/images/imgNaveMovil.png" alt="Nave KRU"/>
                <Flama/>
            </div>

        </>
    )
}