import styles from './styles.module.css';
import Flama from "../flama/flama";

export default function NaveParallax() {
    return (
        <>

            <div className={styles.nave}>

                <img src="/images/imgNave.png" alt="Nave KRU"/>

            </div>
            <Flama/>
        </>
    )
}