import styles from './humo.module.css'
const Humo = () => {


    return (
        <>
            <div className={styles.humo}>
                <lottie-player  src="json/humo.json" background="transparent" speed="1" loop autoplay></lottie-player>
            </div>
        </>
    );
};

export default Humo;