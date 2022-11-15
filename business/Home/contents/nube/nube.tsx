import styles from './nube.module.css'
const Nube = () => {
    return(
        <>
            <div className={styles.nube}>
                <p className={styles.infoRobot}>¡Hola! Soy
                    <span className={styles.kruBot}> Krubot, </span>
                    si tienes <br /> alguna duda habla conmigo ;)
                </p>
                <img className="nubeEscritorio" src="images/nube.png" alt="Nube | Kru360" />
            </div>
        </>
    )
}

export default Nube;
