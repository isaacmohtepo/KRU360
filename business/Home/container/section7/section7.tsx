import styles from './section7.module.css';
import HumoNebulosaR from "../../contents/efectoHumo/humoNebulosaR/humoNebulosaR"
import NiElCielo from "../../contents/contenido/niElCielo/niElCielo";
import Aceleracion from "../../contents/contenido/aceleracion/contents/title/aceleracion";

const Section7 = (props:any) => {
    const {user} = props;
    return (
        <>
            <div className={styles.home7}>
                <HumoNebulosaR/>
                <NiElCielo user_type={user.type}/>
                <Aceleracion user_type={user.type}/>

            </div>
        </>
    )

}
export default Section7