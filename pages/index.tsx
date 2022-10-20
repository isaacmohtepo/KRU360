import type {NextPage} from 'next'
import Layout from "../business/container/layout/layout";
import HeaderHome from "../business/container/sectiones/headerHome/headerHome";
import CrecerEsPosible from "../business/container/sectiones/crecer_es_posible/crecerEsPosible";
import VendeMasMejor from "../business/container/sectiones/vendeMasMejor/vendeMasMejor";
import ParallaxCieloTexto from "../business/container/sectiones/parallaxCieloTexto/parallaxCieloTexto";
import ConquistaLaGalaxia from "../business/container/sectiones/conquistaLaGalaxia/conquistaLaGalaxia";
import LuzPropia from "../business/container/sectiones/luzPropia/luzPropia";
import CieloLimite from "../business/container/sectiones/cieloLimite/cieloLimite";
import MedicionEsAceleracion from "../business/container/sectiones/medicionEsAceleracion/medicioEsAceleracion";
import HumoParallax from "../business/components/humoParallax/humoParallax";

const Home: NextPage = () => {

    return (
        <>
            <Layout>
                <HeaderHome/>
                <CrecerEsPosible/>
                <VendeMasMejor/>
                <ParallaxCieloTexto/>
                <HumoParallax/>
                <ConquistaLaGalaxia/>
                <LuzPropia/>
                <CieloLimite/>
                <MedicionEsAceleracion/>

            </Layout>

        </>
    )
}

export default Home
