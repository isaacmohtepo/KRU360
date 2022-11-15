import styles from "./conquistaLaGalaxia.module.css";
import {Parallax} from "react-scroll-parallax";
interface IProps{
	user_type: string;
}
const ConquistaLaGalaxia: React.FC<IProps> = ({user_type}) => {
	return (
		<>
			<div className={styles.containerGeneral} data-aos="fade-up">
				<div className="title">
					<h2 className={styles.title}>
						CONQUISTA <br /> LA{" "}
						<span className={styles.galaxia}>GALAXIA</span>{" "}
					</h2>
				</div>
				<div className="content">
					<p className={styles.parrafo}>
						{user_type === "emprendedor" ? (
							<>
								Emprende con éxito: Desarrolla hábitos, con
								Programación Neurolingüística, que te llevarán
								al siguiente nivel.
							</>
						) : (
							<>
								El futuro es ahora: De la mano de la
								transformación digital borra a la competencia
								del mapa y conquista el mercado.
							</>
						)}
					</p>
					<p className={styles.parrafo}>
						{user_type === "emprendedor" ? (
							<>
								Adquiere un mindset emprendedor para hacer de tu
								empresa un negocio escalable y rentable.
							</>
						) : (
							<>
								Creamos sitios web empresariales y plataformas tecnológicas,
								que estarán a años luz de tu competencia, añadiendo valor a
								tus clientes en cada punto de contacto.
							</>
						)}
					</p>
				</div>
				<div className="button">
					<button className="btn btnReservarGalaxia">
						Reservar cita
					</button>
				</div>
			</div>
		</>
	);
};
export default ConquistaLaGalaxia;
