import styles from './videoFondoSection.module.css'

const VideoFondoSection = () => {
    return (
        <>
            <video className={styles.videoHome3} src="/video/Vendemásymejor.mp4" autoPlay muted loop
                   poster="/images/videoStatico.png"></video>
            <video className={styles.videoHome3Movil} src="/video/VendemasymejorMovil.mp4" autoPlay muted loop
                   poster="/images/videoStatico.png"></video>
        </>
    );
}

export default VideoFondoSection;