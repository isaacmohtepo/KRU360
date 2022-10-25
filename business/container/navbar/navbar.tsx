import styles from './styles.module.css';
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav>
                <div className={styles.navbar}>
                    <div className={styles.logo}>
                        <Link href="/">
                        <a><img width={181} height={92} src="/images/logos/logo-kru.png" alt="logo | KRU 360"/></a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}