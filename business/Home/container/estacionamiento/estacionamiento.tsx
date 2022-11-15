import Luna from "../../contents/luna/luna";
import styles from "./estacionamiento.module.css";
import PlantaTuBandera from "../../contents/contenido/plantaTuBandera/plantaTuBandera";
import BotBandera from "../../contents/bot/botBandera/botBandera";
const Estacionamiento = (props: any) => {
	const {user} = props;
	return (
		<>
			<div className={styles.home9}>
				<Luna />
				<PlantaTuBandera user_type={user.type} />
				<BotBandera />
			</div>
		</>
	);
};
export default Estacionamiento;
