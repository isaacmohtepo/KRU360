import styles from "./section5.module.css";
import Galaxia from "../../contents/galaxia/galaxia";
import ConquistaLaGalaxia from "../../contents/contenido/conquistaLaGalaxia/conquistaLaGalaxia";
import React, {useEffect} from "react";
const Section5 = (props: any) => {
	const {user} = props;
	console.log(user);
	return (
		<>

				<div className={styles.home5} id="despegar">
					<Galaxia />
					<ConquistaLaGalaxia user_type={user.type} />
				</div>

		</>
	);
};

export default Section5;
