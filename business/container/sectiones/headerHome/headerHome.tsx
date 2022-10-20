import styles from './styles.module.css';
import SearchCompany from "../../../components/searchCompany/searchCompany";
import Star from "../../../components/star/star";
import RedeSociales from "../../../components/redeSociales/redeSociales";
import Mountains from "../../../components/mountains/mountains";
import Humo from "../../../components/humo/humo";
import GoKru from "../../../components/goKru/goKru";
import Nave from "../../../components/nave/nave";
import {useEffect, useState} from "react";


export default function HeaderHome() {

    const [nuve, setNuve] = useState(0);

    useEffect(() => {
        if (nuve < 2000) {
            window.addEventListener('scroll', () => {
                setNuve(window.scrollY);
            });
        }
    }, [nuve]);


    const scroll = {
        transform: `translateY(${nuve}px)`,
    }

    const overflow = {
        overflow: `${nuve < 2000 ? "visible" : "hidden"}`,
    }

    return (
        <>
            <section>
                <div style={overflow} className={styles.headerHome}>
                    <Star/>
                    <div className={styles.general}>
                        <SearchCompany/>
                        <div className={styles.group_2}>
                            <Nave/>
                        </div>
                        <RedeSociales/>
                        <div className={styles.group_1} style={scroll}>

                            <Humo/>
                            <GoKru/>
                            <Mountains/>

                            <div className={styles.plataforma}>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}