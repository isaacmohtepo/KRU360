import styles from "./botBandera.module.css";
const BotBandera = () => {
    return (
        <>
            <div className={styles.contenedorVideo} >
                <video className={styles.botBandera} autoPlay loop muted>
                    <source src="/video/botBandera.webm" type="video/mp4"/>
                </video>
            </div>
        </>
    )
}

export default BotBandera;