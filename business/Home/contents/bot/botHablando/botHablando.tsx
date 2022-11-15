import styles from './botHablando.module.css'
const BotHablando = () => {
    return (
        <>
            <div data-aos="fade-right" className={styles.botHablando}>
                <video className={styles.video} autoPlay loop muted>
                    <source className={styles.video} src="/video/botHablando.webm" type="video/mp4"/>
                </video>
            </div>
        </>
    );
}

export default BotHablando;