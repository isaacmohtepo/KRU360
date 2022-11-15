import styles from './styles.module.css';
import Sol from "../../../components/sol/sol";
import ContentLuzPropia from "../../../components/contentLuzPropia/contentLuzPropia";
import HumoSol from "../../../components/humoSol/humoSol";

export default function LuzPropia() {
    return (
        <>
            <section className={styles.section}>
                <Sol/>
                <HumoSol/>
                <div className={styles.content}>
                    <ContentLuzPropia/>
                </div>
            </section>
        </>
    )
}