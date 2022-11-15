import styles from './styles.module.css';
export default function SearchCompany() {
    return (
        <>
            <div className={styles.searchCompany}>
                <div className={styles.title}>
                    <h1>Tu tienes el cohete y nosotros la turbina.</h1>
                </div>
               <div className={styles.group}>
                   <a href="#"><i className='bx bx-right-arrow-alt'></i></a>
                   <input type="text" placeholder="Escribe el nombre de tu empresa y mira qué sucede"/>
               </div>
            </div>

        </>
    )
}