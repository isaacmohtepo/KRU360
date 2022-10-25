import styles from './styles.module.css';

export default function ContentPlantaBandera() {
    return (
        <>
            <div className={styles.plantaTuBandera}>
                <div className={styles.title}>
                    <h2>PLANTA TU <span>BANDERA</span></h2>
                    <p>Creamos la cultura organizacional de tu empresa y preparamos a tu equipo para el viaje
                        intergaláctico hacia el posicionamiento y la transformación digital.
                    </p>
                    <button>Reservar cita</button>
                </div>
            </div>
        </>
    )
}