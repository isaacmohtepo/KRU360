import styles from "../niElCielo/niElCielo.module.css";
interface IProps{
	user_type: string;
}
const PlantaTuBandera: React.FC<IProps> = ({user_type}) => {
	return (
		<>
			<div className={styles.containerGeneral} data-aos="fade-up">
				<div className="title">
					<h2 className={styles.title}>
						Planta tu <span className={styles.cielo}>bandera</span>
					</h2>
				</div>
				<div className="content">
					<p className={styles.parrafo}>
						{user_type === "emprendedor" ? (
							<>
								Creamos la imagen corporativa de tu empresa, la
								hacemos funcional, versátil y estética para que
								genere recordación en tu público objetivo.
							</>
						) : (
							<>
								Creamos la cultura organizacional de tu empresa
								y preparamos a tu equipo para el viaje
								intergaláctico hacia el posicionamiento y la
								transformación digital.
							</>
						)}
					</p>
				</div>
				<div className="button">
					<button className="btn btnReservarPlantar">
						Reservar cita
					</button>
				</div>
			</div>
		</>
	);
};
export default PlantaTuBandera;
