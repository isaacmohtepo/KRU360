import Nav from "../../../shared/nav/nav";
import FormEmpresa from "../../contents/form/formEmpresa/formEmpresa";
import RedesSociales from "../../contents/redesSociales/content/redesSociales";
import Montañas from "../../contents/montañas/montañas";
import Humo from "../../contents/efectoHumo/humo/humo";
import GoKru from "../../contents/goKru/goKru";
import Nube from "../../contents/nube/nube";
import BotHelp from "../../contents/bot/botHelp/botHelp";
import Nave from "../../contents/nave/nave";
import styles from "./section1.module.css";
import React from "react";

interface IProps {
	handleChange: (e: any) => void;
}

const Section1 = ({handleChange}: IProps) => {
	return (
		<>
			<div className={styles.home}>
				<FormEmpresa handleChange={handleChange} />
				<Nav />
				<RedesSociales />
				<Montañas />
				<Humo />
				<GoKru />
				<Nube />
				<BotHelp />
				<Nave />
			</div>
		</>
	);
};

export default Section1;
