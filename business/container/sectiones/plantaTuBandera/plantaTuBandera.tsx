import styles from './styles.module.css';
import ContentPlantaBandera from "../../../components/contentPlantaBandera/contentPlantaBandera";


export default function PlantaTuBandera() {
    return (
        <>
            <section className={styles.section}>

                <div className={styles.content}>
                    <ContentPlantaBandera />
                </div>

                <div className={styles.luna}>
                    <img width={292} height={292} src="/images/Luna.png" alt="Luna KRU"/>
                </div>

                <div className={styles.estacion}>
                    <img width={676} height={301} src="/images/estacion-de-control.png" alt="Estacion de contro KRO"/>
                </div>

                <div className={styles.nave3}>
                    <img width={166} height={210} src="/images/nave-aterrizando3.png" alt="Nave KRU"/>
                </div>
                <div className={styles.nave2}>
                    <img width={244} height={309} src="/images/nave-aterrizando2.png" alt="Nave KRU"/>
                </div>

                <div className={styles.nave}>
                    <img width={339} height={408} src="/images/nave-aterrizando.png" alt="Nave KRU"/>
                </div>
                <div className={styles.antenas}>
                    <img width={171} height={426} src="/images/antenas.png" alt="Antenas"/>
                </div>
                <div className={styles.plataforma}>
                    <img width={567} height={58} src="/images/plataforma-blanca.png" alt="Plataforma de arrerizaje"/>
                </div>
                <div className={styles.rejas}>
                    <img width={1920} height={50} src="/images/rejas.png" alt="Rejas"/>
                </div>
            </section>
        </>
    )
}