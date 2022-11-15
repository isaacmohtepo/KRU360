import styles from "./redesSocialGeneral.module.css";

const RedesSocialGeneral = () => {
    return(
        <>
            <div className={styles.socialGeneral}>
                <a  target="_blank" className={styles.iconSocial}  href="https://www.instagram.com/wearekru360/"  rel="noreferrer"  ><i className='bx bxl-instagram'></i></a>
                <a target="_blank" className={styles.iconSocial} href="https://www.facebook.com/KRU360" rel="noreferrer" ><i className='bx bxl-facebook'></i></a>
                <a target="_blank" className={styles.iconSocial} href="https://www.linkedin.com/company/kru-360/" rel="noreferrer" ><i className='bx bxl-linkedin'></i></a>
            </div>
        </>
    )
}

export default RedesSocialGeneral;