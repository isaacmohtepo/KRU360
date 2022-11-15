import VideoAceleracion from "../../contents/videoAceleracion/videoAceleracion";
import styles from "./section8.module.css";
import LenguajeEmpresa from "../../contents/contenido/aceleracion/contents/parrafo/primero/lenguajeEmpresa";
import Spoiler from "../../contents/contenido/aceleracion/contents/parrafo/segundo/spoiler";
import Cohete from "../../contents/cohtete/cohete";

const Section8 = (props: any) => {
	const {user} = props;
	return (
		<>
			<div className={styles.homme8}>
				<VideoAceleracion />
				<LenguajeEmpresa user_type={user.type} />
				<Spoiler user_type={user.type} />
				<Cohete />
			</div>
		</>
	);
};

export default Section8;
