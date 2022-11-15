import styles from "./aceleracion.module.css";

interface IProps {
	user_type: string;
}
const Aceleracion: React.FC<IProps> = ({user_type}) => {
	return (
		<>
			<div className={styles.aceleracion}>
				{user_type === "emprendedor" ? (
					<>
						<p className={styles.titulo}>Organización</p>
						<p className={styles.igual}>=</p>
					</>
				) : (
					<>
						<p className={styles.titulo}>Medición</p>
						<p className={styles.igual}>&nbsp;es&nbsp;</p>
					</>
				)}
				<p data-aos="zoom-out-left" className={styles.textAceleracion}>
					{" "}
					aceleración
				</p>
			</div>
		</>
	);
};
export default Aceleracion;
