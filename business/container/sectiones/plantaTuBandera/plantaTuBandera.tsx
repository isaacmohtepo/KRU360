import styles from './styles.module.css';
import ContentPlantaBandera from "../../../components/contentPlantaBandera/contentPlantaBandera";
import Cohete from "../../../components/cohtete/cohete";
import Image from "next/image";


export default function PlantaTuBandera() {
    return (
        <>

            <section className={styles.section}>

                <div className={styles.content}>
                    <ContentPlantaBandera/>
                </div>

                <div className={styles.luna}>
                    <Image width={292} height={292} objectFit={"cover"} src="/images/Luna.png" alt="Luna KRU"/>
                </div>

                <div className={styles.estacion}>
                    <Image width={676} height={301} objectFit={"cover"} src="/images/estacion-de-control.png" alt="Estacion de contro KRO"/>
                </div>

                <div className={styles.nave3}>
                    <Image width={166} height={210} objectFit={"cover"} src="/images/nave-aterrizando3.png" alt="Nave KRU"/>
                </div>
                <div className={styles.nave2}>
                    <Image width={244} height={309} objectFit={"cover"} src="/images/nave-aterrizando2.png" alt="Nave KRU"/>
                </div>

                <div className={styles.nave}>
                        <Image width={339} height={408} objectFit={"cover"} src="/images/nave-aterrizando.png" alt="Nave KRU"/>
                </div>

                <div className={styles.antenas}>
                    <Image width={171} height={426} objectFit={"cover"} src="/images/antenas.png" alt="Antenas"/>
                </div>
                <div className={styles.plataforma}>
                    <Image width={567} height={58} objectFit={"cover"} src="/images/plataforma-blanca.png" alt="Plataforma de arrerizaje"/>
                </div>
                <div className={styles.rejas}>
                    <Image width={1920} height={50} objectFit={"cover"} src="/images/rejas.png" alt="Rejas"/>
                </div>

            </section>
        </>
    )
}