import {Parallax, ParallaxProvider} from "react-scroll-parallax";
import styles from "./styles.module.css";
import Lottie from "lottie-react";
import nave from "./nave2.json";

const Cohete = () => {
    return (
        <>
            <div className={styles.coheteGeneral}>
                <ParallaxProvider>
                <div>
                    <Parallax speed={100} scale={[1, 0.5]}>
                        <Lottie animationData={nave} loop={true}/>
                    </Parallax>
                </div>
                </ParallaxProvider>
            </div>
        </>
    )
}

export default Cohete;