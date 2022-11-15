import styles from "./styles.module.css";
import Lottie from "lottie-react";
import flama from './flama.json';

export default function Flama() {
    return(
        <>
            <div className={styles.flama}>
                <Lottie animationData={flama} loop={true}/>
            </div>
        </>
    )
}