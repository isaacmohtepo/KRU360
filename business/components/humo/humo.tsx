import styles from './styles.module.css';
import Lottie from "lottie-react";
import humo from './humo.json';

export default function Humo() {

    return (
        <>
            <div className={styles.humo}>

                    <Lottie animationData={humo} loop={true}/>

            </div>
        </>
    )
}