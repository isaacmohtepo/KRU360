import styles from './galaxia.module.css';
import Tilt from 'react-parallax-tilt';
const Galaxia = () => {
    return (
        <>
            <div className="col-md-6 galaxia">
                <div className={styles.galaxia}>
                    <Tilt  transitionSpeed={10} tiltMaxAngleX={4}
                           tiltMaxAngleY={1}
                           perspective={800}>
                    <img src="/images/galaxia.png" alt="Galaxia | Kru360"/>
                    </Tilt>
                </div>
            </div>
        </>
    );

}
export default Galaxia;