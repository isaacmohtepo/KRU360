import styles from "./brillaConLuzPropia.module.css";
interface IProps{
	user_type: string;
}
const BrillaConLuzPropia: React.FC<IProps> = ({user_type}) => {
	return (
		<>
			<div className={styles.containerGeneral} data-aos="fade-up">
				<div className="title">
					<h2 className={styles.title}>
						<span className={styles.brilla}>Brilla</span> con luz
						propia.{" "}
					</h2>
				</div>
				<div className="content">
					<p className={styles.parrafo}>
						{user_type === "emprendedor" ? (
							<>
								Define un modelo de negocio escalable: Descubre
								cómo crear, entregar, y capturar valor para tus
								clientes.
							</>
						) : (
							<>
								Indexamos estos desarrollos tecnológicos a
								Google para que tu empresa sea el satélite
								digital de tu público objetivo.
							</>
						)}
					</p>
					{user_type === "emprendedor" ? (
						<p className={styles.parrafo}>
							Usa la innovación como estrategia para la
							consolidación en el mercado y factor diferencial de
							la competencia.
						</p>
					) : (
						<></>
					)}
				</div>
			</div>
		</>
	);
};
export default BrillaConLuzPropia;
