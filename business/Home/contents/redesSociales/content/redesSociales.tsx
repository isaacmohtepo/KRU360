import LayoutRedes from "../container/layoutRedes";
import Link from "next/link";
import styles from './redesSociales.module.css';
const RedesSociales = () => {
    return (
        <>
            <LayoutRedes>

                <a  target="_blank"  href="https://www.instagram.com/wearekru360/" className={styles.iconSocial} rel="noreferrer"  ><i className='bx bxl-instagram'></i></a>
                <a target="_blank" className={styles.iconSocial} href="https://www.facebook.com/KRU360" rel="noreferrer" ><i className='bx bxl-facebook'></i></a>
                <a target="_blank" className={styles.iconSocial} href="https://www.linkedin.com/company/kru-360/" rel="noreferrer" ><i className='bx bxl-linkedin'></i></a>
            </LayoutRedes>
        </>
    );
}
export default RedesSociales;