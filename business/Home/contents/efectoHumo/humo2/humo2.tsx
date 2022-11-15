import styles from './humo2.module.css'
import {Parallax} from "react-scroll-parallax";
const Humo2 = () => {


    return (
        <>

            <div className={styles.humo}>

                <lottie-player  src="json/humo.json" background="transparent" speed="1" loop autoplay></lottie-player>
            </div>

        </>
    );
};

export default Humo2;
