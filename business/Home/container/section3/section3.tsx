import styles from "./section3.module.css";
import FormVendeMas from "../../contents/form/formVendeMas/formVendeMas";
import VideoFondoSection from "../../contents/videoFondoSection3/videoFondoSection";


interface IProps{
	handleChange: (e: any) => void;
}

const Section3: React.FC<IProps> = ({handleChange}) => {


function eleccion (){}
	return (
		<>
			<div className={styles.home3}>
				<FormVendeMas handleChange={handleChange} />
				<VideoFondoSection />
			</div>
		</>
	);
};
export default Section3;
