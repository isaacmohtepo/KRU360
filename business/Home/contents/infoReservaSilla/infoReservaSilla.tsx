import styles from './infoReservaSilla.module.css';
import {Parallax} from "react-scroll-parallax";

const InfoReservaSilla = () => {

    return (
        <>

            <div id="home-2" className={styles.parallax} >
                <Parallax
                    translateX={[0, 0]}
                    opacity={[0.5, 1]}
                    speed={10}>
                    <h2 className={styles.tituloInfo}>¡CRECER ES <span className={styles.posible}>POSIBLE!</span></h2>
                </Parallax>
            </div>
            <div className={styles.containerGeneral}>
                <h3 className={styles.subtituloInfo}>Reserva tu silla</h3>
                <p className={styles.descripcion}>Tenemos 50 sillas disponibles para nuestro próximo lanzamiento al espacio de clientes.
                </p>
            </div>

        </>
    );
};

export default InfoReservaSilla;