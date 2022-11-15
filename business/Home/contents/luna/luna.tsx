import styles from './luna.module.css'
import {Parallax} from "react-scroll-parallax";
import {useEffect, useState} from "react";

const Luna = () => {

    return (
        <>

                <div className={styles.luna}>
                    <Parallax speed={-10}>
                    <img id="luna-animation" className="animate__animated" src="/images/Luna.png" alt="Luna | Kru360"/>
                    </Parallax>
                </div>

        </>
    )
}

export default Luna;