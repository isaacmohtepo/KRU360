import styles from './botHelp.module.css'
const BotHelp = () => {
    return (
        <>
            <div className={styles.bot}>
                <img className={styles.botEscritorio} src="images/botRobot.png" alt="Bot | Kru360"/>
                <img className={styles.botMovil} src="images/botRobotMovil.svg" alt="Bot | Kru360"/>
            </div>
        </>
    );
}

export default BotHelp;