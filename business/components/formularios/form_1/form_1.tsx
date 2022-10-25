import styles from './styles.module.css';

export default function Form_1() {
    return (
        <>
            <div className={styles.title}>
                <h2>Reserva tu silla</h2>
                <p>Tenemos 50 sillas disponibles para nuestro próximo lanzamiento al espacio de clientes.</p>
            </div>
            <div className={styles.form}>
                <form action="">

                    <input type="text" placeholder="Nombre completo del empresario/a"/>
                    <input type="text" placeholder="Correo electrónico"/>
                    <input type="text" placeholder="Número de teléfono"/>

                    <div className={styles.boton}>
                        <button>Reservar silla</button>
                        <a href="#">Aún no</a>
                    </div>
                </form>
            </div>
        </>
    )
}