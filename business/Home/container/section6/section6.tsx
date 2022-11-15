import styles from "./section6.module.css";
import Sol from "../../contents/sol/sol";
import BrillaConLuzPropia from "../../contents/contenido/brillaConLuzPropia/brillaConLuzPropia";
import HumoNebulosa from "../../contents/efectoHumo/humoNebulosa/humoNebulosa";
import {useEffect} from "react";

const Section6 = (props:any) => {
	const {user} = props;
	return (
		<>
			<div className={styles.home6}>
				<Sol />
				<HumoNebulosa />
				<BrillaConLuzPropia user_type={user.type} />
			</div>
		</>
	);
};
export default Section6;
