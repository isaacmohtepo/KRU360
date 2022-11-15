import styles from "./lenguajeEmpresa.module.css";

interface IProps {
	user_type: string;
}
const LenguajeEmpresa: React.FC<IProps> = ({user_type}) => {
    return (
        <>
            <div className={styles.content}>
                <p className={styles.parrafo}>
                    {user_type === "emprendedor" ? (
                        <>
                            Habla el lenguaje de tu empresa: <br/> los números. De esta forma aprenderás a tomar
                            decisiones
                            de manera rápida y eficiente.
                        </>
                    ) : (
                        <>
                            Usamos plataformas de Big Data, Inteligencia Artificial y Análisis Predictivo para medir,
                            analizar, ajustar y ejecutar, el proceso cíclico que sitúa a tu empresa en el centro de
                            ciclos de rendimiento ágil.
                        </>
                    )}
                </p>
                <button className="btn btnReservarLenguaje">
                    Reservar cita
                </button>
            </div>
        </>
    );
};

export default LenguajeEmpresa;
