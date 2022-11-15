import styles from './vendeMas.module.css'
import TextoVendeMas from "../../contents/contenido/textoVendeMas/textoVendeMas";

const VendeMas = () => {
    return(
        <>
            <div className={styles.baseVendeMas}>
                <TextoVendeMas/>
            </div>
        </>
    )

}

export default VendeMas;