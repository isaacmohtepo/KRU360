import styles from "./niElCielo.module.css";

const NiElCielo: React.FC<{user_type: string}> = ({user_type}) => {
	return (
		<>
			<div className={styles.containerGeneral} data-aos="fade-up">
				<div className="title">
					<h2 className={styles.title}>
						Ni <span className={styles.cielo}>el cielo</span> es el
						límite.
					</h2>
				</div>
				<div className="content">
					<p className={styles.parrafo}>
						{user_type === "emprendedor" ? (
							<>
								Co creamos una estrategia para conectar con los
								clientes, generando satisfacción como fuente de
								vitalidad del negocio.
							</>
						) : (
							<>
								Formamos un sistema en torno a tu plataforma de
								conversión. Comunicamos y conectamos con el
								segmento de mercado para convertirlos en
								clientes.
							</>
						)}
					</p>
					<p className={styles.parrafo}>
						{user_type === "emprendedor" ? (
							<>
								Creamos una historia en torno a tu empresa,
								productos, bienes o servicios apelando a las
								emociones del cliente para vender más y mejor.
							</>
						) : (
							<>
								Optimizamos las redes sociales a perfiles
								profesionales que generen tráfico de leads a la
								página web, plataforma o app de tu empresa.
							</>
						)}
					</p>
				</div>
				<div className="button">
					<button className="btn btnReservarCielo">
						Reservar cita
					</button>
				</div>
			</div>
		</>
	);
};

export default NiElCielo;
