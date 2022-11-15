import type { NextPage } from 'next'
import Layout from "../../business/general/Layout";
import InfoFormularioKru from "../../business/firmas/kru/firmaCorreo/content/formulario/contents/infoFormularioKru";
import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
      <div className={styles.firma}>
          <Layout>
              <InfoFormularioKru  />
          </Layout>
      </div>
  )
}

export default Home
