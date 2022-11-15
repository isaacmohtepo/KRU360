import styles from "./section2.module.css";
import FormReservaSilla from "../../contents/form/formReservaSilla/formReservaSilla";
import Humo2 from "../../contents/efectoHumo/humo2/humo2";
import { User } from "../../../../models/user.model";

interface IProps {
	user: User;
	handleChange: (e: any) => void;
	handleSubmit: (e: any) => void;
}
const Section2 = ({user, handleChange, handleSubmit}: IProps) => {
	return (
		<>
			<div className={styles.home2}>
				<Humo2 />
				<FormReservaSilla
					user={user}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
			</div>
		</>
	);
};

export default Section2;
