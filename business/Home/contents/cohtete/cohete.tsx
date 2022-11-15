import {Controller, Scene} from "react-scrollmagic";
import {Timeline, Tween} from "react-gsap";
import {Parallax} from "react-scroll-parallax";
import styles from "./cohete.module.css";
import React from "react";

const Cohete = () => {
    return (
        <>
            <div className={styles.coheteGeneral}>
                <div>
                    <Parallax speed={100} scale={[1, 0.5]}>
                        <lottie-player
                            src="json/nave2.json"
                            background="transparent"
                            speed="1"
                            loop
                            autoplay
                        ></lottie-player>
                    </Parallax>
                </div>
            </div>
        </>
    )
}

export default Cohete;