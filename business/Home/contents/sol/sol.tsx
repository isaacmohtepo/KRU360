import styles from './sol.module.css';
import {Parallax} from "react-scroll-parallax";

const Sol = () => {
    return (

        <>

            <div className="col-md-6 sol" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="400"  >
                <Parallax>

                    <div className={styles.sol}>
                        <img src="/images/sol.png" alt="Sol | Kru360"/>
                    </div>
                </Parallax>
            </div>
        </>
    )
}
export default Sol