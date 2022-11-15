import styles from './nave.module.css'
const Nave = () => {
    return (
        <>
            <div className={styles.nave}>
                <img className={styles.imgNave} src="images/imgNave.png" alt="Nave | Kru360"/>
                <img className={styles.imgNaveMovil} src="images/imgNaveMovil.png" alt="Nave | Kru360"/>
            </div>
        </>
    );
}

export default Nave;