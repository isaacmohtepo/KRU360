import styles from './styles.module.css';
import Head from "next/head";

export default function Header() {
    return (
        <>
            <meta name="keywords" content="Kru 360 Impacto a 360° en Cartagena, Colombia"/>
            <meta name="author" content="KRU 360" />
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <Head>
                <meta id="meta-description" name="description"
                      content="En KRU somos tu partner de crecimiento. Con nuestros servicios lograrás modelos de negocios innovadores para impulsar tu empresa más allá del cielo. Para ello, el desarrollo de software y diseño de página web, junto a mentorías para emprendedores y mentoría cultural empresarial para fortalecer la inteligencia emocional en tu equipo, serán clave." />
                    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png"/>
                    <title>Kru 360 Impacto a 360° en Cartagena, Colombia</title>
            </Head>
        </>
);
}