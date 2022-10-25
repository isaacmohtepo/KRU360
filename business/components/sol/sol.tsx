import styles from "./styles.module.css";

export default function Sol() {
    return(
        <>
            <div data-aos="fade-up"  className={styles.sol}>
                <img loading={"lazy"} src="/images/sol.png" alt="Sol KRU"/>
            </div>
        </>
    )
}