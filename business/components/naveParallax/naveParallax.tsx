import styles from './styles.module.css';
import Flama from "../flama/flama";

export default function NaveParallax() {
    return (
        <>

            <div className={styles.nave}>

                <img width={279} height={336} src="/images/imgNaveMovil.png" alt="Nave KRU"/>

            </div>
            <Flama/>
        </>
    )
}