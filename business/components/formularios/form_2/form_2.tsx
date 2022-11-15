import styles from './styles.module.css';
export default function Form_2() {
    return(
        <>
            <div className={styles.form} data-aos="fade-left">
                <form action="">
                    <select name="" id="">
                        <option value="">Soy empresario</option>
                        <option value="">Soy emprendedor</option>
                    </select>
                    <div className={styles.content}>
                        <p>Podemos hacer que tu página web <span>venda por ti.</span></p>
                    </div>

                    <div className={styles.boton}>
                        <a className={styles.btn_despegar} href="#">¡Quiero despegar!</a>
                        <a className={styles.btn_reservar} href="#">Reservar cita</a>
                    </div>

                </form>
            </div>
        </>
    )
}