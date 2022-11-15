import styles from "./spoiler.module.css";

interface IProps {
	user_type: string;
}

const Spoiler: React.FC<IProps> = ({user_type}) => {
	return (
		<>
			<div className={styles.content}>
				{user_type === "emprendedor" ? (
					<>
						<p className={styles.parrafo}>
							<span className={styles.spoiler}>Spoiler:</span> Las
							matemáticas nunca fueron tan fáciles.
						</p>
						<p className={styles.parrafo}>
							Conoce los asuntos legales más relevantes a la hora
							de tener una empresa, aprovecha esta información y
							ve un paso adelante.
						</p>
					</>
				) : (
					<>
						<p className={styles.parrafo}>
							Lo que no se mide, no se corrige y, lo que no se
							corrige, no se mejora. Cada acción que implementamos
							la medimos con el fin de iterar o pivotar, de tal
							manera que cada cosa que hagamos sea ajustado a los
							objetivos del negocio.
						</p>
					</>
				)}
			</div>
		</>
	);
};
export default Spoiler;
