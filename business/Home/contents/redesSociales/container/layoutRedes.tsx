import styles from "../container/layout.module.css";

const LayoutRedes = ({ children, redesSociales } : any) => {
    return (
        <>
            <div className={styles.redesSociales}>
                {children}
            </div>
        </>
    );
}

export default LayoutRedes;